#!/bin/bash
echo "🚀 Starting manual deployment fix (Attempt 2)..."

# Explicitly add the missing image file
echo "📸 Adding profile image..."
git add public/images/profile-original.png

# Add any other changes
echo "📦 Adding other changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "fix: restore missing profile-original.png and trigger deployment"

# Push to remote
echo "Ep Pushing to GitHub..."
git push origin main

echo "✅ Done! The profile picture should be fixed now."
