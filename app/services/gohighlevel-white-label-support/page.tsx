'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, Globe, Palette, CreditCard, Smartphone, Mail, Package, ArrowRight, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

// FAQ Component
interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What is GoHighLevel white label?',
    a: 'GoHighLevel white label means configuring GHL\'s SaaS mode so the entire platform runs under your brand — your logo, your domain, your colours. Your clients log in to what appears to be your software. They never see the GoHighLevel name anywhere in the interface, emails, or domain.',
  },
  {
    q: 'What is included in GoHighLevel white label support?',
    a: 'A complete setup includes: custom branded domain configuration, white-label login page design, Stripe rebilling so you charge clients directly, Twilio A2P 10DLC registration for SMS, Mailgun for email, custom CSS dashboard branding, and reusable sub-account snapshots so you can onboard new clients in minutes.',
  },
  {
    q: 'How much does GoHighLevel white label setup cost?',
    a: 'A complete GoHighLevel white label SaaS setup with our team costs $5,000 as a one-time fixed fee. This includes every technical component — custom domain, branded login, Stripe, Twilio, Mailgun, and custom snapshots. No hourly billing. You know the exact cost before we start.',
  },
  {
    q: 'How long does GoHighLevel SaaS mode setup take?',
    a: 'A complete GoHighLevel white label SaaS configuration typically takes 3–5 weeks. This includes domain verification, Stripe rebilling setup, Twilio A2P registration, Mailgun configuration, branded login page design, and building reusable industry-specific sub-account snapshots.',
  },
  {
    q: 'Do I need the GoHighLevel Agency Pro plan for white label?',
    a: 'Yes. GoHighLevel SaaS mode and white labeling requires the Agency Pro plan at $497/month. This plan provides unlimited sub-accounts, custom pricing for your clients, Stripe rebilling, and full platform white-labeling. We can help you choose the right plan and configure it correctly from day one.',
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

export default function WhiteLabelPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const configItems = [
    { icon: Globe, title: 'Custom Branded Domain', desc: 'app.yourbrand.com — clients never see GoHighLevel' },
    { icon: Palette, title: 'White-Label Login Page', desc: 'Your logo, brand colours, custom CSS' },
    { icon: CreditCard, title: 'Stripe Rebilling', desc: 'Charge clients directly under your brand' },
    { icon: Smartphone, title: 'Twilio + Mailgun Integration', desc: 'SMS and email under your sender identity' },
    { icon: Package, title: 'Sub-Account Snapshots', desc: 'Onboard new clients in minutes, not weeks' },
  ]

  const includedItems = [
    { icon: Globe, title: 'Custom White-Label Domain', desc: 'We configure your custom domain (e.g. app.yourbrand.com), set up DNS records, and verify SSL so clients access the platform through your URL — not GoHighLevel\'s.' },
    { icon: Palette, title: 'Branded Login Page & Custom CSS', desc: 'We design and implement a white-label login page with your logo, brand colours, and custom styling. Your clients see a polished SaaS product from the first click.' },
    { icon: CreditCard, title: 'Stripe Rebilling Configuration', desc: 'We connect your Stripe account to GHL\'s SaaS mode so you can charge clients directly with your own subscription plans. Payments go to your account — GHL charges you separately.' },
    { icon: Smartphone, title: 'Twilio A2P 10DLC Registration', desc: 'We set up and register your Twilio account for A2P 10DLC compliance so SMS messages send reliably from your brand\'s phone number — not a shared GoHighLevel pool.' },
    { icon: Mail, title: 'Mailgun Email Configuration', desc: 'We configure Mailgun for transactional email sending under your domain — so campaign and automation emails land in inboxes from your brand\'s email address, not GoHighLevel\'s.' },
    { icon: Package, title: 'Reusable Sub-Account Snapshots', desc: 'We build industry-specific snapshots containing pre-built pipelines, automations, funnels, and templates. Deploy a complete client sub-account in under 10 minutes.' },
  ]

  const steps = [
    { num: 1, title: 'Plan & Discover', desc: 'We map your target market, pricing model, and sub-account structure before touching a single setting.' },
    { num: 2, title: 'Domain & Branding', desc: 'Custom branded domain, DNS records, SSL, white-label login page, and custom CSS applied to your dashboard.' },
    { num: 3, title: 'Stripe + Twilio + Mailgun', desc: 'Stripe rebilling connected to your account. Twilio A2P 10DLC registered. Mailgun configured for email sending.' },
    { num: 4, title: 'Snapshots Built', desc: 'Industry-specific sub-account snapshots built so new clients onboard in minutes — not weeks of manual setup.' },
    { num: 5, title: 'Launch & Train', desc: 'Full system testing, team training, and documentation. Your first client can be onboarded the same day we hand over.' },
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
                GoHighLevel White Label Service
              </span>
              <h1 className="mb-5 text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white">
                GoHighLevel White Label Support —
                <span className="mt-2 block text-capture-yellow">Launch Your Own Branded SaaS.</span>
              </h1>
              <p className="mb-9 max-w-md text-[17px] leading-relaxed text-white/72">
                Stop sending clients to a platform that says "GoHighLevel." We configure GHL's SaaS mode so your clients log in to <em className="text-white">your</em> software — your brand, your domain, your pricing. We handle every technical step.
              </p>
              <div className="mb-9 flex flex-wrap gap-3.5">
                <Button variant="cta" size="lg" asChild>
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Start My White Label Setup →
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="#what-is-included">See What's Included</a>
                </Button>
              </div>
              <p className="text-[13px] text-white/45">
                ✦ 200+ GoHighLevel builds delivered · White-label SaaS launches in 3–5 weeks · Fixed price
              </p>
            </div>

            {/* Right Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-[34px] backdrop-blur-sm">
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-capture-yellow">
                What We Configure for Your White Label GHL
              </div>
              <div className="flex flex-col gap-3.5">
                {configItems.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="flex h-[34px] w-[34px] min-w-[34px] items-center justify-center rounded-lg bg-nurture-blue/15">
                        <Icon className="h-4 w-4 text-nurture-blue" />
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-white">{item.title}</div>
                        <div className="text-xs text-white/50">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is White Label Section */}
      <section className="bg-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
                GoHighLevel SaaS Mode
              </span>
              <h2 className="mb-3.5 text-[clamp(24px,2.8vw,36px)] font-extrabold leading-[1.22] tracking-[-0.02em] text-space-blue">
                What is <span className="text-nurture-blue">GoHighLevel White Label</span> and How Does It Work?
              </h2>
              <p className="mb-3 text-base leading-relaxed text-body">
                GoHighLevel white label means turning on GHL's SaaS mode and configuring the platform so it appears entirely under your brand. When clients log in, they see your company name, your logo, and your domain — not GoHighLevel's.
              </p>
              <p className="mb-3 text-base leading-relaxed text-body">
                This transforms your agency from a service provider into a software company. Instead of selling one-off projects, you sell monthly SaaS subscriptions to your own branded CRM platform. Your clients pay you recurring fees. You set the pricing. GoHighLevel powers it invisibly in the background.
              </p>
              <p className="mb-5 text-base leading-relaxed text-body">
                Setting it up correctly — Stripe rebilling, Twilio A2P registration, Mailgun, custom domain DNS, sub-account snapshots — is where most agencies get stuck. Our GHL expert team has completed multiple white-label SaaS builds and handles every technical step for you.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Clients see your brand — never the GoHighLevel name anywhere',
                  'You set your own pricing — charge $99–$999/month per client',
                  'Stripe collects payments directly into your account',
                  'Onboard new clients instantly using reusable snapshots',
                  'Build recurring SaaS revenue on top of your existing agency work',
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
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">100%</div>
                <div className="text-[13px] font-medium text-white/55">White-label — clients never see the GHL name</div>
              </div>
              <div className="rounded-xl border border-[#E8EDF4] bg-white p-7 shadow-sm">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">3–5wks</div>
                <div className="text-[13px] font-medium text-muted">Typical delivery for full SaaS mode launch</div>
              </div>
              <div className="rounded-xl border border-[#E8EDF4] bg-white p-7 shadow-sm">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-nurture-blue">∞</div>
                <div className="text-[13px] font-medium text-muted">Unlimited sub-accounts deploy in minutes with snapshots</div>
              </div>
              <div className="rounded-xl bg-space-blue p-7">
                <div className="mb-1.5 text-[36px] font-extrabold leading-none text-capture-yellow">MRR</div>
                <div className="text-[13px] font-medium text-white/55">Move from project fees to monthly recurring SaaS revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-space-blue py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-capture-yellow/12 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-capture-yellow">
              Our Setup Process
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
              How We Set Up Your GoHighLevel White Label SaaS — Step by Step
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              Every white label GHL build follows the same proven 5-step process — from domain configuration to your first client onboarding.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {/* Connecting Line */}
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-0.5 bg-gradient-to-r from-capture-yellow to-close-green opacity-20 lg:block" />

            {steps.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-18 w-18 items-center justify-center rounded-full border-2 border-capture-yellow bg-white/5">
                  <span className="text-2xl font-extrabold text-capture-yellow">{step.num}</span>
                </div>
                <h3 className="mb-1.5 text-[13px] font-bold text-white">{step.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="what-is-included" className="bg-off-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              What's Included
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              Everything Included in Your GoHighLevel White Label Setup
            </h2>
            <p className="text-base leading-relaxed text-body">
              One fixed price. Every technical component configured and tested — nothing left for you to figure out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <article
                  key={idx}
                  className="group relative overflow-hidden rounded-lg border border-[#E8EDF4] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-nurture-blue/20 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-capture-yellow to-close-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="mb-3.5 text-[28px]">
                    <Icon className="h-7 w-7 text-nurture-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-space-blue">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              Transparent Pricing
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GoHighLevel White Label Setup Pricing — One Fixed Fee
            </h2>
            <p className="text-base leading-relaxed text-body">
              One-time fixed price. You know exactly what you are paying and exactly what you are getting before we start.
            </p>
          </div>

          <div className="grid gap-12 rounded-2xl border border-[#E8EDF4] bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12 lg:gap-12">
            {/* Left Column */}
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.06em] text-muted">Complete White-Label GHL SaaS Setup</div>
              <div className="mb-1.5 text-[60px] font-extrabold leading-none text-space-blue">
                $5,000 <span className="text-[22px] font-normal text-muted">USD</span>
              </div>
              <div className="mb-7 text-sm text-muted">One-time setup fee · Delivered in 3–5 weeks · Fixed price, no surprises</div>
              <div className="mb-8 flex flex-col gap-3">
                {[
                  'Custom branded white-label domain setup',
                  'White-label login page + custom CSS branding',
                  'Stripe rebilling connected to your account',
                  'Twilio A2P 10DLC registration & setup',
                  'Mailgun email sender configuration',
                  'Up to 3 industry-specific sub-account snapshots',
                  'Full team training & handover documentation',
                  'End-to-end testing before launch',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-close-green">✓</span>
                    <span className="text-sm text-space-blue">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="lg" asChild className="w-full">
                <a href="#contact" className="inline-flex items-center justify-center gap-2">
                  Start My White Label Setup →
                </a>
              </Button>
            </div>

            {/* Right Column */}
            <div className="border-t border-[#E8EDF4] pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              <h3 className="mb-4 text-lg font-bold text-space-blue">Optional Add-Ons</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2.5 pb-3 border-b border-[#E8EDF4]">
                  <span className="mt-0.5 text-close-green">✓</span>
                  <div>
                    <strong className="text-space-blue">Additional snapshots</strong>
                    <p className="text-sm text-muted">$300 per additional industry snapshot</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pb-3 border-b border-[#E8EDF4]">
                  <span className="mt-0.5 text-close-green">✓</span>
                  <div>
                    <strong className="text-space-blue">Monthly GHL VA support</strong>
                    <p className="text-sm text-muted">Ongoing account management from $800/mo</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 pb-3 border-b border-[#E8EDF4]">
                  <span className="mt-0.5 text-close-green">✓</span>
                  <div>
                    <strong className="text-space-blue">Custom SaaS pricing page</strong>
                    <p className="text-sm text-muted">Branded plan selection page for new clients</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-close-green">✓</span>
                  <div>
                    <strong className="text-space-blue">CRM & automation build</strong>
                    <p className="text-sm text-muted">Add full GHL system build from $1,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-off-white py-20 md:py-22">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3.5 inline-block rounded-full bg-nurture-blue/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-nurture-blue">
              FAQ
            </span>
            <h2 className="mb-3 text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-space-blue">
              GoHighLevel White Label — Frequently Asked Questions
            </h2>
            <p className="text-base leading-relaxed text-body">
              Everything you need to know before launching your white-label GHL SaaS platform.
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
              Get Started Today
            </span>
            <h2 className="mb-3.5 text-[clamp(26px,3.5vw,42px)] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
              Ready to Launch Your <span className="text-capture-yellow">White-Label GoHighLevel Platform?</span>
            </h2>
            <p className="mb-9 text-[17px] leading-relaxed text-white/65">
              Tell us about your agency and what you want to brand. Aryan personally reviews every inquiry and responds within a few hours with a clear plan and timeline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Button variant="cta" size="lg" asChild>
                <a href="https://www.ghlscaleup.com/contact" className="inline-flex items-center gap-2">
                  Start My White Label Setup →
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:aryan@ghlscaleup.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
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