'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import BookingModal from './BookingModel'

const navLinks = [
  { href: '#ghl-services', label: 'GHL Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#results', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openBooking, setOpenBooking] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleOpenBooking = () => {
    setOpenBooking(true)
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-space-blue/95 shadow-lg backdrop-blur-md'
            : 'bg-space-blue',
          'border-b-3 border-capture-yellow'
        )}
        aria-label="Site navigation"
      >
        <div className="mx-auto max-w-7xl px-6 h-[70px] flex items-center justify-between lg:h-[70px]">
          
          {/* Logo - with custom image option */}
          <Link
            href="/"
            className="group flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="Your GHL Expert home"
          >
            <div className="relative flex h-50 w-50 items-center justify-center">
              <Image
                src="/ghlscalup.png"
                alt="GHL Expert Logo"
                width={50}
                height={50}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide text-white/75 transition-all duration-200 hover:text-capture-yellow hover:translate-y-[-2px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+919893270210"
              className="flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors hover:text-capture-yellow"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 98932 70210
            </a>
            <Button variant="cta" size="default" asChild>
              <button
                onClick={handleOpenBooking}
                className="inline-flex items-center gap-1 cursor-pointer"
              >
                Book Free Call
                <Calendar className="h-4 w-4" />
              </button>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative h-10 w-10 rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-space-blue transition-all duration-300 lg:hidden',
          isMobileMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        )}
        style={{ top: '70px' }}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between rounded-lg px-4 py-4 text-base font-semibold text-white/80 transition-all hover:bg-white/5 hover:text-capture-yellow"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="tel:+919893270210"
                className="flex items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                +91 98932 70210
              </a>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="border-t border-white/10 p-6">
            <Button variant="cta" size="lg" asChild className="w-full">
              <button
                onClick={handleOpenBooking}
                className="inline-flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                Book Free Strategy Call
                <Calendar className="h-4 w-4" />
              </button>
            </Button>
            <p className="mt-3 text-center text-xs text-white/40">
              No pressure. Just a 30-min strategy call.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  )
}