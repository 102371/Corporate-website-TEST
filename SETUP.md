# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## React Bricks CMS Setup (Optional)

The website works perfectly without React Bricks. The CMS integration is optional and provides visual content editing capabilities.

### To Enable React Bricks:

1. **Sign up** at [reactbricks.com](https://www.reactbricks.com)

2. **Create a project** and get your credentials:
   - App ID
   - API Key

3. **Create `.env.local`** file in the root directory:
   ```env
   NEXT_PUBLIC_REACT_BRICKS_APP_ID=your_app_id
   NEXT_PUBLIC_REACT_BRICKS_API_KEY=your_api_key
   NEXT_PUBLIC_REACT_BRICKS_ENVIRONMENT=production
   ```

4. **Restart** your development server

5. **Visit** `/react-bricks` to access the CMS editor

### Custom Content Blocks

The project includes pre-built React Bricks content blocks in the `bricks/` directory:

- **HeroBrick** - Hero sections
- **FeatureBrick** - Feature cards
- **ServiceBrick** - Service cards
- **TestimonialBrick** - Testimonials
- **CTABrick** - Call-to-action sections

These can be customized and registered in `react-bricks.config.ts`.

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Content
- Update text in component files
- Modify images in the `public` directory
- Use React Bricks for visual editing (when configured)

### Pages
All pages are in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/contact/page.tsx` - Contact page

## Build for Production

```bash
npm run build
npm start
```

## Need Help?

Check the main [README.md](./README.md) for more details.

