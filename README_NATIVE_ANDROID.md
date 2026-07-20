# VIDYA AI Ultimate X - Native Android App

A production-ready AI teacher mobile application built with React Native CLI (no Expo) for native Android compilation and Google Play Store publishing.

## Features

✅ **Material Design 3** - 8 complete themes with 7 accent colors
✅ **5 Main Screens** - Home, Chat, Tools, History, Settings
✅ **Native Android** - Compiles directly in Android Studio
✅ **Production Ready** - Ready for APK/AAB generation and Play Store submission
✅ **Theme Persistence** - Instant theme switching with AsyncStorage
✅ **Responsive Design** - Works on all Android screen sizes

## Project Structure

```
src/
├── theme/           # Material Design 3 theme system
├── components/      # Reusable MD3 components
└── screens/         # 5 main screens with navigation
```

## Prerequisites

- Node.js 22.11.0+
- Android SDK (API 24+)
- Android Studio
- Java Development Kit (JDK 11+)

## Installation

```bash
cd /home/ubuntu/VidyaAIUltimateX
npm install
```

## Running the App

### Option 1: Using React Native CLI

```bash
# Start Metro bundler
npm start

# In another terminal, build and run on Android
npm run android
```

### Option 2: Using Android Studio

1. Open `/home/ubuntu/VidyaAIUltimateX/android/` in Android Studio
2. Wait for Gradle sync to complete
3. Click "Run" → "Run 'app'" or press Shift+F10

## Building for Production

### Generate Signed APK

```bash
cd android
./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/release/app-release.apk`

### Generate Signed AAB (for Play Store)

```bash
cd android
./gradlew bundleRelease
```

AAB location: `android/app/build/outputs/bundle/release/app-release.aab`

## Configuration

### App Metadata

Edit `app.json` to configure:
- App name
- Package name
- Version
- Permissions

### Android Build

Edit `android/build.gradle` to configure:
- Target SDK version
- Minimum SDK version
- Build tools version
- Signing configuration

## Features to Implement

1. **AI Backend Integration**
   - Connect to OpenAI, Gemini, or Groq APIs
   - Implement streaming responses
   - Add markdown rendering

2. **Chat Persistence**
   - Implement SQLite database
   - Store chat history
   - Enable search functionality

3. **Advanced Features**
   - Voice input (speech-to-text)
   - Voice output (text-to-speech)
   - Image upload support
   - PDF upload support

## Themes Available

1. AMOLED Black (default)
2. Dark
3. Light
4. Glass
5. Gradient
6. Neon
7. Minimal
8. Dynamic Material You

## Accent Colors

- Blue
- Green
- Purple
- Orange
- Red
- Pink
- Dynamic

## Dependencies

- React Native 0.86.0
- React Navigation 6.x
- Material Design 3 components
- AsyncStorage for persistence
- React Native Vector Icons

## Troubleshooting

### Build fails with Gradle error
- Clean build: `cd android && ./gradlew clean`
- Invalidate cache in Android Studio: File → Invalidate Caches

### App crashes on startup
- Check logcat: `adb logcat | grep -i vidya`
- Ensure all dependencies are installed: `npm install`

### Theme not persisting
- Check AsyncStorage permissions in AndroidManifest.xml
- Verify theme context is wrapping the app

## Publishing to Play Store

1. Create Google Play Developer account
2. Generate signed APK/AAB (see "Building for Production")
3. Create app listing in Google Play Console
4. Upload APK/AAB
5. Fill in store listing details
6. Submit for review

## Support

For issues or questions, refer to:
- React Native docs: https://reactnative.dev
- React Navigation: https://reactnavigation.org
- Material Design 3: https://m3.material.io

---

**Ready to build!** Run `npm run android` to get started.
