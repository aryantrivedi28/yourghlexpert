# Deployment Guide for yourghlexperts.com

This guide covers deploying the Next.js homepage to Vercel and connecting your GoDaddy domain.

## Prerequisites

- GitHub account (for version control)
- Vercel account (free tier available)
- GoDaddy domain (yourghlexperts.com already registered)
- Node.js 18+ installed locally

## Step 1: Local Development Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000 in browser
```

Your site should display with:
- Blue and yellow brand colors
- All 11 homepage sections
- Mobile-responsive design
- SEO meta tags

## Step 2: Git Setup (First Time Only)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial homepage build for yourghlexperts.com"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/yourghlexpert.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended for First Deploy)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Connect GitHub and select your `yourghlexpert` repo
5. Click "Import"
6. Vercel will auto-detect Next.js configuration
7. Click "Deploy"

Wait 2-3 minutes for deployment to complete.

### Option B: Vercel CLI (Faster for Updates)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Follow the prompts:
# - Link to existing project? → No (first time)
# - Project name → yourghlexpert
# - Directory → ./
# - Build command → Use default
```

## Step 4: Connect GoDaddy Domain

### Via Vercel Dashboard:

1. Go to your project at [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "yourghlexpert" project
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Enter: `yourghlexperts.com`
6. Click "Add"

### Via GoDaddy:

You have 2 options for DNS:

#### Option A: Vercel Nameservers (Recommended)
1. Copy Vercel's nameservers from the domain config
2. Go to [GoDaddy DNS Settings](https://www.godaddy.com)
3. Log in to your GoDaddy account
4. Go to Domain Settings
5. Find "Nameservers"
6. Replace with Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
7. Save changes
8. Wait 24-48 hours for DNS propagation

#### Option B: CNAME Records (If you want to keep GoDaddy DNS)
1. In Vercel dashboard, get the CNAME record value
2. Go to GoDaddy Domain Settings
3. Find "DNS" or "Records"
4. Add CNAME record:
   - Name: `@` (for root domain)
   - Points to: [value from Vercel]
5. Save changes

## Step 5: Verify Domain Connection

```bash
# Check DNS propagation (may take 24-48 hours)
nslookup yourghlexperts.com

# Or use online tool:
# https://www.whatsmydns.net/
# Search for: yourghlexperts.com
```

Once DNS is live, you'll see:
- ✓ Green "Connected" in Vercel dashboard
- ✓ Site accessible at https://yourghlexperts.com
- ✓ SSL/TLS certificate auto-installed

## Step 6: SSL Certificate (Auto-Installed)

Vercel automatically provisions an SSL certificate. No action needed.

Your site is automatically served over HTTPS.

## Step 7: Environment Variables (If Needed)

If you add email, analytics, or other services:

1. Go to Vercel project → Settings → Environment Variables
2. Add each variable:
   - Key: `VARIABLE_NAME`
   - Value: `your-value`
3. Select environment: Production, Preview, Development
4. Click "Add"
5. Redeploy with `git push`

Current setup requires no environment variables.

## Step 8: Post-Deployment Checklist

After deployment, verify:

### Homepage
- [ ] Home page loads at yourghlexperts.com
- [ ] All 11 sections visible
- [ ] Mobile responsive on phone
- [ ] Navigation links work (#ghl-services, etc.)
- [ ] Hero stats card visible on desktop
- [ ] Hero card hidden on mobile

### SEO
- [ ] Meta title correct in browser tab
- [ ] Meta description appears in search
- [ ] Open Graph image set (replace with real image)
- [ ] Schema markup present (Inspect → Network → Document)
- [ ] robots.txt accessible at yourghlexperts.com/robots.txt
- [ ] sitemap.xml accessible at yourghlexperts.com/sitemap.xml

### Performance
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] Images load quickly
- [ ] No 404 errors

### Functionality
- [ ] All links work
- [ ] Phone number clickable (tel: link)
- [ ] CTA buttons functional
- [ ] FAQ accordion opens/closes
- [ ] Pricing cards visible
- [ ] Social links work

## Updating Content

When you update content:

```bash
# Make changes to components/sections/
git add .
git commit -m "Update hero copy"
git push origin main

# Vercel automatically redeploys
# Check deployment status: vercel.com/dashboard
```

## Rollback to Previous Version

If something breaks:

```bash
# Check deployment history in Vercel dashboard
# Click "Deployments" tab
# Find previous working version
# Click "..." menu → "Promote to Production"
```

Or via CLI:

```bash
# List all deployments
vercel list

# Rollback to specific deployment
vercel rollback
```

## Custom Email (Optional)

To add contact forms or email replies:

1. Choose email service:
   - SendGrid (free tier: 100 emails/day)
   - Mailgun (free tier: 1,000 emails/month)
   - AWS SES (lowest cost at scale)

2. Add API key to environment variables
3. Create `/app/api/contact/route.ts` handler
4. Add email validation

See SETUP_GUIDE.md for implementation details.

## Analytics (Optional)

Google Analytics already includes setup:

```bash
# Add to next.config.mjs if needed:
# Vercel Web Analytics auto-enabled
```

To view analytics:
1. Vercel dashboard → Analytics tab
2. See page views, response time, etc.

## Monitoring & Logs

View production errors:
1. Vercel dashboard → Deployments
2. Click latest deployment
3. Go to "Logs" tab
4. See real-time server logs

## Maintenance

### Weekly
- Check Vercel dashboard for any errors
- Monitor Core Web Vitals

### Monthly
- Review analytics
- Update content as needed
- Check Google Search Console for crawl errors

### Quarterly
- Audit links
- Update case studies
- Refresh pricing if needed

## Troubleshooting

### Site not accessible after 24 hours?
- Check DNS propagation: https://www.whatsmydns.net/
- Verify nameservers in GoDaddy match Vercel
- Clear browser cache (Ctrl+F5)

### Build failing in Vercel?
- Check "Deployments" → "Logs"
- Look for TypeScript errors
- Run `pnpm build` locally to debug

### Domain shows "pending" in Vercel?
- Wait 24-48 hours for DNS propagation
- Check nameservers are correct
- Verify no typos in domain name

### SSL certificate error?
- Vercel auto-provisions - usually fixes within 1 hour
- If persists, contact Vercel support

## Getting Help

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Domain Issues: https://support.godaddy.com/
- Vercel Support: https://vercel.com/support

## Summary

Your site is now:
- Deployed to Vercel (instant, free)
- Connected to yourghlexperts.com (via GoDaddy)
- Using HTTPS/SSL (auto-installed)
- Mobile-responsive (tested)
- SEO-optimized (schema + meta tags)
- Analytics-enabled (Vercel Web Analytics)

You can update content by editing files and pushing to GitHub. Vercel automatically redeploys within seconds.
