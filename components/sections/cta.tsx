'use client'

import { Button } from '../ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-space-blue py-22 md:py-22"
      aria-labelledby="cta-h2"
    >
      {/* Background Elements - matches reference exactly */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orb - matches reference's blur circle */}
        <div className="absolute -right-30 -top-30 h-120 w-120 rounded-full bg-nurture-blue/7 blur-3xl" />
        
        {/* Grid Pattern Overlay - matches reference */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 155, 240, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 155, 240, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow - matches reference exactly */}
          <div className="eyebrow eyebrow-yellow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-capture-yellow" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-capture-yellow">
              Ready to Get Started?
            </span>
          </div>

          {/* Heading - matches reference exactly */}
          <h2 id="cta-h2" className="mb-3.5 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-white">
            Hire a <span className="text-capture-yellow">GoHighLevel Expert</span> Today Free Strategy Call
          </h2>

          {/* Description - matches reference exactly */}
          <p className="mb-9 text-[17px] leading-relaxed text-white/62">
            Tell us about your GHL project. Aryan personally reviews every inquiry and reaches out within a few hours no automated bots, no sales scripts. Just a real GoHighLevel specialist.
          </p>

          {/* CTA Buttons - matches reference exactly */}
          <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://www.ghlscaleup.com/contact"
                className="inline-flex items-center gap-2"
              >
                Book Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="mailto:aryan@ghlscaleup.com"
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email Aryan Directly
              </a>
            </Button>
          </div>

          {/* Trust Note - matches reference exactly */}
          <p className="mt-4.5 text-[13px] text-white/35">
            No pitch. No commitment. Just a 30-minute call with a GHL expert who has delivered 200+ projects.
          </p>
        </div>
      </div>
    </section>
  )
}