'use client'

import { FolderOpen, Zap, Tag, User, Target, RefreshCw, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: FolderOpen,
      title: 'GoHighLevel CRM Setup & Pipeline Configuration',
      description: 'Full CRM architecture mapped to your actual sales process. Custom pipelines, opportunity stages, lead source tracking, smart lists, and tag strategy built clean, not from a generic snapshot.',
      link: '/ghl-crm-setup/',
    },
    {
      icon: Zap,
      title: 'GHL Workflow Automation & Speed-to-Lead',
      description: 'Automation workflows that respond to new leads in under 10 seconds SMS, email, WhatsApp, and internal Slack alerts. No-show reduction campaigns, review requests, and 30-day nurture sequences built in.',
      link: '/ghl-automation/',
    },
    {
      icon: Tag,
      title: 'GoHighLevel White Label Support & SaaS Mode',
      description: 'Launch your own branded SaaS on GHL. We configure SaaS mode, custom branded domain, Stripe rebilling, Twilio, Mailgun, and reusable sub-account snapshots so your clients see your brand, not GoHighLevel\'s.',
      link: '/gohighlevel-white-label-support/',
    },
    {
      icon: User,
      title: 'GoHighLevel Virtual Assistant (GHL VA)',
      description: 'Need ongoing GHL support? Our dedicated GHL virtual assistants manage your account daily building workflows, running campaigns, managing pipelines, and keeping your system optimised month after month.',
      link: '/ghl-virtual-assistant/',
    },
    {
      icon: Target,
      title: 'GoHighLevel Funnel Builder & Landing Pages',
      description: 'High-converting landing pages and multi-step funnels built natively inside GoHighLevel mobile-first, direct response focused, and connected directly to your CRM pipeline and calendar booking system.',
      link: '/ghl-funnel-builder/',
    },
    {
      icon: RefreshCw,
      title: 'GoHighLevel Migration Service',
      description: 'Moving from HubSpot, ActiveCampaign, Kajabi, ClickFunnels, Keap, or Zoho? We handle the full GHL migration contacts, custom fields, pipelines, automations, and team training with zero data loss.',
      link: '/gohighlevel-migration/',
    },
  ]

  return (
    <section className="bg-off-white py-20 md:py-22" id="ghl-services" aria-labelledby="svc-h2">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
              GHL Expert Services
            </span>
          </div>
          <h2 id="svc-h2" className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue">
            GoHighLevel Expert Services We Offer
          </h2>
          <p className="text-base leading-relaxed text-body">
            Every service is delivered by a dedicated GHL expert fixed scope, fixed price, clear timeline before we start.
          </p>
        </div>

        {/* Services Grid - matches reference 3 column layout */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-[#E8EDF4] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-nurture-blue/20 hover:shadow-lg"
              >
                {/* Top border gradient on hover - matches reference exactly */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-nurture-blue to-close-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon - matches reference exactly */}
                <div className="mb-4.5 flex h-12.5 w-12.5 items-center justify-center rounded-lg bg-nurture-blue/10">
                  <Icon className="h-5.5 w-5.5 text-nurture-blue" />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-base font-bold text-space-blue">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-body">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1 text-[13px] font-bold text-nurture-blue transition-all duration-200 hover:gap-2"
                >
                  Learn more
                  <ArrowRight className="h-3 w-3" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}