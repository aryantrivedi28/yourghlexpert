'use client'

import { CheckCircle2 } from 'lucide-react'

export function IntroSection() {
  const capabilities = [
    'GoHighLevel CRM setup pipelines, stages, tags, lead source tracking',
    'Workflow automation speed-to-lead, no-show reminders, nurture sequences',
    'GHL white label support branded domain, login, Stripe, Twilio, Mailgun',
    'AI voice agent and conversation AI 24/7 call handling, lead qualification',
    'GoHighLevel migration from HubSpot, ActiveCampaign, Kajabi, ClickFunnels',
    'Funnel builder, landing pages, and website builds inside GHL',
  ]

  const proofs = [
    { stat: '70%', label: 'Average reduction in manual work after our GHL setup', dark: false },
    { stat: '<10s', label: 'Lead response time with our automation workflows', dark: true },
    { stat: '100%', label: 'Inbound calls answered via AI voice agent setup', dark: true },
    { stat: '2wks', label: 'Typical time from project start to fully live GHL system', dark: false },
  ]

  return (
    <section className="py-20 md:py-22 bg-white" aria-labelledby="intro-h2">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-18 md:grid-cols-2 md:gap-18 items-center">
          
          {/* Left Content - matches reference exactly */}
          <div>
            {/* Eyebrow - matches reference styling */}
            <div className="inline-flex items-center gap-2 mb-3.5">
              <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
                GoHighLevel Expert
              </span>
            </div>

            {/* H2 - exactly as reference */}
            <h2 className="mb-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue" id="intro-h2">
              What Does a <span className="text-nurture-blue">GoHighLevel Expert</span> Actually Build?
            </h2>

            {/* Paragraphs - matching reference copy and styling */}
            <p className="mb-3.5 text-[20px] leading-relaxed text-dark-gray">
              A <strong className="font-semibold text-space-blue">GoHighLevel expert</strong> is not a generalist who uses ten platforms. A real GHL expert builds complete systems inside GoHighLevel from CRM architecture and pipeline configuration to AI automation workflows, lead response sequences, and white-label SaaS platforms and delivers them live, tested, and working.
            </p>

            <p className="mb-5.5 text-[20px] leading-relaxed text-dark-gray">
              When you hire a <strong className="font-semibold text-space-blue">GHL expert</strong> from our team, you get a dedicated specialist who has delivered these systems across 6 countries and 200+ projects. Every workflow is built around your specific business process not a template.
            </p>

            {/* Capabilities List - matches reference exactly */}
            <div className="mt-5.5 flex flex-col gap-3">
              {capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-5.5 w-5.5 min-w-5.5 items-center justify-center rounded-full bg-green-100 text-close-green">
                    <CheckCircle2 className="h-3 w-3" />
                  </div>
                  <span className="text-[15px] leading-relaxed text-space-blue">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Proof Cards matching reference exactly */}
          <div className="grid grid-cols-2 gap-3.5">
            {proofs.map((proof, idx) => (
              <div
                key={idx}
                className={`group rounded-xl p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  proof.dark
                    ? 'border border-space-blue bg-space-blue hover:shadow-lg'
                    : 'border border-[#E8EDF4] bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div
                  className={`mb-1.5 text-[38px] font-extrabold leading-none ${
                    proof.dark ? 'text-capture-yellow' : 'text-nurture-blue'
                  }`}
                >
                  {proof.stat}
                </div>
                <div
                  className={`text-[13px] font-medium leading-tight ${
                    proof.dark ? 'text-white/55' : 'text-muted'
                  }`}
                >
                  {proof.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}