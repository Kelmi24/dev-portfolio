#!/bin/bash
echo "🚀 Starting manual deployment fix..."

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "fix: manual deployment of all pending changes (animated background, reordering, profile pic)"

# Push to remote
echo "Ep Pushing to GitHub..."
git push origin main

echo "✅ Done! Check your repository now."
