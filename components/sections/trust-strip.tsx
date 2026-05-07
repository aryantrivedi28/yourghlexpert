'use client'

import { CheckCircle2, Globe, Zap, Lock, Star } from 'lucide-react'

export function TrustStrip() {
  const items = [
    { icon: CheckCircle2, label: 'GoHighLevel Specialists' },
    { icon: Globe, label: 'US · UK · UAE · AU · CA · IN' },
    { icon: Zap, label: 'Live System in 2–4 Weeks' },
    { icon: Lock, label: 'Fixed Price. No Surprises.' },
    { icon: Star, label: '200+ GHL Builds Delivered' },
  ]

  return (
    <div className="border-b border-[#E8EDF4] bg-off-white py-[18px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-2">
                {/* Icon Circle - matches reference exactly */}
                <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-nurture-blue/10 text-nurture-blue">
                  <Icon className="h-3 w-3" />
                </div>
                <span className="text-[13px] font-semibold text-space-blue">
                  {item.label}
                </span>
                {/* Separator - matches reference exactly */}
                {idx < items.length - 1 && (
                  <div className="ml-8 hidden h-[18px] w-px bg-[#E8EDF4] md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}