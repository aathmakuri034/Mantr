---
name: Sanskrit Learning App Landing Page
overview: Create a modern landing page similar to Qul AI (qulai.app) but for Sanskrit learning, including a waitlist form that stores submissions in MongoDB via Next.js API routes.
todos:
  - id: setup
    content: Initialize Next.js project with TypeScript, Tailwind CSS, and install dependencies (mongodb, react-hook-form, zod)
    status: completed
  - id: database
    content: Set up MongoDB connection utility and create waitlist schema/model with email uniqueness constraints
    status: completed
  - id: hero
    content: Create Hero component with Sanskrit-themed headline, subheading, and scroll-to-form CTA button
    status: completed
  - id: features
    content: Build Features component with 3 feature cards matching Qul AI structure but Sanskrit-themed
    status: completed
  - id: waitlist-form
    content: Implement WaitlistForm component with email/name inputs, validation, and submission handling
    status: completed
  - id: api-route
    content: Create API route (/api/waitlist) to handle POST requests, validate data, and store in MongoDB
    status: completed
  - id: cta-section
    content: Build final CTA section component that embeds the waitlist form
    status: completed
  - id: landing-page
    content: Compose main landing page (app/page.tsx) with all sections and proper layout
    status: completed
  - id: styling
    content: Apply Tailwind styling with Sanskrit-themed colors, gradients, animations, and responsive design
    status: completed
  - id: env-setup
    content: Create .env.local template and document MongoDB connection string setup
    status: completed
isProject: false
---

# Sanskrit Learning App Landing Page - Implementation Plan

## Overview

Recreate the Qul AI landing page structure for a Sanskrit learning app called "Mantr". The page will feature a modern design with hero section, feature highlights, and a waitlist signup form that stores submissions in MongoDB.

## Project Structure

```
mantr/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts    # API route for waitlist submissions
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── Features.tsx        # Features section component
│   ├── WaitlistForm.tsx    # Waitlist signup form
│   └── CTA.tsx             # Final CTA section
├── lib/
│   ├── mongodb.ts          # MongoDB connection utility
│   └── models.ts           # Database models/schemas
├── types/
│   └── waitlist.ts         # TypeScript types
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── .env.local              # Environment variables
```

## Implementation Steps

### 1. Project Setup

- Initialize Next.js 14+ project with TypeScript and App Router
- Install dependencies: `tailwindcss`, `mongodb`, `react-hook-form`, `zod` (for validation)
- Configure Tailwind CSS with custom theme
- Set up environment variables for MongoDB connection

### 2. Database Setup

- Create MongoDB connection utility (`lib/mongodb.ts`)
- Define waitlist schema/model (`lib/models.ts`) with fields:
  - email (required, unique)
  - name (optional)
  - createdAt (timestamp)
- Create database indexes for email uniqueness

### 3. Landing Page Structure (app/page.tsx)

Based on Qul AI structure, create sections:

**Hero Section:**

- Headline: "The Future of Sanskrit Learning is Here"
- Subheading: "Always wanted to fluently converse in Sanskrit? Your personal AI tutor will help you every step of the way."
- Primary CTA button: "Get Early Access" (scrolls to waitlist form)

**Features Section (3 cards):**

1. "Real Conversations, Real Situations"

- Description: "From ordering at temples to navigating daily life, practice Sanskrit in realistic scenarios with your AI companion."

1. "A Curriculum Tailored by Educators"

- Description: "A structured learning path from basics like family and greetings to advanced topics like philosophy and literature."

1. "Personalized Sanskrit Learning Journey"

- Description: "Create personalized Sanskrit lessons on any topic you wish, shaping your learning to your own interests and ambitions."

**Final CTA Section:**

- Headline: "Your Journey Begins Here"
- Description: "Be among the first to experience a new reality in Sanskrit language learning. Join the exclusive waitlist and we'll notify you the moment the doors open."
- Waitlist form embedded here

### 4. Components

**Hero.tsx:**

- Large headline with gradient text effect
- Subheading text
- Smooth scroll button to waitlist form
- Modern, spacious layout

**Features.tsx:**

- Grid layout (3 columns on desktop, stacked on mobile)
- Feature cards with icons/illustrations
- Hover effects and animations

**WaitlistForm.tsx:**

- Form with email input (required) and name input (optional)
- Client-side validation using react-hook-form + zod
- Loading states during submission
- Success/error message display
- Prevents duplicate email submissions

**CTA.tsx:**

- Final call-to-action section
- Contains the WaitlistForm component
- Emphasis on exclusivity and early access

### 5. API Route (app/api/waitlist/route.ts)

- POST handler to receive form submissions
- Validate email format and check for duplicates
- Store in MongoDB collection
- Return appropriate success/error responses
- Handle edge cases (duplicate emails, invalid data)

### 6. Styling & Design

- Modern gradient backgrounds
- Smooth scroll behavior
- Responsive design (mobile-first)
- Dark mode support (optional)
- Animations and transitions
- Typography optimized for readability
- Color scheme: Sanskrit-inspired (saffron, deep blue, gold accents)

### 7. Additional Features

- Form validation feedback
- Success animation/confirmation
- Analytics tracking (optional)
- SEO optimization (meta tags, Open Graph)

## Technical Stack

- **Frontend:** Next.js 14+ (App Router), React, TypeScript
- **Styling:** Tailwind CSS
- **Forms:** react-hook-form + zod
- **Database:** MongoDB
- **Deployment:** Vercel (recommended) or similar

## Key Files to Create/Modify

1. `app/page.tsx` - Main landing page composition
2. `components/Hero.tsx` - Hero section
3. `components/Features.tsx` - Features grid
4. `components/WaitlistForm.tsx` - Form component
5. `components/CTA.tsx` - Final CTA section
6. `app/api/waitlist/route.ts` - API endpoint
7. `lib/mongodb.ts` - Database connection
8. `lib/models.ts` - Data models
9. `types/waitlist.ts` - TypeScript interfaces
10. `tailwind.config.ts` - Tailwind configuration
11. `.env.local` - Environment variables template

## Design Considerations

- Match Qul AI's clean, modern aesthetic
- Sanskrit-themed color palette and imagery
- Smooth animations and transitions
- Mobile-responsive layout
- Fast loading times
- Accessible form inputs and buttons
