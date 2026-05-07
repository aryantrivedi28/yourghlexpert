# YourGHLExpert.com — Complete Implementation Guide
## From Domain Setup to Live Deployment

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Brand System & Design Tokens](#brand-system--design-tokens)
3. [Phase 1: Project Environment Setup](#phase-1-project-environment-setup)
4. [Phase 2: Core Architecture & Configuration](#phase-2-core-architecture--configuration)
5. [Phase 3: Component Library](#phase-3-component-library)
6. [Phase 4: Page Development](#phase-4-page-development)
7. [Phase 5: SEO & Metadata](#phase-5-seo--metadata)
8. [Phase 6: Domain Configuration](#phase-6-domain-configuration)
9. [Phase 7: Deployment](#phase-7-deployment)
10. [Post-Launch Optimization](#post-launch-optimization)

---

## Project Overview

**Project Name:** Your GHL Expert  
**Domain:** yourghlexperts.com  
**Technology Stack:** 
- Next.js 16 (App Router)
- React 19.2+
- Tailwind CSS 4
- Lucide React (Icons)
- TypeScript
- Vercel AI SDK 6 (for future AI features)

**Key Features:**
- Fully responsive (mobile-first design)
- SEO-optimized with schema markup
- Fast performance (lighthouse 95+)
- Accessibility-compliant (WCAG 2.1 AA)
- Icon system using Lucide React
- Brand-consistent design tokens

---

## Brand System & Design Tokens

### Color Palette

**Primary Colors:**
```
Space Blue (Primary):     #1C2E4A
Nurture Blue (Secondary): #0E9BF0
Capture Yellow (CTA):     #F8D000
Close Green (Success):    #25C97D
```

**Neutral Colors:**
```
White:                    #FFFFFF
Off-White:                #F4F7FA
Light Gray:               #E8EDF4
Mid-Gray:                 #8A9BB0
Dark Gray:                #4A5568
Near Black:               #1A202C
```

### Typography

**Font Family:** Plus Jakarta Sans (via Google Fonts)
- H1: 60px, weight 800, line-height 1.15
- H2: 40px, weight 800, line-height 1.15
- H3: 21px, weight 700, line-height 1.15
- Body: 15px, weight 400, line-height 1.75
- Small: 13px, weight 500, line-height 1.6

### Spacing Scale
Use Tailwind's built-in scale: `4px (1), 8px (2), 12px (3), 16px (4), 24px (6), 32px (8), 48px (12), 64px (16), 88px (22)`

### Border Radius
```
Small:   8px
Medium:  12px
Large:   18px
XL:      24px
Pill:    100px
```

### Shadow System
```
Small:   0 1px 8px rgba(28,46,74,0.07)
Medium:  0 4px 24px rgba(28,46,74,0.10)
Large:   0 12px 48px rgba(28,46,74,0.14)
```

---

## Phase 1: Project Environment Setup

### 1.1 Initialize Next.js Project

```bash
# Create new Next.js project with App Router
npx create-next-app@latest yourghlexpert \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --use-pnpm

cd yourghlexpert
```

### 1.2 Install Core Dependencies

```bash
# Design & Icons
pnpm add lucide-react

# SEO & Schema
pnpm add next-seo json-ld-script

# Forms (optional, for contact form)
pnpm add react-hook-form zod @hookform/resolvers

# HTTP Client
pnpm add axios swr

# Utilities
pnpm add clsx tailwind-merge classnames

# Dev Dependencies
pnpm add -D @types/node @types/react prettier tailwindcss-animate
```

### 1.3 Project Directory Structure

```
yourghlexpert/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx                # Homepage
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── case-studies/
│   │       └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # Contact form endpoint
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Trust.tsx
│   │   ├── Services.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── Results.tsx
│   │   ├── Industries.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Accordion.tsx
│   └── common/
│       ├── Container.tsx
│       ├── Section.tsx
│       └── SectionHead.tsx
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   ├── seo.ts
│   └── schema.ts
├── hooks/
│   ├── use-mobile.ts
│   └── use-form-submit.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── styles/
│   └── variables.css
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Phase 2: Core Architecture & Configuration

### 2.1 Tailwind Configuration

**File: `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'space-blue': '#1C2E4A',
        'space-blue-deep': '#0B1421',
        'space-blue-mid': '#253D5C',
        'space-blue-light': '#162540',
        'nurture-blue': '#0E9BF0',
        'nurture-blue-bg': '#E8F5FE',
        'capture-yellow': '#F8D000',
        'capture-yellow-light': '#FFE44D',
        'close-green': '#25C97D',
        'close-green-light': '#4DE3A0',
        
        // Neutrals
        'off-white': '#F4F7FA',
        'border-light': '#E8EDF4',
        'muted': '#8A9BB0',
        'body': '#4A5568',
        'dark': '#1A202C',
        
        // Design Tokens
        'background': '#FFFFFF',
        'foreground': '#1A202C',
        'primary': '#1C2E4A',
        'secondary': '#0E9BF0',
        'accent': '#F8D000',
        'success': '#25C97D',
        'muted-foreground': '#8A9BB0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '18px',
        'xl': '24px',
        'pill': '100px',
      },
      boxShadow: {
        'sm': '0 1px 8px rgba(28, 46, 74, 0.07)',
        'md': '0 4px 24px rgba(28, 46, 74, 0.10)',
        'lg': '0 12px 48px rgba(28, 46, 74, 0.14)',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

export default config
```

### 2.2 Global Styles

**File: `app/globals.css`**

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-body font-sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  @apply font-bold text-space-blue tracking-tight;
}

h1 {
  @apply text-4xl md:text-5xl lg:text-6xl;
  font-size: clamp(2rem, 5.5vw, 3.75rem);
}

h2 {
  @apply text-3xl md:text-4xl lg:text-5xl;
  font-size: clamp(1.625rem, 3.5vw, 2.5rem);
}

h3 {
  @apply text-xl md:text-2xl font-bold;
  font-size: clamp(1rem, 2vw, 1.5rem);
}

p {
  @apply leading-relaxed;
}

/* Links */
a {
  @apply transition-colors duration-200;
}

a:hover {
  @apply text-nurture-blue;
}

/* Images */
img {
  @apply max-w-full h-auto;
}

/* Selection */
::selection {
  @apply bg-capture-yellow text-space-blue;
}

/* Scrollbar */
::-webkit-scrollbar {
  @apply w-3;
}

::-webkit-scrollbar-track {
  @apply bg-off-white;
}

::-webkit-scrollbar-thumb {
  @apply bg-border-light rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-muted;
}

/* Utility Classes */
.container-wide {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.container-narrow {
  @apply max-w-4xl mx-auto px-4 sm:px-6;
}

.section-padding {
  @apply py-20 md:py-24 lg:py-28;
}

.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

/* Animation Utilities */
.animate-fade-in {
  @apply animate-fade-in;
}

.transition-smooth {
  @apply transition-all duration-300 ease-out;
}

/* Responsive Utilities */
@media (max-width: 768px) {
  .desktop-only {
    @apply hidden;
  }
}

@media (min-width: 769px) {
  .mobile-only {
    @apply hidden;
  }
}
```

### 2.3 Next.js Configuration

**File: `next.config.mjs`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      // Cache static assets
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/ghl-expert',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Rewrites (if needed for API)
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },

  // Compression
  compress: true,

  // Production source maps (optional)
  productionBrowserSourceMaps: false,

  // Trailing slashes
  trailingSlash: false,

  // React strict mode
  reactStrictMode: true,

  // SWR for data fetching
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
```

### 2.4 TypeScript Configuration

**File: `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "outDir": "./.next",
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/app/*": ["./app/*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/hooks/*": ["./hooks/*"],
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

## Phase 3: Component Library

### 3.1 Layout Components

**File: `components/layout/Navigation.tsx`**

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <nav className="sticky top-0 z-100 bg-space-blue border-b-4 border-capture-yellow">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="w-10 h-10 bg-capture-yellow rounded-md flex items-center justify-center text-space-blue font-bold">
              GHL
            </div>
            <span className="hidden sm:inline">Your GHL Expert</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/75 hover:text-capture-yellow transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-capture-yellow text-space-blue font-bold text-sm hover:bg-capture-yellow-light transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold text-white/75 hover:text-capture-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-6 py-3 rounded-md bg-capture-yellow text-space-blue font-bold text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
```

**File: `components/layout/Footer.tsx`**

```typescript
import Link from 'next/link'
import { Mail, Phone, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-space-blue text-white py-16 md:py-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-capture-yellow rounded-md flex items-center justify-center text-space-blue font-bold text-sm">
                GHL
              </div>
              <span className="font-bold">Your GHL Expert</span>
            </div>
            <p className="text-sm text-white/60">
              Expert GoHighLevel setup, automation, and white-label SaaS solutions for agencies worldwide.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold mb-4 text-capture-yellow">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#crm" className="text-white/60 hover:text-white transition">CRM Setup</Link></li>
              <li><Link href="/services#automation" className="text-white/60 hover:text-white transition">Automation</Link></li>
              <li><Link href="/services#white-label" className="text-white/60 hover:text-white transition">White Label</Link></li>
              <li><Link href="/services#migration" className="text-white/60 hover:text-white transition">Migration</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4 text-capture-yellow">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/60 hover:text-white transition">About</Link></li>
              <li><Link href="/case-studies" className="text-white/60 hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-capture-yellow">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60">
                <Mail size={16} />
                <a href="mailto:hello@yourghlexperts.com" className="hover:text-white transition">
                  hello@yourghlexperts.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="text-white/60 hover:text-white transition">
                  <Linkedin size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; 2024 Your GHL Expert. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### 3.2 Reusable UI Components

**File: `components/ui/Button.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  [key: string]: any
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-capture-yellow text-space-blue hover:bg-capture-yellow-light hover:-translate-y-0.5 shadow-md hover:shadow-lg',
    secondary: 'bg-nurture-blue text-white hover:bg-blue-700 hover:-translate-y-0.5',
    ghost: 'bg-transparent text-white border border-white/28 hover:border-capture-yellow hover:text-capture-yellow',
    outline: 'border-2 border-space-blue text-space-blue hover:bg-space-blue hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

**File: `components/ui/Card.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-border-light rounded-lg p-6 md:p-8',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
```

**File: `components/ui/Badge.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'yellow' | 'blue' | 'green'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-nurture-blue/10 text-nurture-blue border border-nurture-blue/20',
    yellow: 'bg-capture-yellow/10 text-capture-yellow border border-capture-yellow/20',
    blue: 'bg-nurture-blue/10 text-nurture-blue border border-nurture-blue/20',
    green: 'bg-close-green/10 text-close-green border border-close-green/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
```

---

## Phase 4: Page Development

### 4.1 Root Layout with SEO

**File: `app/layout.tsx`**

```typescript
import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1C2E4A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://yourghlexperts.com'),
  title: {
    default: 'Hire a GoHighLevel Expert | GHL Expert Service | Your GHL Expert',
    template: '%s | Your GHL Expert',
  },
  description: 'Looking to hire a GoHighLevel expert? Your GHL Expert team builds CRM systems, automation workflows, AI agents & white-label SaaS for agencies. 200+ GHL projects. Book a free call today.',
  keywords: [
    'hire GoHighLevel expert',
    'GHL expert',
    'GoHighLevel setup',
    'GHL automation',
    'GoHighLevel white label',
    'GHL CRM',
    'GoHighLevel developer',
  ],
  robots: {
    index: true,
    follow: true,
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourghlexperts.com',
    siteName: 'Your GHL Expert',
    title: 'Hire a GoHighLevel Expert | GHL Expert Service',
    description: 'Expert GoHighLevel setup, automation, white-label SaaS, and AI agents for agencies. 200+ successful projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Your GHL Expert - GoHighLevel Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a GoHighLevel Expert | Your GHL Expert',
    description: 'Expert GoHighLevel setup and automation services.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'Technology',
  applicationName: 'Your GHL Expert',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Your GHL Expert',
              url: 'https://yourghlexperts.com',
              logo: 'https://yourghlexperts.com/logo.png',
              description: 'GoHighLevel expert service offering CRM setup, automation, white-label SaaS, AI agents, and funnel building.',
              sameAs: [
                'https://www.linkedin.com/company/yourghlexpert',
                'https://twitter.com/yourghlexpert',
              ],
              areaServed: ['US', 'GB', 'AU', 'AE', 'CA', 'SG', 'IN'],
            }),
          }}
        />
      </head>
      <body className="bg-white">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 4.2 Homepage

**File: `app/(routes)/page.tsx`**

```typescript
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Trust from '@/components/sections/Trust'
import Services from '@/components/sections/Services'
import HowWeWork from '@/components/sections/HowWeWork'
import Results from '@/components/sections/Results'
import Industries from '@/components/sections/Industries'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Hire a GoHighLevel Expert | GHL Expert Service',
  description: 'Looking to hire a GoHighLevel expert? Your GHL Expert team builds CRM systems, automation workflows, AI agents & white-label SaaS for agencies. 200+ GHL projects. Book a free call today.',
  openGraph: {
    url: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <HowWeWork />
      <Results />
      <Industries />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
```

---

## Phase 5: SEO & Metadata

### 5.1 SEO Utilities

**File: `lib/seo.ts`**

```typescript
export interface SEOMetadata {
  title: string
  description: string
  url: string
  image?: string
  author?: string
  publishedDate?: string
  modifiedDate?: string
  keywords?: string[]
  ogType?: string
}

export function generateMetadata(seo: SEOMetadata) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(', '),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      type: seo.ogType || 'website',
      images: seo.image ? [{ url: seo.image }] : undefined,
      publishedTime: seo.publishedDate,
      modifiedTime: seo.modifiedDate,
    },
  }
}

export const SITE_CONFIG = {
  name: 'Your GHL Expert',
  description: 'Expert GoHighLevel setup, automation, and white-label SaaS solutions',
  url: 'https://yourghlexperts.com',
  ogImage: 'https://yourghlexperts.com/og-image.png',
  twitterHandle: '@yourghlexpert',
}
```

### 5.2 Schema Markup

**File: `lib/schema.ts`**

```typescript
export function generateFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Your GHL Expert',
    url: 'https://yourghlexperts.com',
    description: 'GoHighLevel expert service offering CRM setup, automation, white-label SaaS, AI agents.',
    areaServed: ['US', 'GB', 'AU', 'AE', 'CA', 'SG', 'IN'],
    serviceType: [
      'GoHighLevel CRM Setup',
      'GHL Automation',
      'GoHighLevel White Label',
      'GHL Virtual Assistant',
      'GoHighLevel Funnel Builder',
      'GHL Migration Service',
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
```

---

## Phase 6: Domain Configuration

### 6.1 GoDaddy DNS Setup

**Step 1: Add A Record**
```
Name: @
Type: A
Value: 76.76.19.165  (Vercel's IP)
TTL: 600
```

**Step 2: Add CNAME Record**
```
Name: www
Type: CNAME
Value: cname.vercel-dns.com
TTL: 600
```

**Step 3: Add SPF Record (for emails)**
```
Name: @
Type: TXT
Value: v=spf1 include:sendgrid.net ~all
TTL: 3600
```

### 6.2 Vercel Project Configuration

1. **Connect Domain:**
   - Go to Vercel Project Settings → Domains
   - Add domain: `yourghlexperts.com`
   - Add alias: `www.yourghlexperts.com`
   - Verify DNS configuration

2. **Update Environment Variables:**
```bash
NEXT_PUBLIC_SITE_URL=https://yourghlexperts.com
CONTACT_EMAIL=hello@yourghlexperts.com
SENDGRID_API_KEY=your_sendgrid_api_key
```

3. **Enable HTTPS:**
   - Vercel automatically provisions SSL/TLS certificates
   - Redirect HTTP to HTTPS (default in Vercel)

### 6.3 Email Configuration

**SendGrid Integration for Contact Form:**
```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json()

    await sgMail.send({
      to: process.env.CONTACT_EMAIL!,
      from: 'noreply@yourghlexperts.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
```

---

## Phase 7: Deployment

### 7.1 Vercel Deployment

**Step 1: Connect GitHub**
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: YourGHLExpert website"
git branch -M main

# Add remote and push
git remote add origin https://github.com/yourusername/yourghlexpert.git
git push -u origin main
```

**Step 2: Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import GitHub repository
- Select project root: `/`
- Build settings (auto-detected)
- Environment variables:
  ```
  NEXT_PUBLIC_SITE_URL=https://yourghlexperts.com
  SENDGRID_API_KEY=your_key
  CONTACT_EMAIL=hello@yourghlexperts.com
  ```
- Deploy

**Step 3: Configure Custom Domain**
- In Vercel project settings
- Add domain: `yourghlexperts.com`
- Update GoDaddy DNS records (from Phase 6.1)

### 7.2 Build & Performance Optimization

**File: `next.config.mjs` additions**

```javascript
// Optimize images
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000, // 1 year
},

// Enable SWR in production
experimental: {
  cacheLife: {
    dynamic: { stale: 0, revalidate: 0, expire: 0 },
  },
}
```

### 7.3 Lighthouse Score Optimization

**Key metrics to target:**
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ First Input Delay (FID): < 100ms
- ✅ Cumulative Layout Shift (CLS): < 0.1

**Optimizations:**
1. Image optimization (WebP, AVIF)
2. Code splitting
3. Lazy loading for sections
4. Font optimization (system fonts + Plus Jakarta Sans)
5. CSS/JS minification (auto by Next.js)

---

## Phase 8: Post-Launch Optimization

### 8.1 SEO Verification

**Checklist:**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in Search Console
- [ ] Set canonical URLs
- [ ] Enable mobile-friendly checking
- [ ] Monitor Core Web Vitals

**File: `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourghlexperts.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://yourghlexperts.com/services</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://yourghlexperts.com/pricing</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://yourghlexperts.com/case-studies</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://yourghlexperts.com/about</loc>
    <priority>0.7</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://yourghlexperts.com/contact</loc>
    <priority>0.7</priority>
    <changefreq>yearly</changefreq>
  </url>
</urlset>
```

**File: `public/robots.txt`**

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /_next/
Disallow: /api/

Sitemap: https://yourghlexperts.com/sitemap.xml
```

### 8.2 Analytics & Monitoring

**Google Analytics 4:**
```typescript
// app/layout.tsx - add script
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

### 8.3 Mobile Responsiveness Testing

**Breakpoints:**
```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

**Test Devices:**
- iPhone 12/13/14/15
- iPad Pro
- Samsung Galaxy S21
- Google Pixel
- Desktop (1920x1080, 2560x1440)

### 8.4 Icon System with Lucide React

**Example Icon Usage:**

```typescript
import {
  Check, // For checkmarks
  ArrowRight, // For CTAs
  Code, // For dev-related services
  Settings, // For configuration/setup
  Zap, // For automation/speed
  Users, // For team/collaboration
  TrendingUp, // For results/growth
  Shield, // For security/trust
  Smartphone, // For mobile-responsive
  Globe, // For global/worldwide
} from 'lucide-react'

export function ServiceCard({ title, description }: any) {
  return (
    <div className="flex gap-4">
      <Check className="text-close-green flex-shrink-0 w-6 h-6 mt-1" />
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-body">{description}</p>
      </div>
    </div>
  )
}
```

**All Icons Used in Design:**
- Navigation: Menu, X, ChevronDown, ChevronRight, ArrowRight
- Services: Code, Settings, Zap, Users, TrendingUp, Shield
- Contact: Mail, Phone, Linkedin, Twitter
- General: Check, Star, AlertCircle, Info, Clock, MapPin

---

## Phase 9: Content Structure

### Homepage Sections (in order):

1. **Navigation** - Fixed, sticky header
2. **Hero** - Main headline with CTA buttons
3. **Trust Strip** - Social proof (client count, projects, testimonials)
4. **What is a GHL Expert** - SEO content section with features
5. **Services Grid** - 6 core service cards
6. **How We Work** - 4-step process timeline
7. **Case Studies / Results** - 3 project case studies with metrics
8. **Industries We Serve** - 4 industry verticals
9. **Pricing** - 3 pricing tiers (featured in middle)
10. **FAQ** - 7 common questions with schema
11. **Final CTA** - Contact/booking call-to-action
12. **Footer** - Links, contact info, copyright

### Key SEO Optimization Points:

1. **H1 Tag:** "Hire a GoHighLevel Expert" (exact keyword first)
2. **H2 Tags:** Service names as secondary keywords
3. **Meta Description:** 160 chars with primary keyword
4. **Schema Markup:** FAQPage, Organization, BreadcrumbList
5. **Internal Links:** Services, Case Studies, Pricing pages
6. **Mobile Friendly:** 100% responsive, touch targets 48px+
7. **Image Alt Text:** Descriptive alt text for all images
8. **Loading Performance:** < 3s FCP, < 2.5s LCP

---

## Phase 10: File Checklist

### Configuration Files:
- [ ] `next.config.mjs` - Next.js configuration
- [ ] `tailwind.config.ts` - Tailwind CSS tokens
- [ ] `tsconfig.json` - TypeScript configuration
- [ ] `package.json` - Dependencies and scripts
- [ ] `.env.local` - Local environment variables (not committed)
- [ ] `.env.example` - Environment template (for reference)

### Core Application:
- [ ] `app/layout.tsx` - Root layout with metadata
- [ ] `app/globals.css` - Global styles
- [ ] `app/(routes)/page.tsx` - Homepage

### Components:
- [ ] `components/layout/Navigation.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `components/sections/*` - All section components
- [ ] `components/ui/*` - Reusable UI components

### Utilities:
- [ ] `lib/utils.ts` - Helper functions
- [ ] `lib/seo.ts` - SEO utilities
- [ ] `lib/schema.ts` - Schema markup generators
- [ ] `lib/constants.ts` - Constants and config

### Static Files:
- [ ] `public/favicon.ico`
- [ ] `public/og-image.png` - OpenGraph image
- [ ] `public/logo.png` - Logo file
- [ ] `public/sitemap.xml`
- [ ] `public/robots.txt`

---

## Quick Start Commands

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev
# Open http://localhost:3000

# Build for production
pnpm build

# Run production build locally
pnpm start

# Lint and format
pnpm lint
pnpm format

# Type checking
pnpm type-check
```

---

## Deployment Checklist

Before going live:

- [ ] All pages responsive on mobile (375px width)
- [ ] Lighthouse score > 90
- [ ] All links working (internal and external)
- [ ] Contact form submitting correctly
- [ ] Meta tags complete (title, description, OG)
- [ ] Favicon and favicons set
- [ ] 404 page created
- [ ] Analytics configured
- [ ] XML sitemap created and submitted
- [ ] Robots.txt configured
- [ ] DNS records pointing to Vercel
- [ ] HTTPS/SSL verified
- [ ] Google Search Console verified
- [ ] Domain email configured (if needed)
- [ ] CDN caching headers optimized
- [ ] Environment variables set in Vercel

---

## Support & Resources

**Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev
- Vercel: https://vercel.com/docs
- Schema.org: https://schema.org

**Tools:**
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev
- Lighthouse: Chrome DevTools → Lighthouse tab
- Responsive Design Checker: https://responsivedesignchecker.com

---

## Maintenance

### Monthly:
- Check Lighthouse scores
- Monitor SEO keywords ranking
- Review analytics
- Check broken links

### Quarterly:
- Update dependencies (pnpm update)
- Security audit
- Performance review
- Content refresh

### Annually:
- SSL certificate renewal (auto on Vercel)
- Domain renewal (GoDaddy)
- Analytics review and strategy adjustment

---

**Version:** 1.0  
**Last Updated:** January 2024  
**Status:** Ready for Implementation

This guide provides everything needed to launch yourghlexperts.com from initial setup through deployment and maintenance. Follow each phase sequentially for best results.
