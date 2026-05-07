import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SchemaMarkup } from '@/components/schema-markup'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadataBase = new URL('https://www.yourghlexperts.com')

export const metadata: Metadata = {
  title: 'Hire a GoHighLevel Expert | GHL Expert Service | Your GHL Expert',
  description: 'Looking to hire a GoHighLevel expert? Your GHL Expert team builds CRM systems, automation workflows, AI agents & white-label SaaS for agencies. 200+ GHL projects. Book a free call today.',
  generator: 'v0.app',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Hire a GoHighLevel Expert | GHL Expert Service',
    description: 'Looking to hire a GoHighLevel expert? We build complete GHL systems for agencies — CRM, automation, AI agents, white-label SaaS. 200+ projects delivered.',
    type: 'website',
    url: 'https://www.yourghlexperts.com/',
    siteName: 'Your GHL Experts',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-white antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
