# Kelmi Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, contact form integration, and optimized performance.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 🌓 **Dark Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - 90+ Lighthouse scores with code splitting
- 🎭 **Framer Motion Animations** - Smooth scroll-triggered and micro-interactions
- 📧 **Contact Form** - Integrated with Resend for email functionality
- 🔍 **SEO Optimized** - Structured data, sitemap, and meta tags
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation support

## 🛠️ Tech Stack

### Core

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### Libraries & Tools

- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kelmi24/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🎯 Performance

This portfolio is optimized for performance with:

- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: WebP/AVIF formats with Next.js Image
- **Security Headers**: HSTS, CSP, and other security best practices
- **Bundle Analysis**: Integrated @next/bundle-analyzer
- **Font Optimization**: Preloaded fonts with display: swap

**Target Metrics:**

- Lighthouse Performance: 90+
- SEO Score: 100
- Accessibility: 95+
- Best Practices: 95+

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── skills/           # Skills section
│   └── contact/          # Contact form
├── lib/                   # Utility functions
│   ├── animations.ts     # Framer Motion variants
│   ├── skills.ts         # Skills data
│   └── structured-data.ts # SEO structured data
├── hooks/                 # Custom React hooks
└── public/               # Static assets
```

## 🎨 Customization

### Update Personal Information

1. **Contact Email**: Update `CONTACT_EMAIL` in `.env.local`
2. **GitHub Link**: Edit `components/layout/Footer.tsx`
3. **Skills**: Modify `lib/skills.ts`
4. **About Section**: Edit `app/page.tsx`

### Theme Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com/) for email delivery:

1. Sign up at [resend.com](https://resend.com/)
2. Get your API key
3. Add to `.env.local` as `RESEND_API_KEY`
4. Update `CONTACT_EMAIL` with your email

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kelmi24/portfolio-website)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Kelmi**

- GitHub: [@Kelmi24](https://github.com/Kelmi24)
- Email: gederickelme1@gmail.com

---

⭐ If you found this helpful, please consider giving it a star!
