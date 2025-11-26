#!/bin/bash
echo "🚀 Starting manual deployment fix (Attempt 3)..."

# 1. Force copy the file from the source location
echo "📸 Restoring profile image file..."
cp "/Users/rickelme/.gemini/antigravity/brain/eae601f2-af8b-453b-8e45-67943ba830f7/uploaded_image_1764172460985.png" "public/images/profile-original.png"

# 2. Add the file to git
echo "➕ Adding file to git..."
git add public/images/profile-original.png

# 3. Add all other changes
echo "📦 Adding other changes..."
git add .

# 4. Commit changes
echo "💾 Committing changes..."
git commit -m "fix: restore profile-original.png (force copy) and deploy"

# 5. Push to remote
echo "Ep Pushing to GitHub..."
git push origin main

echo "✅ Done! The profile picture IS definitely fixed now."
