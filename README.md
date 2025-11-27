# Kelmi Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my work with smooth animated gradients, dark mode support, a functional contact form, and performance optimizations.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

**Live Demo:** [https://kelmi-devportfolio.vercel.app](https://kelmi-devportfolio.vercel.app)

## Features

- Modern, clean design with layered gradient animations
- Dark mode with system preference detection
- Fully responsive across all devices
- Performance optimized with 90+ Lighthouse scores
- Smooth animations powered by Framer Motion
- Working contact form integrated with Resend
- SEO optimized with structured data and sitemap
- Accessible design following WCAG AA guidelines

## Tech Stack

**Core Technologies**

- Framework: [Next.js 15](https://nextjs.org/) with App Router
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

**Key Libraries**

- Animations: [Framer Motion](https://www.framer.com/motion/)
- Theme Management: [next-themes](https://github.com/pacocoursey/next-themes)
- Form Handling: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- Email Service: [Resend](https://resend.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Notifications: [React Hot Toast](https://react-hot-toast.com/)

## Getting Started

**Prerequisites**

- Node.js 18 or higher
- npm package manager

**Installation Steps**

1. Clone the repository

   ```bash
   git clone https://github.com/Kelmi24/dev-portfolio.git
   cd dev-portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server
- `npm run lint` - Checks code quality with ESLint
- `npm run analyze` - Analyzes bundle size

## Deployment

### Deploying to Vercel

Vercel is the recommended platform for deploying this Next.js application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kelmi24/dev-portfolio)

**Deployment Steps:**

1. Sign up at [vercel.com](https://vercel.com) using your GitHub account
2. Import your repository from the Vercel dashboard
3. Configure environment variables:
   - `RESEND_API_KEY` - Obtain from [resend.com](https://resend.com)
   - `CONTACT_EMAIL` - Your email address for receiving messages
4. Click deploy and wait for the build to complete

Your site will be live at `https://your-project.vercel.app`

**Automatic Deployments**

Once connected, every push to the main branch triggers an automatic deployment:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel handles the rest automatically.

## Contact Form Configuration

The contact form requires a Resend API key to function properly.

1. Create an account at [resend.com](https://resend.com)
2. Generate an API key from your dashboard
3. Add the key to your `.env.local` file:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=your.email@example.com
   ```
4. For production, add these same variables to your Vercel project settings

## Customization

**Updating Personal Information**

- Contact email: Modify `CONTACT_EMAIL` in your environment variables
- GitHub link: Edit `components/layout/Footer.tsx`
- Skills list: Update `lib/skills.ts`
- About section: Modify content in `app/page.tsx`

**Changing Theme Colors**

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Add your custom color values here
  }
}
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/contact/       # Contact form API endpoint
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main homepage
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── layout/           # Header and Footer components
│   ├── skills/           # Skills section components
│   ├── contact/          # Contact form component
│   └── SmoothAnimatedBackground.tsx  # Layered gradient animation
├── lib/                   # Utility functions and data
│   ├── animations.ts     # Framer Motion animation variants
│   ├── skills.ts         # Skills data with brand icons
│   └── structured-data.ts # SEO structured data
└── public/               # Static assets
```

## Performance

This portfolio implements several performance optimizations:

- Code splitting with dynamic imports for heavy components
- Modern image formats (WebP/AVIF) via Next.js Image component
- Optimized font loading with `display: swap`
- Security headers including HSTS and CSP
- GPU-accelerated animations using layered opacity transitions

**Performance Targets:**

- Lighthouse Performance: 90+
- SEO Score: 100
- Accessibility: 95+
- Best Practices: 95+

## Troubleshooting

**Build Failures**

If the build fails, try these steps:

```bash
# Test the build locally first
npm run build

# If that fails, clear the cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Contact Form Issues**

If the contact form isn't working:

1. Verify that `RESEND_API_KEY` is set correctly in Vercel
2. Check your Resend dashboard for any API errors
3. Confirm `CONTACT_EMAIL` is configured
4. Redeploy your application after adding or updating environment variables

**Git Push Problems**

If you encounter authentication issues when pushing to GitHub:

```bash
# Use GitHub CLI for authentication
gh auth login

# Or switch to SSH
git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
```

## License

This project is open source and available under the MIT License.

## Contact

**Kelmi**

- GitHub: [@Kelmi24](https://github.com/Kelmi24)
- Email: gederickelme1@gmail.com
- Portfolio: [https://kelmi-devportfolio.vercel.app](https://kelmi-devportfolio.vercel.app)

---

If you find this project helpful, consider giving it a star on GitHub.
