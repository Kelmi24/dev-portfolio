# Complete Deployment Guide - Start from Scratch

This guide will walk you through deploying your portfolio to Vercel with a **brand new GitHub repository**.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:

- [ ] GitHub account (sign up at [github.com](https://github.com))
- [ ] Your portfolio code on your computer
- [ ] Internet connection

That's it! We'll set up everything else together.

---

## Part 1: Create New GitHub Repository

### Step 1: Go to GitHub

1. Open your browser
2. Go to [github.com](https://github.com)
3. Sign in to your account

### Step 2: Create New Repository

1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"**

### Step 3: Fill in Repository Details

**Important settings:**

| Field                     | What to enter                                  |
| ------------------------- | ---------------------------------------------- |
| **Repository name**       | `kelmi-portfolio` (or any name you like)       |
| **Description**           | `My professional portfolio built with Next.js` |
| **Visibility**            | ✅ **Public** (required for free GitHub Pages) |
| **Initialize repository** | ❌ **DO NOT CHECK** any boxes                  |

> **Why no initialization?** Because you already have code locally. We'll push it up next.

4. Click **"Create repository"**

### Step 4: Copy Your Repository URL

After creating, GitHub will show you a page with setup instructions. You'll see a URL like:

```
https://github.com/Kelmi24/kelmi-portfolio.git
```

**Keep this page open!** We'll use these commands in the next step.

---

## Part 2: Connect Your Local Code to GitHub

### Step 5: Open Terminal

1. Open **Terminal** (on Mac, press `Cmd + Space`, type "Terminal")
2. Navigate to your portfolio folder:

```bash
cd "/Users/rickelme/Documents/Kelmi Full Stack Developer/ZTM Full Stack Web Developer/Portfolio Kelmi"
```

### Step 6: Check Git Status

First, let's see what we have:

```bash
# Check if git is initialized
git status
```

**If you see "not a git repository":**

```bash
git init
```

### Step 7: Remove Old Remote (If Exists)

If you had a previous repository connected:

```bash
# Check current remotes
git remote -v

# If you see an old remote, remove it
git remote remove origin
```

### Step 8: Add Your New Repository

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual values:

```bash
# Add your new repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Example:
# git remote add origin https://github.com/Kelmi24/kelmi-portfolio.git
```

### Step 9: Prepare Your Code

```bash
# Add all files
git add .

# Create a commit
git commit -m "Initial commit: Portfolio website"
```

**If you see an error about user.name or user.email:**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Then try the commit again
git commit -m "Initial commit: Portfolio website"
```

### Step 10: Push to GitHub

```bash
# Set main as default branch and push
git branch -M main
git push -u origin main
```

**Authentication:**

- GitHub may ask you to authenticate
- Use your GitHub username and password (or personal access token)
- Or use GitHub CLI: `gh auth login`

### Step 11: Verify Upload

1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your files! 🎉

---

## Part 3: Deploy to Vercel

### Step 12: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 13: Import Your Repository

1. After signing in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your new repository (e.g., `kelmi-portfolio`)
4. Click **"Import"**

### Step 14: Configure Project Settings

Vercel will auto-detect Next.js. Just verify these settings:

| Setting              | Value                              |
| -------------------- | ---------------------------------- |
| **Framework Preset** | Next.js (auto-detected) ✅         |
| **Root Directory**   | `./` (default)                     |
| **Build Command**    | `npm run build` (auto-detected) ✅ |
| **Output Directory** | `.next` (auto-detected) ✅         |

**Don't change anything unless needed!**

### Step 15: Add Environment Variables

This is **IMPORTANT** for your contact form to work!

1. Scroll down to **"Environment Variables"**
2. Click **"Add"** and enter:

**Variable 1:**

- **Name**: `RESEND_API_KEY`
- **Value**: (Get this from [resend.com](https://resend.com) - see Step 16)

**Variable 2:**

- **Name**: `CONTACT_EMAIL`
- **Value**: `gederickelme1@gmail.com`

### Step 16: Get Your Resend API Key

**Open a new tab** and follow these steps:

1. Go to [resend.com](https://resend.com)
2. Click **"Sign Up"** or **"Log In"**
3. After signing in, go to **"API Keys"** in the sidebar
4. Click **"Create API Key"**
5. Name it: `Portfolio Contact Form`
6. Click **"Create"**
7. **Copy the key** (it starts with `re_`)
8. Go back to Vercel and paste it in the `RESEND_API_KEY` field

> **Important:** Save this key somewhere safe! Resend only shows it once.

### Step 17: Deploy!

1. After adding environment variables, click **"Deploy"**
2. Vercel will start building your site
3. Wait 1-2 minutes for the build to complete

**You'll see:**

- ✅ Installing dependencies
- ✅ Building application
- ✅ Deploying to production

### Step 18: Get Your Live URL

Once deployment is complete:

1. You'll see a **"Congratulations!"** screen
2. Your live URL will be displayed: `https://your-project.vercel.app`
3. Click **"Visit"** to see your portfolio live! 🚀

---

## Part 4: Verify Everything Works

### Step 19: Test Your Live Site

Visit your Vercel URL and check:

- [ ] Homepage loads correctly
- [ ] Dark mode toggle works
- [ ] All sections display (About, Skills, Projects, Contact)
- [ ] Animations are smooth
- [ ] Mobile responsive design works
- [ ] Contact form appears

### Step 20: Test Contact Form

1. Scroll to the contact section
2. Fill out the form with test data
3. Click **"Send Message"**
4. You should see a success message
5. Check your email (`gederickelme1@gmail.com`) for the message

**If the form doesn't work:**

- Check Vercel dashboard → Settings → Environment Variables
- Make sure `RESEND_API_KEY` and `CONTACT_EMAIL` are set
- Redeploy: Deployments → Click "..." → "Redeploy"

---

## Part 5: Future Updates

### How to Update Your Portfolio

Whenever you make changes to your code:

```bash
# 1. Save your changes in your code editor

# 2. Add changes to git
git add .

# 3. Commit with a message
git commit -m "Update portfolio content"

# 4. Push to GitHub
git push origin main
```

**That's it!** Vercel will automatically:

1. Detect the push
2. Build your updated site
3. Deploy the new version
4. Keep the same URL

---

## 🎯 Quick Reference Commands

### Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# View commit history
git log --oneline
```

### Vercel Commands (Optional)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from terminal
vercel --prod

# View deployment logs
vercel logs
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied" when pushing to GitHub

**Solution:**

```bash
# Use GitHub CLI to authenticate
gh auth login

# Or use SSH instead of HTTPS
git remote set-url origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
```

### Problem: Build fails on Vercel

**Solution:**

1. Check the build logs in Vercel dashboard
2. Look for error messages
3. Common fixes:
   - Missing environment variables
   - ESLint errors (we fixed this already!)
   - TypeScript errors

### Problem: Contact form doesn't work

**Solution:**

1. Verify environment variables are set in Vercel
2. Check Resend dashboard for errors
3. Make sure `RESEND_API_KEY` is valid
4. Redeploy after adding variables

### Problem: "Repository already exists"

**Solution:**

```bash
# Remove old remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR-USERNAME/NEW-REPO.git

# Push
git push -u origin main
```

---

## 📊 Summary Checklist

Use this to track your progress:

### GitHub Setup

- [ ] Created new GitHub repository
- [ ] Removed old remote (if existed)
- [ ] Added new remote
- [ ] Committed all files
- [ ] Pushed to GitHub
- [ ] Verified files on GitHub

### Vercel Setup

- [ ] Signed up for Vercel
- [ ] Connected GitHub account
- [ ] Imported repository
- [ ] Added `RESEND_API_KEY` environment variable
- [ ] Added `CONTACT_EMAIL` environment variable
- [ ] Deployed successfully
- [ ] Got live URL

### Testing

- [ ] Visited live site
- [ ] Tested dark mode
- [ ] Tested mobile responsiveness
- [ ] Tested contact form
- [ ] Received test email

---

## 🎉 Success!

Once all checkboxes are complete, you have:

✅ Your portfolio on GitHub  
✅ Your portfolio live on the internet  
✅ Automatic deployments set up  
✅ Working contact form  
✅ Professional portfolio URL to share

**Your live portfolio:** `https://your-project.vercel.app`

---

## 📱 Share Your Portfolio

Now you can share your portfolio:

- Add it to your resume
- Share on LinkedIn
- Add to your GitHub profile
- Include in job applications
- Share with friends and colleagues

**Optional:** Add a custom domain (like `yourname.com`) in Vercel settings!

---

## 🔗 Important Links

- **Your GitHub Repository:** `https://github.com/YOUR-USERNAME/YOUR-REPO`
- **Your Live Portfolio:** `https://your-project.vercel.app`
- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Resend Dashboard:** [resend.com/emails](https://resend.com/emails)

---

## 💡 Tips

1. **Bookmark your Vercel dashboard** for easy access
2. **Save your Resend API key** in a password manager
3. **Update your portfolio regularly** to showcase new projects
4. **Monitor analytics** in Vercel to see visitor stats
5. **Keep your repository public** to showcase your code to employers

---

**Need help?** Check the troubleshooting section above or refer to:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Documentation](https://docs.github.com)

Good luck with your portfolio! 🚀
