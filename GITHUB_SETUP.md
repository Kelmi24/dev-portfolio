# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `portfolio-website` (or `kelmi-portfolio`)
   - **Description**: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, contact form, and optimized performance."
   - **Visibility**: ✅ Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see a page with setup instructions. Use these commands:

```bash
# Add the remote repository
git remote add origin https://github.com/Kelmi24/portfolio-website.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure Git User (If Needed)

If you see a message about configuring your identity, run:

```bash
git config --global user.name "Kelmi"
git config --global user.email "gederickelme1@gmail.com"

# Then amend the commit with the correct author
git commit --amend --reset-author --no-edit
```

## Step 4: Verify Upload

1. Refresh your GitHub repository page
2. You should see all 39 files uploaded
3. The README.md will be displayed on the repository homepage

## What's Been Committed

✅ **39 files** including:

- Complete Next.js application
- All components (Header, Footer, Skills, Contact Form, etc.)
- Dark mode implementation
- Framer Motion animations
- SEO optimization (sitemap, robots.txt, structured data)
- Performance optimizations
- Comprehensive README.md

## Next Steps After Pushing

### 1. Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

### 2. Add Repository Topics

On GitHub, add topics to make your repo discoverable:

- `nextjs`
- `typescript`
- `tailwindcss`
- `portfolio`
- `framer-motion`
- `dark-mode`
- `responsive-design`

### 3. Update Repository Settings

- Add a website URL (your deployed Vercel URL)
- Enable GitHub Pages (optional)
- Add repository description

## Troubleshooting

**If push fails with authentication error:**

```bash
# Use GitHub CLI
gh auth login

# Or use SSH instead of HTTPS
git remote set-url origin git@github.com:Kelmi24/portfolio-website.git
```

**If you need to change the repository name:**

```bash
git remote set-url origin https://github.com/Kelmi24/NEW-REPO-NAME.git
```

## Repository URL

Once pushed, your repository will be available at:
**https://github.com/Kelmi24/portfolio-website**

---

🎉 **You're all set!** Your portfolio is now version-controlled and ready to share with the world.
