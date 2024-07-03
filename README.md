# Chrome extension template

Welcome to the Chrome Extension Template! It is designed to be an easy starting point for building an extension using:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCn](https://ui.shadcn.com/)
- [CRXJS](https://crxjs.dev/vite-plugin/)

In other words, this is what we use at [zerodays](https://github.com/zerodays).

**NOTE**: This template is largely based on our [Next.js template](https://github.com/zerodays/nextjs-template/) and adapted for Chrome extensions. Most of the non-Chrome extension specific documentation can be found there.

## 🚀 Quick Start

Getting started with this template is straightforward. Follow these steps to create your new project using this template:

1. **Create a new React app using this template**:

   Run the following command in your terminal to create a new project with this template:

   ```bash
   npx degit zerodays/chrome-extension-template your-project-name
   ```

2. **Navigate into your new project folder**:

   ```bash
   cd your-project-name
   ```

3. **Install dependencies**:

   ```bash
   pnpm i
   ```

4. **Run the development server**:

   ```bash
   pnpm dev
   ```

## 🧐 What's Included?

- Everything from the [Next.js template](https://github.com/zerodays/nextjs-template/) **except**:
  - Next.js (we use pure React with Vite here).
  - Sentry (because of potential problems with sending data from the extension).
- [Vite](https://vitejs.dev/) for fast development and optimized production builds.
- [CRXJS](https://crxjs.dev/vite-plugin/) Vite plugin for building Chrome extensions.

## 📂 CRXJS and Chrome extension-specific configuration

CRXJS allows for configuring the Chrome extension **and React build process** from the same `manifest.json` file. This template includes three entry points configured:

1. **Popup** (what one sees when clicking the extension icon) - `src/app.tsx`.
2. **Injected content script** (currently configured to show a button over the middle of every page) - `src/inject.tsx`.
3. **Background script** (runs in the background) - `src/background.ts`.

## ➖ Differences from the Next.js template

In order to not break the css of the original pages when injecting content scripts, Tailwind is configured with a prefix `ex`. This means that for example `h-4` needs to be written `ex-h-4`. ShadCn is also configured to use the same prefix.

## 🏗️ TODO:

- Github actions for building and publishing the extension.
