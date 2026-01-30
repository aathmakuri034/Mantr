# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mantr is a Next.js landing page for an AI-powered Sanskrit learning app. It features a waitlist signup system backed by MongoDB. The app uses Next.js 16 with the App Router, TypeScript, Tailwind CSS 4, and React 19.

## Development Commands

```bash
# Install dependencies
cd mantr && npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Setup

Before running the app, create `.env.local` in the `mantr/` directory:

```bash
cp mantr/.env.example mantr/.env.local
```

Required environment variables:
- `MONGODB_URI` - MongoDB connection string (required)
- `MONGODB_DB` - Database name (optional, defaults to `mantr`)

## Architecture

### Directory Structure

The application code is located in the `mantr/` subdirectory:

```
mantr/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Landing page composition
│   ├── globals.css          # Global styles
│   └── api/waitlist/
│       └── route.ts         # POST endpoint for waitlist
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Feature cards section
│   ├── WaitlistForm.tsx    # Form with react-hook-form + zod
│   └── CTA.tsx             # Final CTA section
├── css/                     # Component-specific CSS modules
├── lib/                     # Server-side utilities
│   ├── mongodb.ts          # MongoDB connection (with dev caching)
│   └── models.ts           # Database models and operations
└── types/
    └── waitlist.ts         # TypeScript type definitions
```

### Database Layer

MongoDB integration pattern:
- Connection utility in `lib/mongodb.ts` uses singleton pattern with global caching in development
- `lib/models.ts` provides typed database operations
- `ensureWaitlistIndexes()` creates indexes on first use (unique email, createdAt)
- Email validation and deduplication handled at both client and server

### API Routes

`POST /api/waitlist`:
- Accepts `{ email: string, name?: string }`
- Returns 201 on success, 409 for duplicate emails, 400 for validation errors
- Uses Zod schema validation
- Catches MongoDB duplicate key errors (code 11000)

### Styling

- Tailwind CSS 4 via PostCSS
- Component-specific CSS files in `css/` directory
- Path alias `@/*` maps to `mantr/*` (configured in tsconfig.json)

### Form Handling

WaitlistForm component uses:
- `react-hook-form` for form state
- `@hookform/resolvers/zod` for validation
- Zod schemas matching server-side validation

## Key Technical Details

- **Node version**: Requires Node.js >= 18.18.0 (see `package.json` engines field)
- **TypeScript config**: Uses `@/*` path alias for imports from project root
- **ESLint**: Uses Next.js config with TypeScript and Core Web Vitals rules
- **MongoDB indexes**: Unique index on `email` field, descending index on `createdAt`
- **Error handling**: Duplicate emails return 409 with user-friendly message
