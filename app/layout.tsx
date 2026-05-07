import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SchemaMarkup } from '@/components/schema-markup'
import './globals.css'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadataBase = new URL('https://www.yourghlexperts.com')

export const metadata: Metadata = {
  title: 'Hire a GoHighLevel Expert | GHL Expert Service | Your GHL Expert',
  description: 'Looking to hire a GoHighLevel expert? Your GHL Expert team builds CRM systems, automation workflows, AI agents & white-label SaaS for agencies. 200+ GHL projects. Book a free call today.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Hire a GoHighLevel Expert | GHL Expert Service',
    description: 'Looking to hire a GoHighLevel expert? We build complete GHL systems for agencies — CRM, automation, AI agents, white-label SaaS. 200+ projects delivered.',
    type: 'website',
    url: 'https://www.yourghlexperts.com/',
    siteName: 'Your GHL Experts',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
