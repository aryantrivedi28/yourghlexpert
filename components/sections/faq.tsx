'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What is a GoHighLevel expert?',
    a: 'A GoHighLevel expert is a specialist who configures, builds, and manages complete GHL systems — CRM setup, pipeline architecture, workflow automation, AI voice agents, funnel creation, white-label SaaS configuration, and third-party integrations. A real GHL expert has delivered multiple end-to-end projects and builds systems that run without manual intervention from your team.',
  },
  {
    q: 'What does a GHL expert do day-to-day?',
    a: 'A GHL expert builds and manages GoHighLevel systems — configuring CRM pipelines, designing automation workflows, setting up AI chatbots and voice agents, building landing pages and funnels, connecting third-party tools like Stripe, Zapier, and Shopify, and training your team on how to use everything. If you hire a GHL expert on a retainer, they manage all ongoing system optimisation, new workflow builds, and campaign support.',
  },
  {
    q: 'How much does it cost to hire a GoHighLevel expert?',
    a: 'Hiring a GoHighLevel expert typically costs $1,500–$5,000 for a complete one-time system build, depending on scope. Standard CRM and automation builds start at $1,500. White-label GHL SaaS configurations are priced higher based on complexity. All our projects are fixed-price — no hourly billing, no open-ended retainers. You receive a detailed scope document with exact cost before anything starts.',
  },
  {
    q: 'How long does a GoHighLevel setup take?',
    a: 'A standard GoHighLevel CRM setup with pipelines and core automations takes 2–3 weeks. A full white-label GHL SaaS build with Stripe rebilling, Twilio, Mailgun, and custom branded domain takes 3–5 weeks. Simple workflow fixes, single integrations, or GHL calendar setup can be done in 2–5 business days.',
  },
  {
    q: 'What is GoHighLevel white label support?',
    a: 'GoHighLevel white label support means configuring GHL SaaS mode so the entire platform appears completely under your brand — your logo, your domain, your colour scheme. Your clients never see the GoHighLevel name. This involves setting up a custom branded login page, connecting your domain, enabling Stripe rebilling so you collect payments directly, configuring Twilio and Mailgun, and creating reusable sub-account snapshots for fast client onboarding.',
  },
  {
    q: 'What is a GoHighLevel virtual assistant (GHL VA)?',
    a: 'A GHL virtual assistant is a remote specialist dedicated to managing your GoHighLevel account on an ongoing basis — building new workflows, managing pipeline movements, running email and SMS campaigns, responding in the unified inbox, and keeping your CRM clean and optimised. Unlike a general virtual assistant who knows GHL as one of many tools, a GHL VA works exclusively inside GoHighLevel every day.',
  },
  {
    q: 'Can you migrate from HubSpot or another CRM to GoHighLevel?',
    a: 'Yes. We handle full GoHighLevel migrations from HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, Mailchimp, Kajabi, ClickFunnels, Kartra, and Keap. A standard GHL migration includes exporting contacts, custom fields, tags, and pipeline data — mapping everything correctly inside GoHighLevel — rebuilding automations, and running a full team training session on the new system. Most migrations take 2–4 weeks.',
  },
  {
    q: 'Do I need an existing GoHighLevel account to get started?',
    a: 'No. If you do not have a GoHighLevel account, we help you choose the right plan (Starter at $97/month, Unlimited at $297/month, or SaaS Pro at $497/month) and configure it from scratch. If you already have an account — even one that has been sitting unused for months — we audit what is there, identify what needs rebuilding, and deliver a complete working system.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
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
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-[22px] sm:py-[18px]"
        aria-expanded={isOpen}
      >
        <h3 className="text-[15px] font-semibold text-space-blue transition-colors hover:text-nurture-blue">
          {faq.q}
        </h3>
        <div
          className={cn(
            'flex h-6.5 w-6.5 min-w-6.5 items-center justify-center rounded-full transition-all duration-200',
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

      {/* Answer with smooth height animation */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? height : 0 }}
      >
        <div ref={contentRef}>
          <div className="border-t border-[#E8EDF4] px-5 pb-4 pt-3.5 sm:px-[22px] sm:pb-[18px] sm:pt-3.5">
            <p className="text-[15px] leading-relaxed text-body">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  // Changed from 0 to null - now all FAQs start closed
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-off-white py-20 md:py-22"
      aria-labelledby="faq-h2"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
              FAQ
            </span>
          </div>
          <h2 id="faq-h2" className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue">
            GoHighLevel Expert — <span className="text-nurture-blue">Questions We Get Every Day</span>
          </h2>
          <p className="text-base leading-relaxed text-body">
            Everything you need to know about hiring a GHL expert, GHL VA services, and what the process looks like.
          </p>
        </div>

        {/* FAQ List - matches reference exactly */}
        <div className="mx-auto max-w-[760px]">
          <div className="flex flex-col gap-2.5">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}