'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/button'

export function PricingSection() {
  const plans = [
    {
      tier: 'Starter GHL Build',
      price: '1,500',
      note: 'One-time setup · Delivered in 2 weeks',
      features: [
        'CRM setup with 1–2 pipelines',
        '5–7 core automation workflows',
        'Speed-to-lead SMS + email sequence',
        'Appointment reminder automation',
        'Team training & handover',
      ],
      featured: false,
      ctaText: 'Get Started →',
    },
    {
      tier: 'Full GHL System',
      price: '3,000',
      note: 'One-time setup · Delivered in 3–4 weeks',
      badge: 'Most Popular',
      features: [
        'Full CRM with unlimited pipelines',
        '15+ automation workflows',
        'AI voice agent or chatbot setup',
        'Funnel or landing page build',
        'Third-party integrations (Stripe, Zapier, etc.)',
        'Full training + documentation',
      ],
      featured: true,
      ctaText: 'Book a Call →',
    },
    {
      tier: 'White-Label GHL SaaS',
      price: '5,000',
      note: 'One-time setup · Delivered in 4–5 weeks',
      features: [
        'Full GHL SaaS mode configuration',
        'Custom branded domain + login page',
        'Stripe rebilling + Twilio + Mailgun',
        'Reusable sub-account snapshots',
        'Complete CRM + pipeline setup',
        'Team training + system docs',
      ],
      featured: false,
      ctaText: 'Get Started →',
    },
  ]

  return (
    <section className="bg-white py-20 md:py-22" id="pricing" aria-labelledby="price-h2">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
              Transparent Pricing
            </span>
          </div>
          <h2 id="price-h2" className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue">
            GoHighLevel Expert Service Pricing
          </h2>
          <p className="text-base leading-relaxed text-body">
            Fixed-price projects only. You know exactly what you are getting and exactly what you are paying before we start anything.
          </p>
        </div>

        {/* Pricing Grid - matches reference exactly */}
        <div className="grid grid-cols-1 gap-5.5 items-start md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl border-[1.5px] transition-all duration-300 ${
                plan.featured
                  ? 'border-capture-yellow bg-space-blue md:scale-[1.04]'
                  : 'border-[#E8EDF4] bg-white hover:shadow-md'
              }`}
            >
              {/* Badge - matches reference exactly */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-capture-yellow px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.06em] text-space-blue whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="p-[34px]">
                {/* Tier */}
                <div className={`mb-2 text-[11px] font-bold uppercase tracking-[0.06em] ${
                  plan.featured ? 'text-white/50' : 'text-muted'
                }`}>
                  {plan.tier}
                </div>

                {/* Price */}
                <div className={`mb-1 text-[46px] font-extrabold leading-none ${
                  plan.featured ? 'text-white' : 'text-space-blue'
                }`}>
                  ${plan.price}
                  <span className={`text-lg font-normal ${
                    plan.featured ? 'text-white/60' : 'text-muted'
                  }`}>
                    {' '}USD
                  </span>
                </div>

                {/* Note */}
                <div className={`mb-6 text-[13px] ${
                  plan.featured ? 'text-white/60' : 'text-muted'
                }`}>
                  {plan.note}
                </div>

                {/* Divider */}
                <div className={`mb-5.5 h-px ${
                  plan.featured ? 'bg-white/10' : 'bg-[#E8EDF4]'
                }`} />

                {/* Features */}
                <div className="mb-7 flex flex-col gap-2.5">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${
                        plan.featured ? 'text-close-green' : 'text-close-green'
                      }`} />
                      <span className={`text-sm ${
                        plan.featured ? 'text-white/82' : 'text-space-blue'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.featured ? 'cta' : 'outline'}
                  className="w-full justify-center"
                  asChild
                >
                  <a href="#contact">{plan.ctaText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}