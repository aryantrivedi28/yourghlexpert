# Responsive Design & Mobile-First Strategy

Complete guide to implementing a fully responsive, mobile-first website for yourghlexperts.com.

---

## Mobile-First Philosophy

**Core Principle:** Design for mobile first, then enhance for larger screens.

```
Mobile (375px) → Tablet (640px) → Desktop (1024px) → Wide (1280px)
```

All components should work perfectly on the smallest screen and scale up gracefully.

---

## Tailwind Breakpoints

```typescript
// Defined in tailwind.config.ts
screens: {
  'sm': '640px',   // Small devices (landscape phone)
  'md': '768px',   // Medium devices (tablet)
  'lg': '1024px',  // Large devices (desktop)
  'xl': '1280px',  // Extra large (wide desktop)
  '2xl': '1536px', // Ultra wide
}
```

**Usage:**
```typescript
className="text-base sm:text-lg md:text-xl lg:text-2xl"
//        └─ Mobile ─┘ ├─ Tablet ─┤ ├─ Desktop ─┤
```

---

## Typography Scaling

### Responsive Font Sizes

Using `clamp()` for fluid typography:

```css
/* H1: Scales from 36px to 60px */
h1 {
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
}

/* H2: Scales from 26px to 40px */
h2 {
  font-size: clamp(1.625rem, 3.5vw, 2.5rem);
}

/* H3: Scales from 17px to 21px */
h3 {
  font-size: clamp(1rem, 2vw, 1.5rem);
}

/* Body: Fixed sizes based on breakpoint */
p {
  @apply text-base sm:text-base md:text-base lg:text-lg;
}
```

### Responsive Line Heights

```typescript
// Mobile: Tighter line height (1.4)
// Desktop: More breathing room (1.8)
className="leading-relaxed sm:leading-loose"
```

---

## Layout Patterns

### Pattern 1: Hero Section

**Mobile (Single Column)**
```
┌─────────────────┐
│   Headline      │
│   Subheading    │
│   CTA Buttons   │
│   (stacked)     │
│   Stats Card    │
│   (full width)  │
└─────────────────┘
```

**Desktop (Two Column)**
```
┌──────────────────┬──────────────┐
│  Left Content    │              │
│  - Headline      │  Stats Card  │
│  - Subheading    │  (630px)     │
│  - CTA Buttons   │              │
│  - Stats         │              │
└──────────────────┴──────────────┘
```

**Implementation:**
```typescript
<section className="bg-space-blue text-white">
  <div className="container-wide">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left Side */}
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-black">
          Hire a GoHighLevel Expert
        </h1>
        <p className="text-lg md:text-xl text-white/70">
          Subheading...
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>Book a Call</Button>
          <Button variant="ghost">Learn More</Button>
        </div>
      </div>

      {/* Right Side - Stats Card */}
      <div className="relative">
        <div className="bg-white/5 rounded-xl p-8">
          {/* Card content */}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Pattern 2: Service Cards Grid

**Mobile (1 Column)**
```
┌──────────────┐
│  Service 1   │
└──────────────┘
┌──────────────┐
│  Service 2   │
└──────────────┘
┌──────────────┐
│  Service 3   │
└──────────────┘
```

**Tablet (2 Columns)**
```
┌────────────┬────────────┐
│ Service 1  │ Service 2  │
├────────────┼────────────┤
│ Service 3  │ Service 4  │
└────────────┴────────────┘
```

**Desktop (3 Columns)**
```
┌────────┬────────┬────────┐
│Srv 1   │Srv 2   │Srv 3   │
├────────┼────────┼────────┤
│Srv 4   │Srv 5   │Srv 6   │
└────────┴────────┴────────┘
```

**Implementation:**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => (
    <div key={service.id} className="bg-white rounded-lg p-6 border">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Pattern 3: Navigation Menu

**Mobile (Hamburger)**
```
┌─────────────────────┐
│ Logo    ☰          │
├─────────────────────┤
│ Services            │
│ Pricing             │
│ Case Studies        │
│ About               │
│ Contact             │
└─────────────────────┘
```

**Desktop (Horizontal)**
```
┌────────────────────────────────────────┐
│ Logo  Services Pricing Cases About CTA  │
└────────────────────────────────────────┘
```

**Implementation:**
```typescript
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-space-blue">
      <div className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
