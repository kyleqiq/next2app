# Next2app (beta)

Next2app lets you turn your Next.js web apps into native apps easily.(IOS, Android)
No mobile development experience needed - just use your Next.js knowledge and we'll handle the rest.

## 🚧 Warning

The most of the features are under development, so let me know if you find any bugs!

## 📋 Prerequisites

- Node.js 14.0 or higher
- npm or yarn package manager
- Next.js project
- iOS App Store / Google Play Store developer accounts

## 🏃‍♂️ Quick Start

### 1. Start Development Server (beta)

```bash
npx next2app dev
```

Preview your app instantly using 'Expo Go' (You can download on the App Store and Play Store).

### 2. Build Your App (under development)

```bash
npx next2app build
```

Creates production-ready builds for both iOS and Android platforms.

### 3. Deploy (under development)

```bash
npx next2app deploy
```

Automates the app store submission process with guided form filling.

## ⚙️ Configuration (under development)

Create `next2app.config.js` in your project root:

```javascript
module.exports = {
  port: 3000,
  output: "build",
  publicPath: "/",
  app: {
    name: "My App",
    version: "1.0.0",
    identifier: "com.myapp.app",
    icon: "./assets/icon.png",
  },
  // Additional configuration options
};
```

## 📚 Documentation (under development)

For detailed documentation, visit:

- [Docs](https://next2app.com/docs)

## 🐛 Issue Reporting

Found a bug? Please report it on our [GitHub Issues](https://github.com/kyleqiq/next2app/issues) page.
