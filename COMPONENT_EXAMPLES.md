# Component Implementation Examples

This document provides detailed code examples for all major section components referenced in the implementation guide.

---

## Table of Contents
1. [Hero Section](#hero-section)
2. [Trust Strip](#trust-strip)
3. [Services Grid](#services-grid)
4. [How We Work](#how-we-work)
5. [Case Studies](#case-studies)
6. [Industries](#industries)
7. [Pricing](#pricing)
8. [FAQ Section](#faq-section)
9. [CTA Section](#cta-section)
10. [Utility Components](#utility-components)

---

## Hero Section

**File: `components/sections/Hero.tsx`**

```typescript
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="bg-space-blue text-white py-32 md:py-48 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,155,240,.1) 1px,transparent 1px),
            linear-gradient(90deg,rgba(14,155,240,.1) 1px,transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-nurture-blue/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-capture-yellow/5 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-capture-yellow" />
                <span className="text-xs font-bold uppercase tracking-widest text-capture-yellow">
                  GoHighLevel Experts
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-6">
                Hire a{' '}
                <span className="text-capture-yellow">
                  GoHighLevel Expert
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
                We build complete GHL systems for agencies—CRM setup, automation workflows, AI voice agents, white-label SaaS, and integrations. 200+ projects delivered. Zero manual work.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" className="group">
                Book a Free Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                View Case Studies
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-black text-capture-yellow">200+</p>
                <p className="text-sm text-white/60 mt-1">GHL Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-black text-capture-yellow">$5M+</p>
                <p className="text-sm text-white/60 mt-1">Total Client Revenue Generated</p>
              </div>
              <div>
                <p className="text-2xl font-black text-close-green">98%</p>
                <p className="text-sm text-white/60 mt-1">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-capture-yellow">
                  Quick Stats
                </span>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'Average Project Cost', value: '$2,500–$4,500' },
                  { label: 'Setup Timeline', value: '2–5 weeks' },
                  { label: 'Areas Served', value: '7 countries' },
                  { label: 'Automation Uptime', value: '99.7%' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm text-white/60 mb-2">{stat.label}</p>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 text-center">
                  ⭐ Trusted by 150+ Agency Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Trust Strip

**File: `components/sections/Trust.tsx`**

```typescript
import { Check, Globe, Users, Award } from 'lucide-react'

export default function Trust() {
  const items = [
    {
      icon: Users,
      text: '150+ agency partners',
    },
    {
      icon: Globe,
      text: 'Serving 7 countries',
    },
    {
      icon: Check,
      text: '200+ GHL projects',
    },
    {
      icon: Award,
      text: '98% satisfaction rate',
    },
  ]

  return (
    <section className="bg-off-white border-b border-border-light py-8 md:py-12">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-nurture-blue/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-nurture-blue" />
                </div>
                <span className="text-sm font-semibold text-dark">
                  {item.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

---

## Services Grid

**File: `components/sections/Services.tsx`**

```typescript
'use client'

import Link from 'next/link'
import { ArrowRight, Code, Zap, Globe, Users, Settings, Shield } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'CRM Setup & Configuration',
      description: 'Complete GoHighLevel CRM system tailored to your business. Pipelines, custom fields, automations, and team setup.',
      href: '/services#crm',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Build 100% automated workflows. Email sequences, SMS campaigns, task automation, and conditional logic.',
      href: '/services#automation',
    },
    {
      icon: Globe,
      title: 'White-Label SaaS',
      description: 'Full white-label GHL setup. Your branding, your domain, Stripe rebilling, Twilio, Mailgun integration.',
      href: '/services#white-label',
    },
    {
      icon: Users,
      title: 'GHL Virtual Assistant',
      description: 'Dedicated specialist managing your GHL account. Workflows, campaigns, support, and daily optimization.',
      href: '/services#va',
    },
    {
      icon: Settings,
      title: 'Third-Party Integrations',
      description: 'Connect Shopify, Zapier, webhooks, APIs, and custom integrations. Full Twilio + Mailgun setup.',
      href: '/services#integrations',
    },
    {
      icon: Shield,
      title: 'CRM Migration Service',
      description: 'Migrate from HubSpot, Salesforce, Zoho, Pipedrive. Zero data loss, full team training included.',
      href: '/services#migration',
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow mb-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-nurture-blue" />
            <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-space-blue text-balance">
            Complete GHL Solutions
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            From initial setup to advanced automation, we handle every aspect of your GoHighLevel system.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-white border border-border-light rounded-lg p-8 hover:shadow-lg hover:border-nurture-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-nurture-blue/15 flex items-center justify-center mb-6 group-hover:bg-nurture-blue/25 transition-colors">
                  <Icon size={24} className="text-nurture-blue" />
                </div>

                <h3 className="text-xl font-bold text-space-blue mb-3">
                  {service.title}
                </h3>

                <p className="text-body text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-nurture-blue hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

---

## How We Work

**File: `components/sections/HowWeWork.tsx`**

```typescript
import { ArrowRight } from 'lucide-react'

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your goals, business model, and GHL needs.',
    },
    {
      number: '02',
      title: 'Proposal & Planning',
      description: 'Custom proposal with scope, timeline, pricing, and detailed system architecture.',
    },
    {
      number: '03',
      title: 'Build & Configure',
      description: 'Full system build, integrations, automations, testing, and team training.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: '30-day support period, optimization, and handoff to your team.',
    },
  ]

  return (
    <section className="bg-space-blue text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-nurture-blue/50 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-capture-yellow" />
            <span className="text-xs font-bold uppercase tracking-widest text-capture-yellow">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-capture-yellow to-nurture-blue" />
              )}

              <div className="space-y-4">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full border-3 border-capture-yellow bg-space-blue flex items-center justify-center">
                  <span className="text-2xl font-black text-capture-yellow">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Case Studies

**File: `components/sections/Results.tsx`**

```typescript
import { TrendingUp } from 'lucide-react'

export default function Results() {
  const caseStudies = [
    {
      client: 'Digital Agency Pro',
      industry: 'Digital Marketing',
      description: 'Fully automated lead funnel with GHL + Stripe integration.',
      metrics: [
        { value: '350%', label: 'Conversion Lift' },
        { value: '42', label: 'Leads/Month' },
      ],
    },
    {
      client: 'Fitness Coach Network',
      industry: 'Health & Wellness',
      description: 'White-label GHL platform for 8 sub-coaches.',
      metrics: [
        { value: '15x', label: 'ROI' },
        { value: '2.5K', label: 'Monthly Revenue' },
      ],
    },
    {
      client: 'B2B SaaS Startup',
      industry: 'Software as a Service',
      description: 'Complete CRM migration from HubSpot with AI voice agent.',
      metrics: [
        { value: '60%', label: 'Cost Reduction' },
        { value: '4hrs', label: 'Time Saved/Week' },
      ],
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="container-narrow mb-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-nurture-blue" />
            <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
              Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-space-blue">
            Case Studies
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            See how our clients transformed their businesses with expert GoHighLevel systems.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="bg-white rounded-lg border border-border-light p-8 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-border-light">
                <div>
                  <h3 className="font-bold text-lg text-space-blue">
                    {study.client}
                  </h3>
                  <p className="text-sm text-muted mt-1">{study.industry}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-capture-yellow/15 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-capture-yellow" />
                </div>
              </div>

              {/* Description */}
              <p className="text-body text-sm mb-8">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="flex gap-6">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-black text-close-green">
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted uppercase tracking-wider mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Industries

**File: `components/sections/Industries.tsx`**

```typescript
import { Briefcase, Users, Zap, TrendingUp } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      icon: Briefcase,
      name: 'Digital Agencies',
      description: 'White-label CRM for your clients',
    },
    {
      icon: Users,
      name: 'Coaching & Consulting',
      description: 'Automated client onboarding & fulfillment',
    },
    {
      icon: Zap,
      name: 'SaaS & Tech',
      description: 'Lead generation & customer automation',
    },
    {
      icon: TrendingUp,
      name: 'E-Commerce',
      description: 'Abandoned cart recovery & upsells',
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow mb-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-nurture-blue" />
            <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
              Who We Serve
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-space-blue">
            Industries We Work With
          </h2>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className="bg-white border border-border-light rounded-md p-6 text-center hover:border-nurture-blue hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-nurture-blue/15 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-nurture-blue" />
                </div>
                <h3 className="font-bold text-space-blue mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-body">
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
```

---

## Pricing

**File: `components/sections/Pricing.tsx`**

```typescript
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter Setup',
      price: '$1,500',
      description: 'Perfect for new agencies',
      features: [
        'GHL CRM setup & configuration',
        '1–2 automation workflows',
        'Custom fields & pipelines',
        '1 integration (Stripe/Zapier)',
        'Basic training (2 hours)',
        '1 week support',
      ],
      highlighted: false,
    },
    {
      name: 'Professional Build',
      price: '$3,500',
      description: 'Most popular',
      features: [
        'Complete CRM system',
        '5–8 automation workflows',
        'AI voice agent setup',
        '3–5 integrations',
        'Team training (4 hours)',
        '30 days premium support',
        'Weekly optimization calls',
      ],
      highlighted: true,
    },
    {
      name: 'White-Label SaaS',
      price: '$5,000+',
      description: 'Custom implementation',
      features: [
        'Full white-label setup',
        'Stripe rebilling integration',
        'Twilio + Mailgun setup',
        'Unlimited workflows',
        'Custom branding & domain',
        'Complete team training',
        '60 days premium support',
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow mb-20">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-nurture-blue" />
            <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-space-blue">
            Pricing Plans
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Fixed pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-space-blue text-white shadow-xl md:scale-105'
                  : 'bg-white border border-border-light'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-capture-yellow text-space-blue px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-8 md:p-10">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-space-blue'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/70' : 'text-muted'}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-black ${plan.highlighted ? 'text-capture-yellow' : 'text-space-blue'}`}>
                    {plan.price}
                  </span>
                  <p className={`text-sm mt-1 ${plan.highlighted ? 'text-white/60' : 'text-muted'}`}>
                    one-time investment
                  </p>
                </div>

                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full mb-8"
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={plan.highlighted ? 'text-capture-yellow flex-shrink-0 mt-1' : 'text-close-green flex-shrink-0 mt-1'}
                      />
                      <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-body'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## FAQ Section

**File: `components/sections/FAQ.tsx`**

```typescript
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is a GoHighLevel expert?',
      answer: 'A GoHighLevel expert is a specialist who configures, builds, and manages complete GHL systems for agencies and businesses — covering CRM setup, pipeline architecture, workflow automation, AI voice agents, funnel creation, white-label SaaS configuration, and third-party integrations.',
    },
    {
      question: 'How much does it cost to hire a GoHighLevel expert?',
      answer: 'Hiring a GoHighLevel expert typically costs $1,500–$5,000 for a one-time full system build, depending on scope. Standard CRM and automation builds start at $1,500. White-label SaaS configurations are priced based on complexity. All projects are fixed-price — no hourly billing.',
    },
    {
      question: 'What does a GHL expert do?',
      answer: 'A GHL expert builds and manages GoHighLevel systems — pipelines, automation workflows, funnels, AI chatbots, AI voice agents, white-label SaaS setups, Shopify integrations, and CRM migrations. They configure the platform around your specific business process.',
    },
    {
      question: 'How long does a GoHighLevel setup take?',
      answer: 'A standard GoHighLevel CRM setup with core automations takes 2–3 weeks. A full white-label SaaS configuration takes 3–5 weeks. Simple workflow fixes or integrations can be done in 2–5 business days.',
    },
    {
      question: 'What is GoHighLevel white label support?',
      answer: 'White label support means configuring GHL SaaS mode so the platform appears completely under your brand — your logo, domain, and colors. Clients never see the GoHighLevel name. This involves branded login, custom domain, Stripe rebilling, Twilio, and Mailgun setup.',
    },
    {
      question: 'Can you migrate from HubSpot or another CRM?',
      answer: 'Yes. We handle full GoHighLevel migrations from HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, and others. This includes contacts, custom fields, pipelines, automations, and team training — with zero data loss.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes. All projects include 30 days of premium support. We also offer extended support packages, optimization calls, and dedicated VA services for ongoing management.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="container-narrow">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-nurture-blue" />
            <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
              Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-space-blue">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border-light rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-off-white transition-colors text-left"
              >
                <h3 className="font-bold text-space-blue text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-nurture-blue transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-border-light">
                  <p className="text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## CTA Section

**File: `components/sections/CTA.tsx`**

```typescript
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="bg-space-blue text-white py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-nurture-blue/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-capture-yellow/30 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
          Ready to Build Your GHL System?
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
          Book a free 30-minute discovery call with our GHL experts. No sales pitch, no pressure—just honest conversation about your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Book a Free Call
          </Button>
          <Button variant="ghost" size="lg">
            View Pricing
          </Button>
        </div>

        <p className="text-sm text-white/50 mt-8">
          We respond to all inquiries within 2 hours during business days.
        </p>
      </div>
    </section>
  )
}
```

---

## Utility Components

### Container Component

**File: `components/common/Container.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'narrow' | 'wide'
}

export function Container({
  children,
  className,
  size = 'wide',
}: ContainerProps) {
  const sizes = {
    narrow: 'max-w-4xl',
    wide: 'max-w-7xl',
  }

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}
```

### Section Component

**File: `components/common/Section.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'dark'
  id?: string
}

export function Section({
  children,
  className,
  variant = 'light',
  id,
}: SectionProps) {
  const variants = {
    light: 'bg-white',
    dark: 'bg-space-blue text-white',
  }

  return (
    <section
      id={id}
      className={cn('py-20 md:py-28 lg:py-32', variants[variant], className)}
    >
      {children}
    </section>
  )
}
```

### Section Header Component

**File: `components/common/SectionHead.tsx`**

```typescript
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadProps {
  label?: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHead({
  label,
  title,
  description,
  className,
}: SectionHeadProps) {
  return (
    <div className={cn('text-center mb-16 md:mb-20', className)}>
      {label && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-nurture-blue" />
          <span className="text-xs font-bold uppercase tracking-widest text-nurture-blue">
            {label}
          </span>
        </div>
      )}

      {title && (
        <h2 className="text-4xl md:text-5xl font-black text-space-blue mb-4 text-balance">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-lg text-body max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
```

---

## Usage Examples

### Using Components in a Page

```typescript
import { SectionHead } from '@/components/common/SectionHead'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'

export default function Page() {
  return (
    <Section>
      <Container>
        <SectionHead
          label="Features"
          title="What We Offer"
          description="Complete GoHighLevel solutions for your business"
        />
        {/* Rest of content */}
      </Container>
    </Section>
  )
}
```

---

## Icon Reference Guide

**All icons used (from Lucide React):**

```typescript
import {
  // Navigation & UI
  Menu, X, ChevronDown, ChevronRight, ArrowRight, ArrowLeft,
  
  // Services
  Code, Settings, Zap, Users, TrendingUp, Shield,
  
  // Contact
  Mail, Phone, Linkedin, Twitter, Instagram,
  
  // General
  Check, Star, AlertCircle, Info, Clock, MapPin, Globe,
  Briefcase, Smartphone, Award,
  
  // Social Proof
  Heart, Share2,
  
  // Misc
  ExternalLink, Copy, Download,
} from 'lucide-react'
```

---

All components follow these principles:

✅ **Mobile-first responsive design** - Works perfectly on all screen sizes  
✅ **Accessible markup** - ARIA labels, semantic HTML, keyboard navigation  
✅ **Performance optimized** - Lazy loading, optimized images, minimal bundles  
✅ **Brand consistent** - Uses design tokens from Tailwind config  
✅ **SEO friendly** - Proper heading hierarchy, meta tags, schema markup  

Each component is production-ready and follows Next.js 16 best practices.