```

### Pattern 4: Content + Sidebar

**Mobile (Stacked)**
```
┌──────────────────┐
│   Main Content   │
│   (100% width)   │
├──────────────────┤
│   Sidebar        │
│   (100% width)   │
└──────────────────┘
```

**Desktop (Side-by-Side)**
```
┌──────────────────┬──────────┐
│                  │          │
│ Main Content     │ Sidebar  │
│ (66% width)      │(33% w)   │
│                  │          │
└──────────────────┴──────────┘
```

**Implementation:**
```typescript
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Main content */}
  <div className="lg:col-span-2">
    {/* Content */}
  </div>

  {/* Sidebar */}
  <aside className="lg:col-span-1">
    {/* Sidebar */}
  </aside>
</div>
```

---

## Spacing Scaling

### Padding Adjustments

```typescript
// Small padding on mobile, larger on desktop
<section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
  {/* Content */}
</section>

// Utility class
.section-padding {
  @apply py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8;
}
```

### Gap Adjustments

```typescript
// Grid gaps that scale
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
  {/* Items */}
</div>

// Flex gaps
<div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
  {/* Items */}
</div>
```

---

## Image Optimization for Responsive Design

### Use Next.js Image Component

```typescript
import Image from 'next/image'

<Image
  src="/images/hero-image.jpg"
  alt="Hero description"
  width={1200}
  height={630}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 1200px"
  className="w-full h-auto"
  priority // For above-the-fold images
/>
```

### Responsive Images with Picture Element (If needed)

```typescript
<picture>
  <source media="(max-width: 640px)" srcSet="/images/hero-mobile.webp" />
  <source media="(max-width: 1024px)" srcSet="/images/hero-tablet.webp" />
  <source srcSet="/images/hero-desktop.webp" />
  <img src="/images/hero-fallback.jpg" alt="Hero" />
</picture>
```

### Image Sizing Strategy

| Breakpoint | Width | Format |
|-----------|-------|--------|
| Mobile    | 375px | WebP (auto) |
| Tablet    | 768px | WebP (auto) |
| Desktop   | 1024px+ | WebP/AVIF (auto) |

---

## Touch Targets & Interaction

### Minimum Touch Target Size: 48px × 48px

```typescript
// ✅ Good
<button className="px-6 py-3 min-h-12 min-w-12">
  Click Me
</button>

// ❌ Bad (too small)
<button className="px-2 py-1 text-xs">
  Click Me
</button>
```

### Spacing for Touch

```typescript
// Add gap between clickable elements
<div className="flex flex-col gap-4 sm:gap-6">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>

// Mobile menu items should have good spacing
<nav className="space-y-4 py-6">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="block px-4 py-3 rounded-lg hover:bg-gray-100"
    >
      {item.label}
    </Link>
  ))}
</nav>
```

---

## Viewport & Orientation Handling

### Viewport Meta Tag (in layout.tsx)

```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1C2E4A',
}
```

### Orientation-Specific Styles (if needed)

```css
@media (orientation: portrait) {
  .landscape-only {
    display: none;
  }
}

@media (orientation: landscape) {
  .portrait-only {
    display: none;
  }
}
```

---

## Safe Area Insets (for notch/island support)

```css
/* iPhone notch/Dynamic Island support */
.header {
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
  padding-top: max(1rem, env(safe-area-inset-top));
}

.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

---

## Responsive Text Visibility

### Show/Hide Based on Screen Size

```typescript
// Hide on mobile, show on desktop
<div className="hidden lg:block">
  {/* Desktop-only content */}
</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">
  {/* Mobile-only content */}
</div>

// Show on tablet and up
<div className="hidden md:block">
  {/* Tablet & desktop only */}
</div>
```

### Screen Reader Only Content

```typescript
<span className="sr-only">Screen readers only</span>
```

---

## Responsive Forms

### Mobile-Optimized Form

```typescript
<form className="space-y-4 md:space-y-6">
  {/* Email */}
  <div className="space-y-2">
    <label className="block text-sm font-bold text-space-blue">
      Email Address
    </label>
    <input
      type="email"
      className="w-full px-4 py-3 rounded-lg border border-border-light focus:ring-2 focus:ring-nurture-blue"
      placeholder="your@email.com"
      required
    />
  </div>

  {/* Multi-column on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <div className="space-y-2">
      <label className="block text-sm font-bold">First Name</label>
      <input type="text" className="w-full px-4 py-3 rounded-lg border" />
    </div>
    <div className="space-y-2">
      <label className="block text-sm font-bold">Last Name</label>
      <input type="text" className="w-full px-4 py-3 rounded-lg border" />
    </div>
  </div>

  {/* Full width button on mobile */}
  <button className="w-full px-6 py-3 bg-capture-yellow text-space-blue font-bold rounded-lg">
    Submit
  </button>
</form>
```

---

## Responsive Tables

### Mobile-Friendly Table

