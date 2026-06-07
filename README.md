# LindaKeith Security Limited — Website

Premium corporate website for LindaKeith Security Limited, built by PruidWorks Studio.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| UI Primitives | Radix UI / ShadCN |
| Icons | Lucide React |
| Theming | next-themes |
| Hosting | Vercel |
| CMS (Phase 2) | Sanity.io |
| Database (Phase 3) | PostgreSQL (Supabase) |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles + CSS variables
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav, glassmorphism, mobile drawer
│   │   └── Footer.tsx    # 4-column footer, newsletter
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustBarSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── CoverageSection.tsx
│       ├── ProcessSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogSection.tsx
│       ├── CareersSection.tsx
│       └── CTASection.tsx
├── types/
│   └── index.ts          # TypeScript types + static data (Sanity-ready)
└── lib/
    └── utils.ts          # Utility functions
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Brand Colours

| Token | Hex | Usage |
|---|---|---|
| `brand-blue` | `#1D5FBF` | Primary brand, CTAs, icons |
| `brand-navy` | `#0F172A` | Dark backgrounds, hero |
| `brand-accent` | `#60A5FA` | Highlights, map markers |
| `brand-light` | `#F8FAFC` | Light mode background |
| `brand-dark` | `#020617` | Deep dark backgrounds |
| `brand-success` | `#22C55E` | Success states |

## Typography

- **Display / Headings**: Playfair Display (400, 600, 700)
- **Body / UI**: DM Sans (300, 400, 500, 600)

## Sanity CMS Integration (Phase 2)

The codebase is structured for drop-in Sanity integration:

1. Install `@sanity/client` and `next-sanity`
2. Create a Sanity project at [sanity.io](https://sanity.io)
3. Define schemas matching the interfaces in `src/types/index.ts`
4. Replace static arrays (SERVICES, TESTIMONIALS, BLOG_POSTS) with GROQ queries
5. Enable live preview with Sanity Presentation tool

Content models ready: **Hero, Services, Testimonials, Blog Posts, Careers, Company Info, Contact Details**

## Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` — your domain
- `SANITY_PROJECT_ID` — (Phase 2)
- `SANITY_DATASET` — (Phase 2)
- `SANITY_API_TOKEN` — (Phase 2)

## SEO

- Next.js Metadata API with full Open Graph and Twitter cards
- Structured data (JSON-LD) for LocalBusiness schema
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Target keywords: Security Company Kenya, Security Services Nairobi, Security Guards Ruiru, Corporate Security Solutions Kenya

## Accessibility

- WCAG AA compliant
- Semantic HTML throughout
- Keyboard navigable
- Focus states on all interactive elements
- Screen reader labels (`aria-label`, `aria-labelledby`, `role`)
- Skip navigation link

## Roadmap

| Phase | Scope |
|---|---|
| **Phase 1** ✅ | Website Design & Development |
| **Phase 2** | Sanity CMS + Operations Dashboard |
| **Phase 3** | Mobile Workforce Application |

---

Designed and developed by **PruidWorks Studio** — George Mwale  
Client: LindaKeith Security Limited  
Date: June 2026
