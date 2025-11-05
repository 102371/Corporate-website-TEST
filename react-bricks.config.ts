// React Bricks Configuration
// This file configures React Bricks CMS integration
// Make sure to set your environment variables in .env.local

export const reactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_REACT_BRICKS_APP_ID || '',
  apiKey: process.env.NEXT_PUBLIC_REACT_BRICKS_API_KEY || '',
  environment: process.env.NEXT_PUBLIC_REACT_BRICKS_ENVIRONMENT || 'production',
}

// Import your custom bricks here
// Example:
// import HeroBrick from './bricks/HeroBrick'
// import FeatureBrick from './bricks/FeatureBrick'

export const bricks = [
  // Add your brick components here
  // HeroBrick,
  // FeatureBrick,
]

