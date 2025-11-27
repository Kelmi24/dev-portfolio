# Kelmi Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animated gradients, dark mode, contact form integration, and optimized performance.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

**Live Demo:** [https://kelmi-devportfolio.vercel.app](https://kelmi-devportfolio.vercel.app)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth layered gradient animations
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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Kelmi24/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file:

   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Open browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kelmi24/dev-portfolio)

**Quick Steps:**

1. **Sign up** at [vercel.com](https://vercel.com) with GitHub
2. **Import** your repository
3. **Add environment variables:**
   - `RESEND_API_KEY` - Get from [resend.com](https://resend.com)
   - `CONTACT_EMAIL` - Your email address
4. **Deploy!**

Your site will be live at `https://your-project.vercel.app`

### Automatic Updates

Every push to `main` branch automatically deploys:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will detect, build, and deploy automatically!

## 📧 Contact Form Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=your.email@example.com
   ```
4. For production, add these to Vercel environment variables

## 🎨 Customization

### Update Personal Information

- **Contact Email**: Update `CONTACT_EMAIL` in `.env.local`
- **GitHub Link**: Edit `components/layout/Footer.tsx`
- **Skills**: Modify `lib/skills.ts`
- **About Section**: Edit `app/page.tsx`

### Theme Colors

Customize in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/contact/       # Contact form API route
│   ├── layout.tsx         # Root layout with theme
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── skills/           # Skills section
│   ├── contact/          # Contact form
│   └── SmoothAnimatedBackground.tsx  # Layered gradient animation
├── lib/                   # Utilities
│   ├── animations.ts     # Framer Motion variants
│   ├── skills.ts         # Skills data with brand icons
│   └── structured-data.ts # SEO structured data
└── public/               # Static assets
```

## 🎯 Performance

**Optimizations:**

- Code splitting with dynamic imports
- WebP/AVIF image formats
- Preloaded fonts with `display: swap`
- Security headers (HSTS, CSP)
- Layered gradient animations using GPU-accelerated opacity transitions

**Target Metrics:**

- Lighthouse Performance: 90+
- SEO Score: 100
- Accessibility: 95+
- Best Practices: 95+

## 🆘 Troubleshooting

### Build Fails

```bash
# Test build locally
npm run build

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working

1. Verify `RESEND_API_KEY` is set in Vercel
2. Check Resend dashboard for API errors
3. Ensure `CONTACT_EMAIL` is configured
4. Redeploy after adding environment variables

### Git Push Issues

```bash
# Use GitHub CLI
gh auth login

# Or use SSH
git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kelmi**

- GitHub: [@Kelmi24](https://github.com/Kelmi24)
- Email: gederickelme1@gmail.com
- Portfolio: [https://kelmi-devportfolio.vercel.app](https://kelmi-devportfolio.vercel.app)

---

⭐ If you found this helpful, please consider giving it a star!
