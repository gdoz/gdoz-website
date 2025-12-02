# GDOZ Technology Solutions - Corporate Website

> Enterprise-grade corporate website for GDOZ Technology Solutions, a specialized consultancy delivering strategic solutions in software engineering, cloud architecture, cybersecurity, and artificial intelligence.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

## Table of Contents

- [Overview](#overview)
- [Application Architecture](#application-architecture)
- [User Journey](#user-journey)
- [Security Model](#security-model)
- [Design System](#design-system)
- [Key Features](#key-features)
- [External Integrations](#external-integrations)
- [Local Development](#local-development)
- [CI/CD and Production Deployment](#cicd-and-production-deployment)
- [Technology Stack](#technology-stack)
- [Server Requirements](#server-requirements)
- [Testing](#testing)
- [Metrics and Monitoring](#metrics-and-monitoring)
- [Final Notes](#final-notes)
- [License](#license)

---

## Overview

This repository contains the source code for the [GDOZ Technology Solutions](https://gdoz.net) corporate website. The site serves as the company's digital presence, showcasing services, company information, and providing contact channels for potential clients and partners.

### Goals

- Present GDOZ's core services and expertise
- Establish credibility through professional, modern design
- Provide easy access to external platforms (GedozTech Lab, Tilila Games)
- Ensure LGPD/GDPR compliance with privacy-first tracking
- Deliver optimal performance via static site generation

---

## Application Architecture

The application follows a **component-based architecture** built on Next.js 16 with App Router, designed for static export deployment.

```
┌──────────────────────────────────────────────────────────────────┐
│                        Next.js App Router                        │
├──────────────────────────────────────────────────────────────────┤
│  app/                                                            │
│  ├── layout.tsx          # Root layout (fonts, analytics, meta)  │
│  ├── page.tsx            # Home page composition                 │
│  ├── globals.css         # Design tokens & Tailwind config       │
│  └── privacy/page.tsx    # Privacy Policy page                   │
├──────────────────────────────────────────────────────────────────┤
│  components/                                                     │
│  ├── header.tsx          # Fixed navigation header               │
│  ├── hero.tsx            # Hero section with logo & CTAs         │
│  ├── about.tsx           # Company information & stats           │
│  ├── services.tsx        # Service cards grid                    │
│  ├── footer.tsx          # Footer with links & contact           │
│  ├── cookie-consent.tsx  # GA4 cookie consent banner             │
│  ├── visit-tracker.tsx   # Privacy-friendly visit tracking       │
│  └── ui/                 # shadcn/ui component library           │
├──────────────────────────────────────────────────────────────────┤
│  public/                                                         │
│  ├── images/             # Logo assets (gdoz.png, logo-gdoz.png) │
│  └── icon-*.png          # Favicons (light/dark mode)            │
└──────────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| **Static Export** (`output: 'export'`) | No server required; deploy to any static hosting |
| **App Router** | Modern Next.js patterns, improved metadata handling |
| **Component Composition** | Each section is an independent, testable component |
| **CSS Variables + Tailwind** | Consistent theming with design tokens |
| **Client-side Analytics** | Works with static export; privacy-compliant |

---

## User Journey

```
┌──────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                             │
└──────────────────────────────────────────────────────────────────┘

[1. LANDING]
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  HERO SECTION                                                   │
│  • View GDOZ logo and tagline                                   │
│  • CTA: "GedozTech Lab" → External link                         │
│  • CTA: "Tilila Games"  → External link                         │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼ (scroll)
┌─────────────────────────────────────────────────────────────────┐
│  ABOUT SECTION                                                  │
│  • Company history and mission                                  │
│  • Key statistics                                               │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼ (scroll)
┌─────────────────────────────────────────────────────────────────┐
│  SERVICES SECTION                                               │
│  • Software Engineering                                         │
│  • Cloud Architecture                                           │
│  • Cybersecurity                                                │
│  • Artificial Intelligence                                      │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼ (scroll)
┌─────────────────────────────────────────────────────────────────┐
│  FOOTER                                                         │
│  • LinkedIn link                                                │
│  • Email contact                                                │
│  • Location (Brazil)                                            │
│  • Privacy Policy link                                          │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼ (optional)
┌─────────────────────────────────────────────────────────────────┐
│  COOKIE CONSENT (overlay)                                       │
│  • Accept → Enables GA4 tracking                                │
│  • Dismiss → No tracking                                        │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼ (optional navigation)
┌─────────────────────────────────────────────────────────────────┐
│  PRIVACY POLICY PAGE                                            │
│  • Full privacy policy text                                     │
│  • Back to Home link                                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Security Model

### Privacy-First Approach

| Feature | Implementation | Compliance |
|---------|----------------|------------|
| **Cookie Consent** | User must accept before GA4 loads | LGPD / GDPR |
| **Visit Tracker** | No PII collected | LGPD / GDPR |
| **No Server-Side Storage** | Static site; no user data stored | N/A |

### Visit Tracker Data Points (Privacy-Compliant)

```typescript
interface VisitPayload {
  pagePath: string       // Current page path
  referrer: string       // Previous page (if any)
}
```

### Security Considerations

> **Note:** The visit tracker uses client-side API token (`NEXT_PUBLIC_*`). Since the site is statically exported, server-side token protection is not possible.

**API-side mitigations:**

1. **CORS restriction** - Accept requests only from a specified domain
2. **Rate limiting** - Prevent abuse (e.g., 100 requests/minute per IP)
3. **Origin/Referer validation** - Verify request source
4. **Limited token scope** - Allow the token to access only `POST /visit`

---

## Design System

### Color Palette

The design uses a **dark corporate theme** with teal/blue accents derived from the GDOZ logo.

| Token | Value (OKLCH) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.13 0.005 250)` | Page background |
| `--foreground` | `oklch(0.98 0 0)` | Primary text |
| `--primary` | `oklch(0.55 0.12 220)` | Brand accent (teal-blue) |
| `--muted` | `oklch(0.18 0.005 250)` | Secondary backgrounds |
| `--muted-foreground` | `oklch(0.65 0.01 250)` | Secondary text |
| `--border` | `oklch(0.25 0.01 250)` | Borders and dividers |

### Typography

| Font | Usage | Variable |
|------|-------|----------|
| **Inter** | Body text, UI elements | `--font-sans` |
| **JetBrains Mono** | Code, technical content | `--font-mono` |

### Spacing & Layout

- **Container max-width:** Responsive, centered with `px-6` padding
- **Section padding:** `py-24` (mobile) / `py-32` (desktop)
- **Grid system:** CSS Grid for service cards, Flexbox for layouts
- **Border radius:** `0.5rem` (via `--radius` token)

### Component Library

Built on **shadcn/ui** with Radix UI primitives. All components are located in `components/ui/` and can be customized via CSS variables.

---

## Key Features

### 1. Hero Section
- Animated logo display with glow effect
- Primary/secondary CTAs to external products
- Scroll indicator animation

### 2. About Section
- Company mission and history
- Statistics grid (Years, Specializations, Commitment, Support)

### 3. Services Grid
- Four service cards with icons
- Hover animations and transitions
- Software Engineering, Cloud, Cybersecurity, AI

### 4. Cookie Consent
- LGPD/GDPR compliant banner
- Opt-in only GA4 tracking
- Configurable via constants in `cookie-consent.tsx`

### 5. Visit Tracker
- Privacy-friendly analytics
- Configurable blocked hostnames (dev environments)
- External API integration

### 6. Privacy Policy
- Dedicated page at `/privacy`
- Covers data collection, cookies, user rights

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: `md` (768px), `lg` (1024px)
- Touch-friendly navigation

---

## External Integrations

### 1. Google Analytics 4 (Optional)

**Configuration:** `components/cookie-consent.tsx`

```typescript
const GA4_ENABLED = true  // Toggle analytics on/off
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"  // GA4 ID
```

### 2. Visit Tracker API

**Configuration:** Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_VISIT_API_URL` | Base URL for the visit tracking API |
| `NEXT_PUBLIC_VISIT_API_TOKEN` | Token for API authentication |

**Blocked Hostnames:** Configure in `components/visit-tracker.tsx`

```typescript
const BLOCKED_HOSTNAMES = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  // Other domains
]
```

---

## Local Development

### Prerequisites

| Tool | Minimum Version |
|------|-----------------|
| Node.js | 18.17.0+ |
| pnpm | 8.0.0+ |

### Setup

```bash
# Clone the repository
git clone git@github.com:gdoz/gdoz-website.git && cd gdoz-website
```

```bash
# Install dependencies
pnpm install
```

```bash
# Create environment file (optional, for visit tracking)
cp .env.example .env.local
# Edit .env.local with your values
```

```bash
# Start development server
pnpm dev
```

### Environment Variables

Create `.env.local` for local development:

```env
# Visit Tracker (optional)
NEXT_PUBLIC_VISIT_API_URL=https://api.gdoz.com.br
NEXT_PUBLIC_VISIT_API_TOKEN=your_api_token_here
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (localhost:3000) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## CI/CD and Production Deployment

The project uses **static export** mode, generating pure HTML/CSS/JS files that can be served from any static web server.

### Build Configuration

**`next.config.mjs`:**

```javascript
const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  ...(isExport && {
    distDir: 'webapp',
    output: 'export',
  }),
  // ... other config
}
```

### GitHub Actions Pipeline

The deployment pipeline:

1. **Checkout** repository
2. **Setup** Node.js and pnpm
3. **Create** `.env` from GitHub Secrets
4. **Build** static export (`pnpm build`)
5. **Deploy** via FTPS to production server (FTP-Deploy-Action)

### Manual Build

```bash
# Build static export
pnpm build

# Output directory: ./webapp/
# Transfer contents to your web server
```

---

## Technology Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.3 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first CSS |

### UI Components

| Library | Version | Purpose |
|---------|---------|---------|
| **shadcn/ui** | Latest | Component library |
| **Radix UI** | Various | Accessible primitives |
| **Lucide React** | 0.454.0 | Icon library |

### Utilities

| Library | Purpose |
|---------|---------|
| `clsx` | Conditional class names |
| `tailwind-merge` | Merge Tailwind classes |
| `class-variance-authority` | Component variants |

### Development

| Tool | Purpose |
|------|---------|
| **pnpm** | Package manager |
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |

---

## Server Requirements

### Static Hosting (Recommended)

Since the site is statically exported, it can run on any static file server:

- **Nginx** / **Apache** - Traditional web servers
- **Vercel** / **Netlify** - JAMstack platforms
- **AWS S3 + CloudFront** - Cloud hosting
- **GitHub Pages** - Free static hosting

### Minimum Server Configuration

| Requirement | Specification |
|-------------|---------------|
| Storage | ~50MB for built assets |
| HTTPS | Required (SSL/TLS certificate) |
| Gzip/Brotli | Recommended for compression |
| Cache Headers | Configure for static assets |

### Recommended Nginx Configuration

```nginx
server {
    listen 443 ssl http2;
    server_name gdoz.com.br www.gdoz.com.br;

    root /var/www/gdoz/webapp;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
}
```

---

## Testing

> **Current Status:** No automated tests implemented.

### Testing Strategy (Future)

| Type | Tools | Coverage |
|------|-------|----------|
| **Unit Tests** | Vitest, React Testing Library | Components, utilities |
| **E2E Tests** | Playwright | User flows, navigation |
| **Visual Regression** | Chromatic, Percy | UI consistency |
| **Accessibility** | axe-core, Lighthouse | WCAG compliance |

### Manual Testing Checklist

- [ ] Hero section loads with logo and CTAs
- [ ] Navigation links work (About, Services, Contact)
- [ ] External links open in new tabs
- [ ] Cookie consent appears on first visit
- [ ] Privacy policy page renders correctly
- [ ] Responsive layout on mobile/tablet/desktop
- [ ] Visit tracker sends data (check network tab)

---

## Metrics and Monitoring

> **Current Status:** Only Google Analytics 4 for user behavior analysis is implemented (opt-in).   
No other integrated monitoring tools is implemented.

### Possible Tools (Future)

| Category | Tool | Purpose |
|----------|------|---------|
| **Performance** | Vercel Analytics | Web Vitals |
| **Uptime** | UptimeRobot, Pingdom | Availability monitoring |
| **Error Tracking** | Sentry | Client-side errors |

### Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse |
| FID (First Input Delay) | < 100ms | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| Performance Score | > 90 | Lighthouse |

---

## Final Notes

### Known Limitations

1. **Static Export Constraints**
   - No server-side API routes
   - Environment variables must be `NEXT_PUBLIC_*` for client access
   - API tokens are exposed in client bundle

2. **Visit Tracker Security**
   - Token visible in browser DevTools
   - Requires API-side protection (CORS, rate limiting)

3. **No Dynamic Content**
   - All content is build-time static
   - Content changes require rebuild and redeploy

### Future Improvements

- [ ] Implement automated testing suite
- [ ] Add performance monitoring (Web Vitals)
- [ ] Server-side rendering option for dynamic features
- [ ] Internationalization (i18n) support
- [ ] Blog/news section
- [ ] Contact form with backend integration


## License

Copyright © 2025 GDOZ Technology Solutions. All rights reserved. Licensed under the [MIT License](./LICENSE).
