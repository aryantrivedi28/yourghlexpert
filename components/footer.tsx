'use client'

import { useState } from 'react'
import Image from 'next/image'
import BookingModal from './BookingModel'

export function Footer() {
  const [openBooking, setOpenBooking] = useState(false)

  const handleOpenBooking = () => {
    setOpenBooking(true)
  }

  return (
    <>
      <footer className="bg-[#0B1421] border-t-3 border-t-capture-yellow pt-13 pb-7">
        <div className="mx-auto max-w-7xl px-6">
          {/* Footer Grid - matches reference exactly */}
          <div className="mb-11 grid gap-11 lg:grid-cols-[1.5fr_1fr_1fr]">
            {/* Logo and Description Column */}
            <div>
              <Image
                src="/ghlscalup.png"
                alt="GHL Scale Up Logo"
                width={160}
                height={40}
                className="mb-3.5 h-10 w-auto"
              />
              <p className="mb-4 max-w-[260px] text-sm leading-relaxed text-[#8A9BB0]">
                The dedicated GoHighLevel expert service for agencies, SaaS founders, and service businesses. 200+ GHL projects delivered across 6 countries.
              </p>
              <div className="text-xs text-[#8A9BB0]">
                A service by{' '}
                <a 
                  href="https://www.ghlscaleup.com" 
                  className="text-nurture-blue hover:text-capture-yellow transition-colors"
                  rel="noopener noreferrer"
                >
                  GHL Scale Up
                </a>
                {' '}— The #1 GoHighLevel Expert Agency
              </div>
            </div>

            {/* Services Links Column */}
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8A9BB0]">
                GHL Expert Services
              </div>
              <div className="flex flex-col gap-2.5">
                <a 
                  href="https://www.ghlscaleup.com/services/crm-setup" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GoHighLevel CRM Setup
                </a>
                <a 
                  href="https://www.ghlscaleup.com/services/workflow-automation" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GHL Workflow Automation
                </a>
                <a 
                  href="https://www.ghlscaleup.com/services/saas-setup" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GoHighLevel White Label Support
                </a>
                <a 
                  href="https://www.ghlscaleup.com/services/virtual-assistant" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GoHighLevel Virtual Assistant
                </a>
                <a 
                  href="https://www.ghlscaleup.com/services/funnel-development" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GoHighLevel Funnel Builder
                </a>
                <a 
                  href="https://www.ghlscaleup.com/services/migration" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GoHighLevel Migration Service
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8A9BB0]">
                Contact
              </div>
              <div className="flex flex-col gap-2.5">
                <a 
                  href="https://www.ghlscaleup.com" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                  rel="noopener noreferrer"
                >
                  GHL Scale Up (Main Site)
                </a>
                <a 
                  href="mailto:aryan@ghlscaleup.com" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  aryan@ghlscaleup.com
                </a>
                <a 
                  href="tel:+919893270210" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  +91 98932 70210
                </a>
                <a 
                  href="https://www.ghlscaleup.com/blog" 
                  className="text-sm text-white/58 transition-colors hover:text-capture-yellow"
                >
                  GHL Expert Blog
                </a>
                <button
                  onClick={handleOpenBooking}
                  className="text-left text-sm text-white/58 transition-colors hover:text-capture-yellow cursor-pointer"
                >
                  Book a Free Call
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom - matches reference exactly */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-white/7 pt-5.5 text-[13px] text-[#8A9BB0] sm:flex-row">
            <span>
              © 2026 Your GHL Expert — Powered by{' '}
              <a 
                href="https://www.ghlscaleup.com" 
                className="text-nurture-blue hover:text-capture-yellow transition-colors"
                rel="noopener noreferrer"
              >
                GHL Scale Up
              </a>
              . All rights reserved.
            </span>
            <span>Not affiliated with or endorsed by GoHighLevel Inc.</span>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  )
}