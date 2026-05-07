import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { IntroSection } from '@/components/sections/intro'
import { ServicesSection } from '@/components/sections/services'
import { HowWeWorkSection } from '@/components/sections/how-we-work'
import { CaseStudiesSection } from '@/components/sections/case-studies'
import { IndustriesSection } from '@/components/sections/industries'
import { PricingSection } from '@/components/sections/pricing'
import { FAQSection } from '@/components/sections/faq'
import { CTASection } from '@/components/sections/cta'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <ServicesSection />
      <HowWeWorkSection />
      <CaseStudiesSection />
      <IndustriesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
