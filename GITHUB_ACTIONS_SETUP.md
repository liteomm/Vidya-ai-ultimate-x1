# GitHub Actions Setup Guide - Build Signed APK

This guide explains how to set up GitHub Actions to automatically build your signed release APK and AAB files.

## Prerequisites

1. A GitHub repository (create one at https://github.com/new)
2. Your keystore file (already created: `vidya-release-key.keystore`)
3. Keystore credentials

## Step 1: Encode Your Keystore

Convert your keystore file to Base64 for GitHub Secrets:

```bash
base64 -w 0 android/app/vidya-release-key.keystore > keystore-base64.txt
cat keystore-base64.txt
```

Copy the entire output.

## Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these secrets:

| Secret Name | Value |
|-------------|-------|
| `KEYSTORE_BASE64` | Paste the Base64 encoded keystore from Step 1 |
| `KEYSTORE_PASSWORD` | `vidya123456` |
| `KEY_ALIAS` | `vidya-key` |
| `KEY_PASSWORD` | `vidya123456` |

## Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vidya-ai-ultimate-x.git
git push -u origin main
```

## Step 4: Trigger the Build

The workflow will automatically run when you:

1. **Push to main/master/develop branch** - Builds APK and AAB as artifacts
2. **Create a pull request** - Builds to verify changes
3. **Manually trigger** - Go to Actions tab, click "Build Signed APK", click "Run workflow"

## Step 5: Download the APK

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Click the latest workflow run
4. Scroll down to **Artifacts**
5. Download `vidya-ai-release-apk` (APK) or `vidya-ai-release-aab` (AAB)

## Step 6: Create a Release (Optional)

To create a GitHub Release with the APK/AAB attached:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow will automatically create a release with the APK and AAB files attached.

## Step 7: Upload to Play Store (Optional)

To automatically upload to Google Play Store:

1. Create a Google Play Service Account (see Google Play Console docs)
2. Download the JSON key file
3. Convert to Base64:
   ```bash
   base64 -w 0 service-account-key.json > service-account-base64.txt
   ```
4. Add as GitHub Secret: `PLAY_STORE_SERVICE_ACCOUNT`
5. The workflow will automatically upload when you create a tag

## Workflow Details

The workflow does the following:

- ✅ Checks out your code
- ✅ Sets up Node.js and Java
- ✅ Installs Android SDK and build tools
- ✅ Installs npm dependencies
- ✅ Decodes and uses your keystore
- ✅ Builds signed release APK
- ✅ Builds signed release AAB
- ✅ Uploads artifacts for download
- ✅ Creates GitHub Release (on tags)
- ✅ Uploads to Play Store (optional)

## Build Status

Check the status of your builds:

1. Go to **Actions** tab in your repository
2. Click on any workflow run to see details
3. Check **Build release APK** and **Build release AAB** steps for logs

## Troubleshooting

### Build fails with "Keystore not found"
- Ensure `KEYSTORE_BASE64` secret is correctly set
- Verify the Base64 encoding is complete (no truncation)

### Build fails with "Invalid keystore password"
- Check that `KEYSTORE_PASSWORD` matches the keystore password
- Ensure there are no extra spaces in the secret value

### Build fails with "NDK not found"
- The workflow automatically installs NDK 27.1.12297006
- If it fails, check the build logs for specific errors

### APK not appearing in artifacts
- Check the build logs for compilation errors
- Ensure all dependencies are correctly installed
- Verify Java version compatibility

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit your keystore file** - It's already in `.gitignore`
2. **Keep secrets private** - GitHub Secrets are encrypted
3. **Rotate credentials** - Consider changing keystore password periodically
4. **Limit access** - Only add trusted collaborators to the repository

## Next Steps

After successful build:

1. **Test the APK** - Install on an Android device and test functionality
2. **Upload to Play Store** - Use Google Play Console to upload AAB
3. **Create releases** - Tag versions in Git to create releases
4. **Monitor builds** - Check Actions tab for any failures

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Native Build Guide](https://reactnative.dev/docs/signed-apk-android)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [Android Gradle Plugin Documentation](https://developer.android.com/build)

---

**Your keystore credentials:**
- Keystore file: `android/app/vidya-release-key.keystore`
- Store password: `vidya123456`
- Key alias: `vidya-key`
- Key password: `vidya123456`

Keep these safe and never share them publicly!
