import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeClassFixer } from '@/components/ThemeClassFixer';
import { personStructuredData, websiteStructuredData } from '@/lib/structured-data';
import { SmoothAnimatedBackground } from '@/components/SmoothAnimatedBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  title: 'Portfolio | Kelmi - Full Stack Developer',
  description:
    'Professional portfolio of Kelmi, a Full Stack Web Developer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Kelmi',
  ],
  authors: [{ name: 'Kelmi' }],
  creator: 'Kelmi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-kelmi.com',
    title: 'Portfolio | Kelmi - Full Stack Developer',
    description:
      'Professional portfolio of Kelmi, a Full Stack Web Developer specializing in modern web technologies.',
    siteName: 'Kelmi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Kelmi - Full Stack Developer',
    description:
      'Professional portfolio of Kelmi, a Full Stack Web Developer specializing in modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personStructuredData, websiteStructuredData]),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Smooth Animated Background */}
          <SmoothAnimatedBackground />
          
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
          <ThemeClassFixer />
        </ThemeProvider>
      </body>
    </html>
  );
}
