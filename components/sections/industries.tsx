'use client'

import { Building2, Home, Wrench, Code, BookOpen, Scale, Heart, Zap } from 'lucide-react'

export function IndustriesSection() {
  const industries = [
    { icon: Building2, title: 'Marketing Agencies', description: 'White-label GHL SaaS + client delivery systems' },
    { icon: Home, title: 'Real Estate', description: 'Multi-location CRM, lead capture & follow-up' },
    { icon: Wrench, title: 'Home Services', description: 'AI call handling, job booking & reminders' },
    { icon: Code, title: 'SaaS Founders', description: 'Full GHL SaaS mode & sub-account onboarding' },
    { icon: BookOpen, title: 'Coaches & Consultants', description: 'Funnels, booking calendars & nurture sequences' },
    { icon: Scale, title: 'Legal & Finance', description: 'Client intake, qualification & follow-up automation' },
    { icon: Heart, title: 'Healthcare & Wellness', description: 'Patient booking, reminders & reputation management' },
    { icon: Zap, title: 'Energy & Utilities', description: 'Multi-vertical pipelines & automated reporting' },
  ]

  return (
    <section className="py-20 md:py-22 bg-off-white" aria-labelledby="ind-h2">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
              Industries
            </span>
          </div>
          <h2 className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue" id="ind-h2">
            Your GoHighLevel Expert for Every Industry
          </h2>
          <p className="text-base leading-relaxed text-dark-gray">
            We have delivered GHL systems for lead-driven businesses across 8+ industries. If your revenue depends on leads and follow-ups, we have built this before.
          </p>
        </div>

        {/* Industries Grid - matches reference 4 column layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, idx) => {
            const Icon = industry.icon
            return (
              <div
                key={idx}
                className="group rounded-lg border border-[#E8EDF4] bg-white p-[22px] text-center transition-all duration-200 hover:border-nurture-blue hover:shadow-sm"
              >
                <div className="mb-3 flex justify-center">
                  <Icon className="h-7 w-7 text-space-blue transition-colors group-hover:text-nurture-blue" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-space-blue">
                  {industry.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}