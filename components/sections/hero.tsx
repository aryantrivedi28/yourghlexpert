'use client'

import { Button } from '../ui/button'
import { ChevronRight, Star, CheckCircle2, ArrowRight } from 'lucide-react'

export function HeroSection() {
  const stats = [
    { value: '200', label: 'GHL Projects Delivered', suffix: '+', hasSuffix: true },
    { value: '50', label: 'Clients Worldwide', suffix: '+', hasSuffix: true },
    { value: '6', label: 'Countries Served', suffix: '', hasSuffix: false },
    { value: '2', label: 'Avg. Delivery Time', suffix: 'wks', hasSuffix: true },
  ]

  return (
    <section className="relative overflow-hidden bg-space-blue pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-[100px] lg:pb-20">
      {/* Background Grid Pattern - matches reference exactly */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 155, 240, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 155, 240, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      
      {/* Bottom Accent Line - 3px yellow border like reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-capture-yellow" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-14 items-center">
          
          {/* Left Content - with fade-up animations matching reference */}
          <div className="space-y-8">
            {/* Eyebrow - matches reference exactly */}
            <div className="inline-flex items-center gap-2">
              <div className="h-0.5 w-6 rounded-full bg-capture-yellow" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-capture-yellow">
                GoHighLevel Expert Service
              </span>
            </div>

            {/* H1 - Primary Keyword First exactly as reference */}
            <h1 className="text-2xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hire a GoHighLevel Expert
              <span className="mt-2 block text-capture-yellow">
                Who Builds. Not Just Consults.
              </span>
            </h1>

            {/* Lead Paragraph - matches reference copy exactly */}
            <p className="max-w-md text-[15px] leading-relaxed text-white/70 lg:text-[17px]">
              Your GHL Expert team configures your entire{' '}
              <strong className="font-semibold text-white">GoHighLevel system</strong> — CRM architecture,
              automation workflows, AI voice agents, and white-label SaaS — so your agency runs on autopilot.{' '}
              <strong className="font-semibold text-white">200+ GHL projects</strong> delivered across 6 countries.
            </p>

            {/* CTA Buttons - matches reference layout exactly */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="#contact" className="inline-flex items-center gap-2">
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#ghl-services" className="inline-flex items-center gap-1">
                  See All GHL Services
                </a>
              </Button>
            </div>

            {/* Trust Indicators - matches reference exactly */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-close-green" />
                Fixed price
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-close-green" />
                No hourly billing
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-close-green" />
                Dedicated GHL expert on every project
              </span>
              <span className="text-white/20">·</span>
              <span>Live in 2–4 weeks</span>
            </div>
          </div>

          {/* Right Content - Stats Card matching reference exactly */}
          <div className="hidden transform rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 lg:block">
            <div className="mb-7 text-[11px] font-bold uppercase tracking-[0.18em] text-capture-yellow">
              GoHighLevel Expert Delivery Record
            </div>
            
            {/* Stats Grid - matches reference 2x2 grid */}
            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    py-5
                    ${index % 2 === 0 ? 'pr-5' : 'pl-5'}
                    ${index < 2 ? 'border-b border-white/10' : ''}
                    ${index % 2 === 0 && index < 2 ? 'border-r border-white/10' : ''}
                    ${index % 2 === 1 && index === 1 ? 'border-b border-white/10' : ''}
                  `}
                >
                  <div className="text-[34px] font-black leading-none text-white">
                    {stat.value}
                    {stat.hasSuffix && (
                      <span className="text-capture-yellow">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="mt-1.5 text-xs text-[#8A9BB0]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* Rating Badge - matches reference exactly */}
            <div className="flex flex-wrap items-center justify-start gap-3 text-[13px] text-white/55">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-capture-yellow text-capture-yellow"
                  />
                ))}
              </div>
              <span>Rated by 50+ GoHighLevel clients worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}