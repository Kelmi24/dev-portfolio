# Vercel Deployment Guide

Deploy your Next.js portfolio to Vercel in minutes with full support for the contact form, dark mode, and all features.

## Why Vercel?

✅ **Perfect for Next.js** - Built by the creators of Next.js  
✅ **Automatic deployments** - Push to GitHub, auto-deploy  
✅ **API routes work** - Your contact form will function perfectly  
✅ **Free tier** - Generous free plan for personal projects  
✅ **Custom domains** - Easy to add your own domain  
✅ **Edge network** - Fast global CDN

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Sign Up / Sign In

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. Click **"Add New..."** → **"Project"**
2. Find `portfolio-website` in your repository list
3. Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect Next.js settings. You just need to:

1. **Project Name**: `kelmi-portfolio` (or keep default)
2. **Framework Preset**: Next.js (auto-detected ✅)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (auto-detected ✅)
5. **Output Directory**: `.next` (auto-detected ✅)

### Step 4: Add Environment Variables

Click **"Environment Variables"** and add:

| Name             | Value                     |
| ---------------- | ------------------------- |
| `RESEND_API_KEY` | Your Resend API key       |
| `CONTACT_EMAIL`  | `gederickelme1@gmail.com` |

> **Where to get RESEND_API_KEY:**
>
> 1. Go to [resend.com](https://resend.com)
> 2. Sign up / Log in
> 3. Go to **API Keys** → **Create API Key**
> 4. Copy the key and paste it here

### Step 5: Deploy!

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. You'll get a URL like: `https://kelmi-portfolio.vercel.app`

🎉 **Done!** Your portfolio is now live!

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate with GitHub.

### Step 3: Deploy

```bash
# Navigate to your project directory
cd "/Users/rickelme/Documents/Kelmi Full Stack Developer/ZTM Full Stack Web Developer/Portfolio Kelmi"

# Deploy to Vercel
vercel
```

### Step 4: Follow the Prompts

```
? Set up and deploy "~/Portfolio Kelmi"? [Y/n] y
? Which scope do you want to deploy to? Your Name
? Link to existing project? [y/N] n
? What's your project's name? kelmi-portfolio
? In which directory is your code located? ./
```

### Step 5: Add Environment Variables

```bash
# Add environment variables
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL

# Deploy to production
vercel --prod
```

---

## Post-Deployment Steps

### 1. Test Your Live Site

Visit your Vercel URL and test:

- ✅ All pages load correctly
- ✅ Dark mode toggle works
- ✅ Animations are smooth
- ✅ Contact form submits successfully
- ✅ Mobile responsiveness

### 2. Set Up Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `kelmi.dev`)
4. Follow DNS configuration instructions

### 3. Enable Automatic Deployments

Already enabled! Every push to `main` branch will auto-deploy.

**Preview deployments**: Every pull request gets a unique preview URL.

### 4. Monitor Performance

1. Go to **"Analytics"** tab in Vercel
2. View real-time performance metrics
3. Check Core Web Vitals scores

---

## Updating Your Site

### Automatic Updates (Recommended)

Just push to GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel will automatically:

1. Detect the push
2. Build your site
3. Deploy the new version
4. Keep the same URL

### Manual Deployment

```bash
vercel --prod
```

---

## Environment Variables Reference

| Variable         | Purpose                        | Example                   |
| ---------------- | ------------------------------ | ------------------------- |
| `RESEND_API_KEY` | Email API key for contact form | `re_xxxxxxxxxxxxx`        |
| `CONTACT_EMAIL`  | Your email to receive messages | `gederickelme1@gmail.com` |

### How to Update Environment Variables

**Via Dashboard:**

1. Go to project → **Settings** → **Environment Variables**
2. Edit or add new variables
3. Redeploy for changes to take effect

**Via CLI:**

```bash
vercel env add VARIABLE_NAME
vercel env rm VARIABLE_NAME
vercel env ls
```

---

## Troubleshooting

### Build Fails

**Check build logs:**

1. Go to **"Deployments"** tab
2. Click on the failed deployment
3. View build logs for errors

**Common fixes:**

```bash
# Test build locally first
npm run build

# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working

1. Verify `RESEND_API_KEY` is set correctly
2. Check Resend dashboard for API errors
3. Ensure `CONTACT_EMAIL` is set
4. Test API route: `https://your-site.vercel.app/api/contact`

### Environment Variables Not Working

After adding/updating environment variables:

1. Go to **"Deployments"** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

---

## Vercel Dashboard Features

### Analytics

- Real-time visitor data
- Core Web Vitals
- Performance insights

### Logs

- Function logs (API routes)
- Build logs
- Runtime logs

### Speed Insights

- Lighthouse scores
- Performance recommendations
- Real user metrics

---

## Cost & Limits (Free Tier)

✅ **100 GB bandwidth/month**  
✅ **Unlimited deployments**  
✅ **Automatic HTTPS**  
✅ **Automatic preview deployments**  
✅ **1000 serverless function invocations/day**

Perfect for a portfolio site! You won't hit these limits.

---

## Quick Reference

| Action               | Command         |
| -------------------- | --------------- |
| Deploy to production | `vercel --prod` |
| Deploy preview       | `vercel`        |
| View logs            | `vercel logs`   |
| List deployments     | `vercel ls`     |
| Remove project       | `vercel remove` |

---

## Your Deployment URLs

After deployment, you'll have:

- **Production**: `https://kelmi-portfolio.vercel.app`
- **Custom domain** (if added): `https://your-domain.com`
- **Preview URLs**: Unique URL for each pull request

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test all features
3. ✅ Add custom domain (optional)
4. ✅ Share your portfolio!
5. ✅ Update README with live URL

---

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

---

🚀 **Ready to deploy?** Choose Method 1 (Dashboard) for the easiest experience!
