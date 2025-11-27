# Turborepo Monorepo Starter

This repository contains a Turborepo-based monorepo with a Next.js web app, an Expo-managed React Native app, and a shared package for reusable hooks and business logic.

## Structure

- `apps/web` – Next.js 14 application using the App Router.
- `apps/mobile` – Expo (React Native) application configured for monorepo usage.
- `packages/shared` – Shared hooks and logic consumed by both apps.

## Getting Started

Install dependencies at the workspace root:

```bash
npm install
```

### Web

```bash
npm run dev:web
```

### Mobile (Expo)

```bash
npm run dev:mobile
```

The React Native app is configured to resolve workspace packages through Metro so the shared hooks can be imported without additional steps.
