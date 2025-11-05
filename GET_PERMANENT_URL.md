# Get Your Permanent Website URL

To get a permanent URL for your website, you need to deploy it. Here are the easiest options:

## 🚀 Option 1: Deploy with Vercel (Recommended - FREE)

### Quick Deploy (2 minutes):

1. **Run this command in your terminal:**
   ```bash
   npx vercel --prod
   ```

2. **Follow the prompts:**
   - It will open a browser for you to login/signup to Vercel (free account)
   - Confirm your project settings (just press Enter for defaults)
   - Wait ~2 minutes for deployment

3. **You'll get a permanent URL like:**
   - `https://corporate-website-abc123.vercel.app`
   - This URL will work forever (as long as you keep the Vercel account)

---

## 🌐 Option 2: Deploy via GitHub + Vercel (Best for updates)

1. **Push to GitHub:**
   ```bash
   # Create a new repo on github.com first, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Connect your GitHub account
   - Select your repository
   - Click "Deploy"
   - **Done!** Your site gets a permanent URL

---

## 📱 Option 3: Deploy to Netlify (Alternative - FREE)

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login (free)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repo
   - Build settings: `npm run build` and publish directory: `.next`
   - Click "Deploy site"
   - Get permanent URL like: `https://your-site.netlify.app`

---

## ⚡ Quick Start Right Now:

**Run this command:**
```bash
npx vercel --prod
```

Then login when prompted, and you'll have your permanent URL in 2 minutes!

---

## 💡 After Deployment:

- Your site will be **permanently online** 24/7
- URL will be something like: `https://corporate-website-[random].vercel.app`
- You can add a custom domain later (free or paid)
- All changes auto-deploy when you push to GitHub (if connected)

**Need help?** The deployment process is very simple - just follow the prompts!

