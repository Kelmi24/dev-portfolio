import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, budget, honeypot } = result.data;

    // Check honeypot (spam protection)
    if (honeypot) {
      return NextResponse.json(
        { message: 'Spam detected' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <hr />
          <h2>Message:</h2>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
