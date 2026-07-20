#!/bin/bash

# Script to encode keystore for GitHub Actions

KEYSTORE_FILE="android/app/vidya-release-key.keystore"

if [ ! -f "$KEYSTORE_FILE" ]; then
    echo "❌ Error: Keystore file not found at $KEYSTORE_FILE"
    exit 1
fi

echo "📦 Encoding keystore to Base64..."
echo ""
echo "Copy this entire output and paste it as the KEYSTORE_BASE64 secret in GitHub:"
echo "=================================================="
base64 -w 0 "$KEYSTORE_FILE"
echo ""
echo "=================================================="
echo ""
echo "✅ Done! Paste the above in GitHub Secrets as KEYSTORE_BASE64"
