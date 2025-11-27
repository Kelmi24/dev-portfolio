#!/bin/bash
echo "🚀 Deploying consolidated README..."

# Add changes
echo "📦 Adding changes..."
git add README.md
git add -u  # Stage deletions

# Commit changes
echo "💾 Committing changes..."
git commit -m "docs: consolidate all markdown files into single clean README

- Combine README, DEPLOYMENT_GUIDE, VERCEL_DEPLOYMENT, GITHUB_SETUP
- Remove redundant documentation files
- Create concise, comprehensive single README
- Include quick start, deployment, and troubleshooting
- Add live demo link and updated project structure"

# Push to remote
echo "⬆️ Pushing to GitHub..."
git push origin main

echo "✅ Done! Documentation consolidated."
