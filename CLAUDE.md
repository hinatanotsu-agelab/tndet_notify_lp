# CLAUDE.md - AI Assistant Guide for tndet_notify_lp

## Project Overview

This is a **Next.js landing page** for "AI企業速報くん" (AI Company News Flash) - a LINE-based notification service that delivers real-time TDnet (Japanese financial disclosure) information with AI-powered translation and summarization.

### Business Context
- **Service**: Real-time financial disclosure notifications via LINE
- **Target Users**: Japanese investors interested in company announcements
- **Pricing**: Free plan (3 companies) and Standard plan (¥980/month for 10 companies)
- **LINE Registration**: https://lin.ee/6qpUXZF

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.5 | React framework with App Router |
| React | 19.2.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| ESLint | 9.x | Code linting |
| lucide-react | 0.555.0 | Icon components |

## Project Structure

```
tndet_notify_lp/
├── app/                    # Next.js App Router directory
│   ├── page.tsx           # Main landing page component
│   ├── layout.tsx         # Root layout (Geist fonts, metadata)
│   ├── globals.css        # Global styles with Tailwind
│   └── favicon.ico        # Site favicon
├── public/                 # Static assets
│   ├── ChatGPT icon cropped.png  # Logo image
│   ├── *.svg              # Various SVG assets
├── eslint.config.mjs      # ESLint flat config
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Development Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Code Conventions

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig.json)
- Path alias: `@/*` maps to project root
- Target: ES2017

### Styling
- **Tailwind CSS 4** with inline theme configuration
- Custom color scheme:
  - Primary blue: `#0051a8`
  - Dark blue background: `#0a1a36`
  - LINE green: `#00c300`
- Responsive design with `sm:`, `md:` breakpoints
- Geist font family (sans and mono variants)

### Component Patterns
- Functional components with TypeScript
- Icons from `lucide-react` (Bell, MessageCircle, Smartphone)
- External links use `target="_blank"` with `rel="noopener noreferrer"`

### ESLint Configuration
- Uses ESLint 9 flat config format
- Extends Next.js core-web-vitals and TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page with hero, features, pricing, legal sections |
| `app/layout.tsx` | Root layout with font loading and metadata |
| `app/globals.css` | Tailwind import and CSS custom properties |

## Important Notes for AI Assistants

### Do's
- Maintain the existing Tailwind class-based styling approach
- Keep the Japanese language content consistent
- Preserve the mobile-first responsive design patterns
- Use lucide-react for any new icons needed

### Don'ts
- Do not modify the LINE registration URL without explicit approval
- Do not change business information in the legal section (特定商取引法)
- Do not remove or alter pricing information without approval

### Testing Considerations
- No test framework is currently configured
- Before adding tests, discuss testing strategy with the team
- Run `npm run build` to verify TypeScript compilation
- Run `npm run lint` to check for ESLint errors

## Git Workflow

- Main development happens on feature branches
- Commit messages should be descriptive
- Run `npm run lint` before committing

## Environment Setup

1. Ensure Node.js is installed (compatible with Next.js 16.x)
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Access at: http://localhost:3000
