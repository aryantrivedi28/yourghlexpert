'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, Code, Zap, Database, BarChart, Wrench, Link, GraduationCap, ShoppingBag, CreditCard, Calendar, Mail as MailIcon, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// FAQ Component
interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What is a GoHighLevel developer?',
    a: 'A GoHighLevel developer is a technical specialist who builds advanced custom functionality inside and around GoHighLevel — custom API integrations, webhook development, custom code actions inside GHL workflows, Zapier and Make.com automation pipelines, third-party platform connections, and bespoke GHL applications that go beyond standard platform configuration.',
  },
  {
    q: 'What does a GHL developer build?',
    a: 'A GHL developer builds: custom API integrations connecting GoHighLevel to external platforms, webhook triggers and receivers for real-time data sync, custom JavaScript code actions inside GHL workflows, Zapier and Make.com multi-step automation pipelines, custom reporting dashboards, Stripe payment flows, Shopify-GHL integrations, and advanced CRM customization that requires technical implementation beyond standard GHL settings.',
  },
  {
    q: 'How much does it cost to hire a GoHighLevel developer?',
    a: 'GHL developer projects start at $500 for a single integration or custom build, and $1,500+ for more complex multi-integration projects. All projects are fixed-price — you receive a clear scope document with the exact cost before we start any development work. No hourly billing.',
  },
  {
    q: 'Can GoHighLevel integrate with my existing tools?',
    a: 'Yes. GoHighLevel can integrate with almost any external tool using native integrations, Zapier, Make.com, or custom API development. Our GHL developers connect GoHighLevel to Shopify, Stripe, HubSpot, Salesforce, Google Sheets, Calendly, Typeform, Slack, and hundreds of other tools via API and webhooks.',
  },
  {
    q: 'What is the difference between a GHL expert and a GHL developer?',
    a: 'A GHL expert configures GoHighLevel using its built-in features — pipelines, workflows, funnels, and automations. A GHL developer goes deeper — writing custom code, building API connections, and creating integrations that GHL cannot do natively. Most complex projects need both. Our team provides both GHL expert configuration and GHL developer capabilities under one roof.',
  },
]

