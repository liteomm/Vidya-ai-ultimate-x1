# Quick Start: Build APK with GitHub Actions (5 Minutes)

## What You'll Get

✅ Automatic signed APK builds on every push
✅ Automatic signed AAB for Play Store
✅ Download artifacts directly from GitHub
✅ No local build setup needed

## 5-Minute Setup

### 1. Create GitHub Repository (1 min)

```bash
# Go to https://github.com/new
# Create a new repository named "vidya-ai-ultimate-x"
# Choose "Private" or "Public"
```

### 2. Encode Keystore (1 min)

```bash
cd /home/ubuntu/VidyaAIUltimateX
base64 -w 0 android/app/vidya-release-key.keystore | xclip -selection clipboard
# or copy the output manually
```

### 3. Add GitHub Secrets (2 min)

Go to: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these 4 secrets:

```
KEYSTORE_BASE64 = [paste the Base64 output from step 2]
KEYSTORE_PASSWORD = vidya123456
KEY_ALIAS = vidya-key
KEY_PASSWORD = vidya123456
```

### 4. Push Code to GitHub (1 min)

```bash
cd /home/ubuntu/VidyaAIUltimateX
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vidya-ai-ultimate-x.git
git push -u origin main
```

**Done!** ✅

## Download Your APK

1. Go to your GitHub repo
2. Click **Actions** tab
3. Click the latest workflow run
4. Scroll to **Artifacts**
5. Download `vidya-ai-release-apk`

## Automatic Builds

The workflow automatically builds when you:

- Push to `main`, `master`, or `develop` branch
- Create a pull request
- Manually trigger from Actions tab

## Create a Release (Optional)

To create a GitHub Release with the APK attached:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The APK and AAB will be automatically attached to the release.

## Troubleshooting

**Build failed?** Check the Actions tab for error logs.

**Can't find APK?** Make sure the build completed successfully (green checkmark).

**Secrets not working?** Verify you added all 4 secrets with exact names.

## Next Steps

1. ✅ Build APK
2. ✅ Test on Android device
3. ✅ Upload AAB to Google Play Console
4. ✅ Publish to Play Store

---

**Need help?** See `GITHUB_ACTIONS_SETUP.md` for detailed instructions.
