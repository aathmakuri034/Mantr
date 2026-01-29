## Mantr

Landing page for **Mantr**, an AI-powered Sanskrit learning app, with a MongoDB-backed early access waitlist.

## Getting Started

### 1) Configure environment variables

Copy `.env.example` to `.env.local` and set your MongoDB connection string:

```bash
cp .env.example .env.local
```

Required:

- `MONGODB_URI`: MongoDB connection string
  Optional:
- `MONGODB_DB`: database name (defaults to `mantr`)

### 2) Run the dev server

First, install dependencies (if you haven’t already):

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The landing page is in `app/page.tsx` and the waitlist endpoint is `app/api/waitlist/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Notes

- Waitlist submissions are stored in MongoDB with a unique index on `email` (duplicate emails return HTTP 409).