```typescript
<div className="overflow-x-auto">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-border-light">
        <th className="px-4 py-3 text-left font-bold">Feature</th>
        <th className="px-4 py-3 text-left font-bold hidden sm:table-cell">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="px-4 py-3">Basic</td>
        <td className="px-4 py-3 hidden sm:table-cell">Standard features</td>
      </tr>
    </tbody>
  </table>
</div>
```

Or use card layout on mobile:

```typescript
{data.map((item) => (
  <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border">
    <div>
      <span className="font-bold md:hidden">Feature</span>
      <p>{item.feature}</p>
    </div>
    <div>
      <span className="font-bold md:hidden">Details</span>
      <p>{item.details}</p>
    </div>
    {/* More columns */}
  </div>
))}
```

---

## Mobile Performance Optimization

### Lazy Loading Images

```typescript
<Image
  src="/images/case-study.jpg"
  alt="Case study"
  width={800}
  height={500}
  loading="lazy"
  className="w-full h-auto"
/>
```

### Lazy Loading Sections

```typescript
import dynamic from 'next/dynamic'

const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'), {
  loading: () => <div>Loading...</div>,
})

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies /> {/* Only loaded when needed */}
    </>
  )
}
```

### Defer Non-Critical Scripts

```typescript
// In layout.tsx
<script
  async
  src="https://cdn.example.com/script.js"
  strategy="lazyOnload"
/>
```

---

## Testing Responsive Design

### Manual Testing Checklist

**Mobile (375px - iPhone SE)**
- [ ] Text readable without zoom
- [ ] Buttons/links easily tappable (48px+)
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Navigation accessible
- [ ] Forms full-width
- [ ] Load time < 3s

**Tablet (768px - iPad)**
- [ ] Layout optimized for medium screen
- [ ] Touch targets still accessible
- [ ] Images properly sized
- [ ] No unused whitespace
- [ ] Menu transitions smooth

**Desktop (1024px+)**
- [ ] Full desktop experience
- [ ] Multi-column layouts work
- [ ] Hover states visible
- [ ] Maximum width respected

### Browser DevTools Testing

1. Open DevTools (F12)
2. Click Device Toolbar icon (Ctrl+Shift+M)
3. Test responsive breakpoints:
   - iPhone SE (375×667)
   - iPad (768×1024)
   - Desktop (1024×768+)
4. Check console for errors

### Lighthouse Mobile Audit

1. Open DevTools → Lighthouse
2. Select "Mobile"
3. Run audit
4. Check:
   - Performance > 90
   - Accessibility > 95
   - SEO > 95

### Real Device Testing

**Essential Devices:**
- iPhone 12/13/14 (375px, 390px)
- Samsung Galaxy S21 (360px)
- iPad (768px)
- Desktop (1920px)

---

## Common Responsive Patterns

### Responsive Container

```typescript
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
)
```

### Responsive Hero

```typescript
<section className="bg-space-blue text-white py-12 sm:py-16 md:py-20 lg:py-32">
  <div className="container-wide">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Content */}
    </div>
  </div>
</section>
```

### Responsive Grid

```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {items.map((item) => (
    <div key={item.id}>{/* Content */}</div>
  ))}
</div>
```

### Responsive Flex

```typescript
<div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-between">
  {/* Content */}
</div>
```

---

## Accessibility + Responsiveness

### Screen Reader Friendly Responsive

```typescript
// Label visible on mobile, hidden on desktop (still readable by screen readers)
<label htmlFor="email" className="block md:sr-only">
  Email Address
</label>
<input
  id="email"
  type="email"
  placeholder="Your email"
  aria-label="Email address for newsletter signup"
/>
```

### Focus Management

```typescript
<button
  className="px-6 py-3 focus:outline-none focus:ring-2 focus:ring-nurture-blue focus:ring-offset-2 rounded-lg"
>
  Accessible Button
</button>
```

---

## Performance Metrics by Device

**Target Core Web Vitals by Device:**

| Metric | Mobile | Tablet | Desktop |
|--------|--------|--------|---------|
| LCP | < 3.0s | < 2.5s | < 2.5s |
| FID | < 100ms | < 100ms | < 100ms |
| CLS | < 0.1 | < 0.1 | < 0.1 |

---

## Final Checklist

- [ ] All breakpoints tested
- [ ] Touch targets 48px×48px minimum
- [ ] No horizontal scrolling
- [ ] Font sizes readable (16px+ body)
- [ ] Line heights appropriate (1.5+)
- [ ] Images optimized (WebP/AVIF)
- [ ] Lighthouse > 90 on mobile
- [ ] Core Web Vitals passing
- [ ] Accessibility WCAG 2.1 AA
- [ ] 4G network performance tested

---

**This completes the responsive design guide. All components in COMPONENT_EXAMPLES.md follow these responsive patterns.**
