export function SchemaMarkup() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a GoHighLevel expert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GoHighLevel expert is a specialist who configures, builds, and manages complete GHL systems for agencies and businesses — covering CRM setup, pipeline architecture, workflow automation, AI voice agents, funnel creation, white-label SaaS configuration, and third-party integrations. A real GHL expert has delivered multiple end-to-end projects across different industries and knows how to build systems that run without manual intervention.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to hire a GoHighLevel expert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hiring a GoHighLevel expert typically costs $1,500–$5,000 for a one-time full system build, depending on scope. Standard CRM and automation builds start at $1,500. White-label SaaS configurations are priced based on complexity. All projects are fixed-price — no hourly billing, no surprises.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a GHL expert do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GHL expert builds and manages GoHighLevel systems — pipelines, automation workflows, funnels, AI chatbots, AI voice agents, white-label SaaS setups, Shopify integrations, and CRM migrations. They configure the platform around your specific business process so it runs automatically without your team doing things manually.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a GoHighLevel setup take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard GoHighLevel CRM setup with core automations takes 2–3 weeks. A full white-label SaaS configuration with Stripe rebilling, Twilio, Mailgun, and custom domain takes 3–5 weeks. Simple workflow fixes or single integrations can be done in 2–5 business days.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is GoHighLevel white label support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GoHighLevel white label support means configuring GHL SaaS mode so the platform appears completely under your brand — your logo, your domain, your colours. Clients never see the GoHighLevel name. This involves setting up a branded login page, custom domain, Stripe rebilling, Twilio, Mailgun, and reusable sub-account snapshots.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a GoHighLevel virtual assistant (GHL VA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GHL virtual assistant is a dedicated remote specialist who manages your GoHighLevel account day-to-day — building workflows, managing pipelines, running campaigns, responding in the unified inbox, and keeping the system optimised. Unlike a general VA, a GHL VA works exclusively inside GoHighLevel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you migrate from HubSpot or another CRM to GoHighLevel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We handle full GoHighLevel migrations from HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, Mailchimp, Kajabi, ClickFunnels, and Kartra. This includes contacts, custom fields, pipeline stages, automations, and team training — with zero data loss.',
        },
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Your GHL Experts',
    url: 'https://www.yourghlexperts.com',
    description:
      'GoHighLevel expert service offering CRM setup, automation, white-label SaaS, AI agents, and funnel building for agencies and service businesses worldwide.',
    areaServed: ['US', 'GB', 'AU', 'AE', 'CA', 'SG', 'IN'],
    serviceType: [
      'GoHighLevel CRM Setup',
      'GHL Automation',
      'GoHighLevel White Label',
      'GHL Virtual Assistant',
      'GoHighLevel Funnel Builder',
      'GHL Migration Service',
    ],
    sameAs: ['https://www.ghlscaleup.com'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
