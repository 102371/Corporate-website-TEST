# Deployment Guide

Your website is ready to deploy! Here are the easiest ways to make it live:

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is made by the Next.js team and offers the simplest deployment for Next.js apps.

### Using Vercel CLI (Fastest):

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Login to your Vercel account (or create one)
   - Confirm project settings
   - Deploy!

3. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Using Vercel Web Interface:

1. **Push to GitHub** (if not already):
   ```bash
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (free with GitHub)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live in ~2 minutes!**

## Option 2: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

## Option 3: Deploy to Other Platforms

### Railway:
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

### Render:
- Connect your GitHub repo
- Select "Web Service"
- Build command: `npm run build`
- Start command: `npm start`

## After Deployment

Your website will be live at a URL like:
- Vercel: `your-project.vercel.app`
- Netlify: `your-project.netlify.app`

You can also add a custom domain in the platform's settings!

## Quick Deploy Commands

If you have Vercel CLI installed, just run:
```bash
vercel --prod
```

That's it! Your site will be live in seconds! 🚀

