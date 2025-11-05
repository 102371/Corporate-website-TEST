#!/bin/bash

echo "🚀 Deploying Corporate Website to Vercel..."
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

echo "Logging in to Vercel..."
vercel login

echo ""
echo "Deploying to production..."
vercel --prod

echo ""
echo "✅ Deployment complete! Your website is now live!"
echo "Check the URL provided above."

