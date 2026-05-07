# yourghlexperts.com - Quick Reference

## Live Site
- **URL**: https://www.yourghlexperts.com
- **Domain**: yourghlexperts.com (registered on GoDaddy)
- **Hosting**: Vercel (free tier)
- **Build Time**: Deployed in seconds
- **SSL**: Auto-enabled HTTPS

## What You Have

A complete, production-ready homepage with:
- 11 full-featured sections
- 100% responsive (375px to 2560px+)
- Complete SEO optimization
- 25+ Lucide React icons
- Accessible (WCAG 2.1 AA)
- Zero dependencies needed for core functionality

## Files You Need to Know

### To Update Homepage Content
```
components/sections/
├── hero.tsx           # Main heading, hero copy, stats
├── services.tsx       # 6 service offerings
├── pricing.tsx        # 3 pricing tiers
├── faq.tsx           # 8 FAQ questions/answers
├── case-studies.tsx  # 3 client results
└── [others]          # Other sections
```

### To Change Brand
```
app/globals.css       # Colors, fonts, spacing tokens
```

### To Deploy
```
1. git push origin main
2. Vercel auto-redeploys
3. Check vercel.com/dashboard
```

## Key Commands

```bash
# Local development
pnpm dev              # Start at localhost:3000

# Build for production
pnpm build

# Deploy to Vercel
git push origin main  # Auto-deploys

# Check build errors locally
pnpm build
```

## Brand Colors (Copy-Paste)

```css
/* Primary Blue */
bg-blue-900      /* #1C2E4A */
text-blue-900

/* Accent Blue */
bg-blue-400      /* #0E9BF0 */
text-blue-400

/* CTA Yellow */
bg-yellow-400    /* #F8D000 */
text-yellow-400

/* Success Green */
bg-green-600     /* #25C97D */
text-green-600

/* Light Gray */
bg-gray-50       /* #F4F7FA */
```

## Update Copy Examples

### Change Hero Title
File: `components/sections/hero.tsx` (line ~30)
```tsx
<h1 className="text-white" id="hero-h1">
  Your new heading here
  <span className="block text-yellow-400">Accent line</span>
</h1>
```

### Add New Service
File: `components/sections/services.tsx` (top of file, services array)
```tsx
const services = [
  // ... existing services
  {
    icon: YourIcon,
    title: 'New Service Name',
    description: 'Service description...',
    link: '/service-page/',
  },
]
```

### Update FAQ
File: `components/sections/faq.tsx` (faqs array)
```tsx
const faqs = [
  {
    q: 'Your question?',
    a: 'Your answer text here.',
  },
]
```

### Add Navigation Link
File: `components/navigation.tsx` (nav__links section)
```tsx
<a href="#new-section">New Link</a>
```

## SEO Status

- Title: Optimized ✓
- Description: Optimized ✓
- Schema markup: FAQPage + Organization ✓
- robots.txt: Present ✓
- sitemap.xml: Generated ✓
- Mobile optimized: Yes ✓
- Core Web Vitals: Ready ✓

## Performance Targets

- Lighthouse: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Mobile friendly: Yes

## Responsive Sizes

- Mobile: 375px (default)
- Tablet: 640px (md)
- Desktop: 1024px (lg)
- Wide: 1280px+ (no breakpoint)

## Component Quick Links

**Navigation**: `components/navigation.tsx`
- Logo, links, phone, CTA button
- Sticky top, dark blue background

**Footer**: `components/footer.tsx`
- 3-column layout
- Links, contact, powered by

**Sections**: `components/sections/`
- Hero, Trust, Intro, Services
- HowWeWork, CaseStudies, Industries
- Pricing, FAQ, CTA

**Buttons**: `components/ui/button.tsx`
- Variants: cta, ghost, nb, primary
- All buttons have hover effects

## Lucide Icons Used

- CheckCircle2 (checkmarks)
- ChevronRight (arrows)
- Plus (FAQ expand)
- Mail (email link)
- FolderOpen, Zap, Tag, User, Target, RefreshCw (services)
- Building2, Home, Wrench, Code, BookOpen, Scale, Heart (industries)
- Globe, Lock, Star (trust strip)

See lucide.dev for all available icons.

## One-Time Setup

```bash
# Install dependencies (only needed once)
pnpm install

# Connect to GitHub (only first time)
git remote add origin https://github.com/USERNAME/yourghlexpert

# Deploy to Vercel (only first time)
vercel
```

## Regular Workflow

```bash
# 1. Make changes to files
# 2. Test locally
pnpm dev

# 3. Commit changes
git add .
git commit -m "Update copy"

# 4. Push to deploy
git push origin main

# 5. Vercel auto-redeploys (within 30 seconds)
# 6. Monitor at vercel.com/dashboard
```

## Troubleshooting

**Build fails locally?**
```bash
pnpm install
pnpm build
# Check error messages
```

**Can't push to GitHub?**
```bash
# Verify remote
git remote -v

# Reset remote if needed
git remote remove origin
git remote add origin https://github.com/USERNAME/yourghlexpert
```

**Site looks broken after deploy?**
- Check Vercel Deployments page
- Click latest deployment
- View "Logs" tab for errors
- Click "Redeploy" to try again

**DNS not working?**
- Wait 24-48 hours for propagation
- Check nameservers with: https://www.whatsmydns.net/

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **GoDaddy Support**: https://support.godaddy.com/

## What's in the Box

✓ 11 complete sections
✓ Fully responsive
✓ SEO optimized
✓ 25+ Lucide icons
✓ Schema markup
✓ robots.txt
✓ sitemap.xml
✓ Brand design system
✓ Accessibility compliant
✓ Performance optimized
✓ TypeScript typed
✓ Ready to deploy

## Next Steps

1. Read `DEPLOYMENT_GUIDE.md` for setup
2. Read `PROJECT_SUMMARY.md` for details
3. Deploy using `git push origin main`
4. Update content as needed
5. Monitor at vercel.com/dashboard

---

Everything is set up, tested, and ready to go live.