function FAQItemComponent({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border transition-all duration-200',
        isOpen
          ? 'border-nurture-blue/30'
          : 'border-[#E8EDF4] hover:border-nurture-blue/20'
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <h3 className="text-[15px] font-semibold text-space-blue transition-colors hover:text-nurture-blue">
          {faq.q}
        </h3>
        <div
          className={cn(
            'flex h-7 w-7 min-w-7 items-center justify-center rounded-full transition-all duration-200',
            isOpen
              ? 'bg-nurture-blue text-white'
              : 'bg-nurture-blue/10 text-nurture-blue'
          )}
        >
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef}>
          <div className="border-t border-[#E8EDF4] px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4">
            <p className="text-[15px] leading-relaxed text-body">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GHLDeveloperPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const techPills = [
    'GoHighLevel API', 'Webhooks', 'Zapier', 'Make.com',
    'JavaScript', 'Stripe API', 'Twilio', 'Shopify API',
    'REST APIs', 'Custom Code Actions', 'n8n', 'Google Sheets API'
  ]

  const services = [
    { icon: Link, title: 'GoHighLevel API Integration Development', desc: 'Custom two-way API integrations connecting GoHighLevel to any external platform — Shopify, HubSpot, Salesforce, Calendly, Typeform, Google Sheets, or any REST API with documentation.' },
    { icon: Zap, title: 'Custom GoHighLevel Webhook Development', desc: 'Build, receive, and process webhook payloads between GoHighLevel and external systems. Real-time data sync, event-triggered workflows, and outbound webhook configurations.' },
    { icon: Code, title: 'Custom Code Actions in GHL Workflows', desc: 'Write custom JavaScript logic inside GoHighLevel workflow code actions — data transformation, API calls, conditional routing, and custom calculations that GHL\'s native actions cannot perform.' },
    { icon: Database, title: 'Zapier & Make.com GHL Automation Builds', desc: 'Complex multi-step automation pipelines using Zapier and Make.com with GoHighLevel as a trigger or action — connecting GHL to tools that do not have native GHL integrations.' },
    { icon: BarChart, title: 'Custom GoHighLevel Reporting & Dashboards', desc: 'Custom reporting dashboards that pull GoHighLevel data into Google Sheets, Looker Studio, or other BI tools. Automated report generation and custom pipeline performance exports.' },
    { icon: Wrench, title: 'GHL Integration Fixes & Debugging', desc: 'Broken Zapier zaps, failing webhooks, custom code actions throwing errors, API integrations returning unexpected data — we diagnose and fix GoHighLevel technical issues fast.' },
  ]

  const integrations = [
    { icon: '🛒', name: 'Shopify', desc: 'Order data, customer tags, abandoned cart triggers' },
    { icon: '💳', name: 'Stripe', desc: 'Payment events, subscription status, invoice webhooks' },
    { icon: '📋', name: 'Google Sheets', desc: 'Two-way sync, auto-reporting, lead import pipelines' },
    { icon: '📅', name: 'Calendly', desc: 'Booking events into GHL pipelines and contact records' },
    { icon: '📝', name: 'Typeform / JotForm', desc: 'Form submissions mapped to GHL contacts and pipelines' },
    { icon: '💬', name: 'Slack', desc: 'GHL pipeline events pushed to Slack channels and DMs' },
    { icon: '🤝', name: 'HubSpot / Salesforce', desc: 'CRM migration and live data sync between platforms' },
    { icon: '🎓', name: 'Kajabi / Teachable', desc: 'Course enrolment events synced to GHL CRM and tags' },
  ]

  const plans = [
    {
      tier: 'Single Integration',
      price: '500',
      note: 'One-time build · Delivered in 3–7 days',
      features: [
        'One API or webhook integration',
        'Zapier or Make.com automation build',
        'Custom code action in GHL workflow',
        'End-to-end testing included',
        'Documentation + handover',
      ],
      featured: false,
      ctaText: 'Start My Build →',
    },
    {
      tier: 'Custom Integration Suite',
      price: '1,500',
      note: 'One-time build · Delivered in 1–2 weeks',
      badge: 'Most Requested',
      features: [
        'Multiple API integrations or webhooks',
        'Complex Make.com / Zapier pipelines',
        'Custom GHL workflow code actions',
        'Custom reporting or data export build',
        'Full testing across all data flows',
        'Full documentation + team walkthrough',
      ],
      featured: true,
      ctaText: 'Book a Free Call →',
    },
    {
      tier: 'Ongoing GHL Development',
      price: '1,000',
      note: 'Monthly retainer · Cancel anytime',
      features: [
        'Dedicated GHL developer on retainer',
        'New integration builds each month',
        'Ongoing webhook and API maintenance',
        'Bug fixes and integration debugging',
        'Priority same-week turnaround',
      ],
      featured: false,
      ctaText: 'Get Started →',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-space-blue pt-32 pb-20 lg:pt-[100px] lg:pb-22">
        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(14, 155, 240, 0.08) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-capture-yellow" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_400px] lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="mb-3.5 inline-block rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
                GHL Developer Service
              </span>
              <h1 className="mb-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
                Hire a GoHighLevel Developer
                <span className="mt-2 block text-capture-yellow">for Custom Builds & Integrations.</span>
              </h1>
              <p className="mb-9 max-w-md text-[17px] leading-relaxed text-white/72">
                When standard GoHighLevel configuration is not enough, you need a GHL developer. We build custom API integrations, webhook connections, code actions, and advanced automation pipelines that extend what GoHighLevel can do natively.
              </p>
              <div className="mb-9 flex flex-wrap gap-3.5">
                <Button variant="cta" size="lg" asChild>
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Discuss My GHL Project →
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="#services">See What We Build</a>
                </Button>
              </div>
              <p className="text-[13px] text-white/45">
                ✦ 200+ GoHighLevel projects delivered · API & webhook specialists · Fixed-price development
              </p>
            </div>

            {/* Right Card - Tech Pills */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-[34px] backdrop-blur-sm">
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-capture-yellow">
                Technologies Our GHL Developers Work With
              </div>
              <div className="flex flex-wrap gap-2.5">
                {techPills.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-nurture-blue/20 bg-nurture-blue/15 px-3.5 py-2 text-[13px] font-semibold text-white/85"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GHL Developer Section */}
      <section id="what-ghl-developer-builds" className="bg-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                GoHighLevel Developer
              </span>
              <h2 className="mb-3.5 text-[clamp(24px,2.8vw,36px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-space-blue">
                What Does a <span className="text-nurture-blue">GoHighLevel Developer</span> Build That a Regular Setup Cannot?
              </h2>
              <p className="mb-3 text-base leading-relaxed text-body">
                Most GHL agencies configure what already exists inside the platform. A GHL developer goes a layer deeper — writing code, building API connections, and creating custom logic that the standard GoHighLevel interface cannot handle.
              </p>
              <p className="mb-5 text-base leading-relaxed text-body">
                If you have ever tried to connect GoHighLevel to a tool that does not have a native integration, or needed a workflow to do something GHL does not support out of the box — that is where our GoHighLevel developers come in.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Custom API integrations connecting GHL to any external platform',
                  'Webhook development for real-time data sync between systems',
                  'Custom code actions inside GoHighLevel workflows (JavaScript)',
                  'Zapier and Make.com multi-step automation pipelines',
                  'Custom GoHighLevel reporting dashboards and data exports',
                  'Advanced Stripe payment flows and subscription logic',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-5.5 w-5.5 min-w-5.5 items-center justify-center rounded-full bg-green-100 text-close-green">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-[15px] text-space-blue">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-space-blue p-7">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">API</div>
                <div className="text-[13px] font-medium text-white/55">GoHighLevel API & webhook integration specialists</div>
              </div>
              <div className="rounded-xl border border-[#E8EDF4] bg-white p-7 shadow-sm">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">200+</div>
                <div className="text-[13px] font-medium text-muted">GoHighLevel projects delivered including custom builds</div>
              </div>
              <div className="rounded-xl border border-[#E8EDF4] bg-white p-7 shadow-sm">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">Fix</div>
                <div className="text-[13px] font-medium text-muted">We fix broken integrations, failing webhooks, and broken custom code</div>
              </div>
              <div className="rounded-xl bg-space-blue p-7">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">Fast</div>
                <div className="text-[13px] font-medium text-white/55">Most integrations delivered within 1–2 weeks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-off-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              GHL Developer Services
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GoHighLevel Developer Services We Provide
            </h2>
            <p className="text-base leading-relaxed text-body">
              Every build is scoped, fixed-price, and delivered by a GoHighLevel developer who has built the same thing before — not experimenting on your project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <article
                  key={idx}
                  className="group relative overflow-hidden rounded-lg border border-[#E8EDF4] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-nurture-blue/20 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-nurture-blue to-capture-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="mb-3.5 text-[28px]">
                    <Icon className="h-7 w-7 text-nurture-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-space-blue">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{service.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-space-blue py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
              Platform Integrations
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
              GoHighLevel Integrations Our Developers Build
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              If it has an API, our GHL developers can connect it to GoHighLevel. Here are the most common platforms we integrate.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:bg-white/10 hover:border-nurture-blue/30 hover:-translate-y-1"
              >
                <div className="mb-2 text-[28px]">{integration.icon}</div>
                <div className="mb-1 text-[13px] font-semibold text-white">{integration.name}</div>
                <div className="text-[11px] leading-relaxed text-white/45">{integration.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GHL Expert vs GHL Developer Comparison Table */}
      <section className="bg-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              Understanding the Difference
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GHL Expert vs. GHL Developer — What Do You Need?
            </h2>
            <p className="text-base leading-relaxed text-body">
              Both roles work inside GoHighLevel — but at different levels of the platform. Here is how to know which one your project requires.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#E8EDF4] shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-space-blue">
                  <th className="px-6 py-4 text-left text-sm font-bold text-capture-yellow">Task</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-capture-yellow">GHL Expert</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-capture-yellow">GHL Developer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { task: 'CRM setup, pipelines, and lead stages', expert: true, dev: false },
                  { task: 'Standard workflow and automation builds', expert: true, dev: false },
                  { task: 'Funnel and landing page creation', expert: true, dev: false },
                  { task: 'Connecting GHL to Shopify, Stripe, or any API', expert: false, dev: true },
                  { task: 'Building webhook receivers and API endpoints', expert: false, dev: true },
                  { task: 'Custom JavaScript code actions in workflows', expert: false, dev: true },
                  { task: 'Multi-step Zapier / Make.com pipelines', expert: false, dev: true },
                  { task: 'Custom GoHighLevel reporting dashboards', expert: false, dev: true },
                  { task: 'White-label SaaS setup', expert: true, dev: true },
                ].map((row, idx) => (
                  <tr key={idx} className={cn('border-b border-[#E8EDF4]', idx % 2 === 1 && 'bg-off-white')}>
                    <td className="px-6 py-4 text-sm text-body">{row.task}</td>
                    <td className="px-6 py-4 text-sm">
                      {row.expert ? <span className="font-semibold text-close-green">✓ Yes</span> : <span className="text-muted">— Not needed</span>}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {row.dev ? <span className="font-semibold text-close-green">✓ Yes</span> : <span className="text-muted">— Not needed</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-center text-sm text-muted">
            Most complex projects need both. Our team provides both GHL expert configuration and GHL developer work under one roof.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-off-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              Developer Pricing
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GoHighLevel Developer Pricing — Fixed. No Hourly Rate.
            </h2>
            <p className="text-base leading-relaxed text-body">
              Every GHL development project is scoped and fixed-price. You know what you are paying before any work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 items-start md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl border-[1.5px] transition-all duration-300 ${
                  plan.featured
                    ? 'border-capture-yellow bg-space-blue md:scale-[1.02]'
                    : 'border-[#E8EDF4] bg-white hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-capture-yellow px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.06em] text-space-blue whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <div className={`mb-2 text-xs font-bold uppercase tracking-[0.06em] ${
                    plan.featured ? 'text-white/50' : 'text-muted'
                  }`}>
                    {plan.tier}
                  </div>
                  <div className={`mb-1 text-[42px] font-extrabold leading-none ${
                    plan.featured ? 'text-white' : 'text-space-blue'
                  }`}>
                    ${plan.price} <span className="text-base font-normal text-muted">{plan.price === '1,000' ? '/mo' : '+'}</span>
                  </div>
                  <div className={`mb-5 text-sm ${
                    plan.featured ? 'text-white/60' : 'text-muted'
                  }`}>
                    {plan.note}
                  </div>
                  <div className={`mb-5 h-px ${
                    plan.featured ? 'bg-white/10' : 'bg-[#E8EDF4]'
                  }`} />
                  <div className="mb-6 flex flex-col gap-2.5">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-close-green">✓</span>
                        <span className={`text-sm ${
                          plan.featured ? 'text-white/85' : 'text-space-blue'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
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

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              FAQ
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GoHighLevel Developer — Frequently Asked Questions
            </h2>
            <p className="text-base leading-relaxed text-body">
              Everything you need to know before hiring a GHL developer for your custom build or integration.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, idx) => (
                <FAQItemComponent
                  key={idx}
                  faq={faq}
                  isOpen={openFaqIndex === idx}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative overflow-hidden bg-space-blue py-20 md:py-22">
        <div className="absolute top-0 left-0 right-0 h-1 bg-capture-yellow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-5 inline-block rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
              Start Your GHL Build
            </span>
            <h2 className="mb-3.5 text-[clamp(26px,3.5vw,42px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
              Ready to <span className="text-capture-yellow">Hire a GoHighLevel Developer?</span>
            </h2>
            <p className="mb-9 text-[17px] leading-relaxed text-white/65">
              Tell us what you need built. Aryan reviews every inquiry personally and responds within a few hours with a clear plan and fixed-price quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Button variant="cta" size="lg" asChild>
                <a href="https://www.ghlscaleup.com/contact" className="inline-flex items-center gap-2">
                  Discuss My GHL Project →
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:aryan@ghlscaleup.com" className="inline-flex items-center gap-2">
                  <MailIcon className="h-4 w-4" />
                  aryan@ghlscaleup.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}