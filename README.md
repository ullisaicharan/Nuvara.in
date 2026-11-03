# Nuvara starter

A premium dark landing page starter for Nuvara, built with Next.js, TypeScript and plain CSS.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build for production
```bash
npm run build
npm start
```

## Project structure
- `app/page.tsx` — Nuvara landing page
- `app/globals.css` — responsive dark theme
- `app/layout.tsx` — metadata and root layout
- `.env.example` — placeholder for future server-side secrets

## Important
This starter is a visual frontend, not a finished AI product. The tool cards are launch placeholders. No AI requests, accounts, uploads, payments or user data storage are implemented yet.

Before adding an AI provider:
1. Create a server-side API route or backend service.
2. Store the provider key in server-side environment variables only.
3. Add authentication, rate limits and per-user usage limits.
4. Never put secret keys in browser code or `NEXT_PUBLIC_` variables.
5. Test error handling and spending limits before inviting public users.

For a commercial launch, review hosting provider terms and current free-tier limits first.
