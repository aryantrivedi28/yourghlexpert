'use client'

const cases = [
  {
    company: 'Capviax',
    tag: 'GHL CRM Setup',
    description: 'Agency had GoHighLevel for 5 months — zero automations running. We rebuilt the entire GHL system in 2 weeks: pipelines, AI-powered lead response, appointment workflows, and real-time Slack alerts for every new lead.',
    metrics: [
      { num: '70%', label: 'Less manual work' },
      { num: '<10s', label: 'Lead response' },
      { num: '2wks', label: 'Delivered' },
    ],
  },
  {
    company: '1AISecretary',
    tag: 'AI Voice Agent',
    description: 'Missed calls were costing $400–$500 per job. We set up a GoHighLevel AI voice agent that answers every inbound call 24/7, qualifies the lead, and books the appointment automatically into the GHL calendar.',
    metrics: [
      { num: '100%', label: 'Calls answered' },
      { num: '<10s', label: 'Response time' },
      { num: '0', label: 'Missed calls' },
    ],
  },
  {
    company: 'RiverEnergia',
    tag: 'GHL White Label',
    description: 'Needed a fully branded SaaS platform for their energy CRM. We built the complete GoHighLevel white label setup — custom domain, branded login, Stripe rebilling, Twilio, Mailgun, and multi-vertical pipeline architecture.',
    metrics: [
      { num: '2.5×', label: 'Follow-up consistency' },
      { num: '<1min', label: 'Lead response' },
      { num: 'Full', label: 'SaaS launched' },
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section
      id="results"
      className="bg-white py-20 md:py-22"
      aria-labelledby="res-h2"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header - matches reference exactly */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="eyebrow mb-3.5 inline-flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 rounded-full bg-nurture-blue" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-nurture-blue">
              Case Studies
            </span>
          </div>
          <h2 id="res-h2" className="mb-3 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.15] tracking-[-0.3px] text-space-blue">
            Real Results from Our{' '}
            <span className="text-nurture-blue">GoHighLevel Expert Team</span>
          </h2>
          <p className="text-base leading-relaxed text-body">
            Every number is from a real GHL project — not a projection. This is what a properly configured GoHighLevel system delivers.
          </p>
        </div>

        {/* Case Studies Grid - matches reference exactly */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded-lg border border-[#E8EDF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Header - matches reference exactly: company name + tag */}
              <div className="flex items-center justify-between bg-space-blue px-[22px] py-[18px]">
                <span className="text-[18px] font-bold text-white">
                  {caseStudy.company}
                </span>
                <span className="rounded-full bg-capture-yellow/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-capture-yellow">
                  {caseStudy.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-[22px]">
                {/* Description */}
                <p className="mb-[22px] text-sm leading-relaxed text-body">
                  {caseStudy.description}
                </p>

                {/* Metrics - matches reference exactly: 3 columns with numbers and labels */}
                <div className="flex gap-4">
                  {caseStudy.metrics.map((metric, midx) => (
                    <div key={midx}>
                      <div className="text-[22px] font-extrabold leading-none text-close-green">
                        {metric.num}
                      </div>
                      <div className="mt-[5px] text-[11px] font-medium uppercase tracking-[0.05em] text-muted">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}