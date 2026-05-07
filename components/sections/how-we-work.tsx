'use client'

import { Target, ClipboardCheck, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Tell Us Your GHL Goal',
    description: 'Fill out the form below. Aryan reviews your inquiry personally and reaches out within a few hours via phone or email.',
    icon: Target,
  },
  {
    number: 2,
    title: 'We Scope & Price It',
    description: 'We audit your current GHL setup, map your workflow, and send a fixed-price scope document — deliverables, timeline, and exact cost before anything starts.',
    icon: ClipboardCheck,
  },
  {
    number: 3,
    title: 'Your GHL Expert Builds',
    description: 'A dedicated GoHighLevel specialist from our team builds your entire system — CRM, automations, integrations, funnels — and tests every single workflow.',
    icon: Wrench,
  },
  {
    number: 4,
    title: 'Go Live. Fully Trained.',
    description: 'Your team gets full hands-on training and documentation. Your GHL system goes live. Typical delivery: 2–4 weeks from project start.',
    icon: Rocket,
  },
]

export function HowWeWorkSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-space-blue py-20 md:py-22"
      aria-labelledby="how-h2"
    >
      {/* Subtle grid texture matching reference */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 155, 240, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 155, 240, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow eyebrow-yellow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-capture-yellow" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-capture-yellow">
              Simple Process
            </span>
          </div>
          <h2 id="how-h2" className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-white">
            How to Hire a <span className="text-capture-yellow">GoHighLevel Expert</span> in 4 Steps
          </h2>
          <p className="text-base leading-relaxed text-white/60">
            From first enquiry to a fully live GHL system — here is exactly what happens.
          </p>
        </div>

        {/* Steps Grid - matches reference 4 column layout */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Connecting Line - matches reference exactly */}
          <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-0.5 bg-gradient-to-r from-capture-yellow via-nurture-blue to-capture-yellow opacity-25 lg:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative px-4 text-center">
              {/* Step Number Circle - matches reference exactly */}
              <div className="relative z-10 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border-3 border-capture-yellow bg-space-blue">
                <span className="text-2xl font-extrabold text-capture-yellow">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-bold text-white lg:text-[15px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/55 lg:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}