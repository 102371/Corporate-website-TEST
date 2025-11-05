# Modern Corporate Website with React Bricks CMS

A modern, responsive corporate website built with Next.js, TypeScript, Tailwind CSS, and React Bricks CMS integration.

## Features

- 🚀 **Next.js 14** with App Router
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🎭 **Framer Motion** animations
- 🧱 **React Bricks CMS** integration
- ♿ **Accessible** components
- 🎯 **SEO Optimized**

## Pages

- **Home** - Hero section, features, services, stats, testimonials, and CTA
- **About** - Company story, values, and team
- **Services** - Detailed service offerings and process
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up React Bricks (optional):

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_REACT_BRICKS_APP_ID=your_app_id
NEXT_PUBLIC_REACT_BRICKS_API_KEY=your_api_key
NEXT_PUBLIC_REACT_BRICKS_ENVIRONMENT=production
```

To get your React Bricks credentials:
1. Sign up at [reactbricks.com](https://www.reactbricks.com)
2. Create a new project
3. Copy your App ID and API Key

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## React Bricks CMS

This project includes React Bricks CMS integration with custom content blocks:

- **HeroBrick** - Hero section with title, subtitle, and CTA
- **FeatureBrick** - Feature card with icon, title, and description
- **ServiceBrick** - Service card with icon, title, description, and link
- **TestimonialBrick** - Testimonial with rating, content, name, and role
- **CTABrick** - Call-to-action section

To use React Bricks:
1. Configure your API keys in `.env.local`
2. Visit `/react-bricks` to access the CMS editor
3. Create and edit content blocks visually

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── bricks/                # React Bricks content blocks
│   ├── HeroBrick.tsx
│   ├── FeatureBrick.tsx
│   └── ...
└── public/                # Static assets
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is set to blue, but you can change it to match your brand.

### Content

- Update text content directly in component files
- Use React Bricks CMS for visual content editing
- Modify images in the `public` directory

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Custom utilities: `tailwind.config.js`

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Bricks](https://www.reactbricks.com/) - Headless CMS
- [Lucide React](https://lucide.dev/) - Icons

## License

MIT

## Support

For issues and questions, please open an issue on the repository.

