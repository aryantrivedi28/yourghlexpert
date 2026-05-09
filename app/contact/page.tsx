// app/contact/ContactClient.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  Clock,
  MessageCircle,
  User,
  Briefcase,
  FileText,
  Globe,
  Star,
  Sparkles
} from 'lucide-react';
import BookingModal from '@/components/BookingModel';
// import Breadcrumb from '@/components/layout/Breadcrumb';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [openBooking, setOpenBooking] = useState(false);

  // Get your GHL webhook URL from environment variable
  const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate form data
    if (!formData.name.trim()) {
      setError('Please enter your name');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      setIsSubmitting(false);
      return;
    }

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || '';

      // Prepare payload for GoHighLevel
      const payload = {
        name: formData.name,
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone || '',
        service: formData.service || 'Not specified',
        message: formData.message,
        source: 'Website Contact Form',
        timestamp: new Date().toISOString(),
        ip_address: '',
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      };

      // Send to GoHighLevel Webhook
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Optional: Track conversion in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'contact_form_submission',
        });
      }
      
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  if (isSuccess) {
    return (
      <>
        <section className="py-16 md:py-20 bg-white" style={{ paddingTop: '100px' }}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="max-w-[600px] mx-auto text-center">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#1C2E4A] mb-3">Strategy Call Request Received!</h2>
                <p className="text-[#4A5568] mb-4">
                  Thanks for reaching out! Aryan will personally review your request and get back to you within 24 hours to schedule your free strategy call.
                </p>
                <p className="text-sm text-[#8A9BB0]">Check your email for confirmation details.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 bg-[#F8D000] text-[#0B1421] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFE44D] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Contact Section */}
      <section className="py-20 md:py-20 bg-white" style={{ paddingTop: '100px' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                  <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                  Get in Touch
                </div>
                <h1 className="text-[clamp(2rem,4vw,2.6rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[#1C2E4A]">
                  Let's Talk About Your<br />
                  <span className="text-[#0E9BF0]">GHL Project</span>
                </h1>
                <p className="text-[0.92rem] font-light text-[#4A5568] leading-relaxed mb-6">
                  Book a free 30-minute strategy call. We learn your business, review your setup, 
                  identify gaps, and outline a clear plan. No pitch — just a technical conversation.
                </p>
              </div>

              {/* Direct Booking Button */}
              <button
                onClick={handleOpenBooking}
                className="w-full bg-[#0E9BF0] text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-[#0E9BF0]/90 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Free Strategy Call Instantly →
              </button>
              <p className="text-xs text-center text-[#8A9BB0] mt-2">
                Instant calendar booking • 30-min session • Free consultation
              </p>

              {/* OR Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E8EDF4]"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm text-[#8A9BB0]">OR</span>
                </div>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-5 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(14,155,240,0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0E9BF0]" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Email
                    </div>
                    <Link 
                      href="mailto:aryan@ghlscaleup.com" 
                      className="text-[0.95rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors"
                    >
                      aryan@ghlscaleup.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(37,201,125,0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#25C97D]" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Phone
                    </div>
                    <Link 
                      href="tel:+919893270210" 
                      className="text-[0.95rem] font-semibold text-[#1C2E4A] hover:text-[#0E9BF0] transition-colors"
                    >
                      +91 98932 70210
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(248,208,0,0.12)] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#F8D000]" />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-bold text-[#8A9BB0] uppercase tracking-[0.1em] mb-0.5">
                      Location
                    </div>
                    <span className="text-[0.95rem] font-semibold text-[#1C2E4A]">
                      Global (Remote)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social/Trust Indicators */}
              <div className="pt-8 border-t border-[#E8EDF4]">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#0B1421]" />
                    </div>
                    <span className="text-[0.78rem] text-[#4A5568]">200+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#0B1421]" />
                    </div>
                    <span className="text-[0.78rem] text-[#4A5568]">50+ Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8D000] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#0B1421]" />
                    </div>
                    <span className="text-[0.78rem] text-[#4A5568]">6 Countries</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-[#F4F7FA] border border-[#E8EDF4] rounded-2xl p-6 md:p-10">
              <h3 className="text-[1.1rem] font-bold text-[#1C2E4A] mb-2">
                Fill the Form & We'll Reach Out
              </h3>
              <p className="text-[0.84rem] font-light text-[#4A5568] leading-relaxed mb-6">
                Submit your details and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *" 
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *" 
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors"
                />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white text-[0.85rem] text-[#4A5568] focus:outline-none focus:border-[#0E9BF0] transition-colors cursor-pointer"
                >
                  <option value="">What do you need? *</option>
                  <option value="GHL CRM Setup">GHL CRM Setup</option>
                  <option value="Automation">Automation</option>
                  <option value="Sales Funnels">Sales Funnels</option>
                  <option value="AI Chatbot / Voice">AI Chatbot / Voice</option>
                  <option value="White-Label SaaS">White-Label SaaS</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Shopify / Ecommerce">Shopify / Ecommerce</option>
                  <option value="Other">Other</option>
                </select>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project... *" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-[10px] border border-[#E8EDF4] bg-white text-[0.85rem] text-[#1C2E4A] placeholder:text-[#8A9BB0] focus:outline-none focus:border-[#0E9BF0] transition-colors resize-vertical"
                />
                
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F8D000] text-[#0B1421] px-6 py-3.5 rounded-[10px] text-[0.88rem] font-bold hover:bg-[#FFE44D] hover:-translate-y-[1px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit & We Will Reach Out →'
                  )}
                </button>
                
                <p className="text-[0.7rem] text-center text-[#8A9BB0] mt-2">
                  We'll respond within 24 hours • No spam, ever
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3">
                <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
                Office Hours
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2rem]] font-extrabold tracking-[-0.03em] leading-[1.2] mb-4 text-[#1C2E4A]">
                We're Here to Help<br />
                <span className="text-[#0E9BF0]">Monday - Friday</span>
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-[#E8EDF4]">
                  <span className="text-[0.88rem] text-[#4A5568]">Monday - Friday</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E8EDF4]">
                  <span className="text-[0.88rem] text-[#4A5568]">Saturday - Sunday</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">Closed</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[0.88rem] text-[#4A5568]">Response Time</span>
                  <span className="text-[0.88rem] font-semibold text-[#1C2E4A]">&lt; 4 hours (business hours)</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl border border-[#E8EDF4]">
                <p className="text-[0.82rem] text-[#4A5568] leading-relaxed flex items-start gap-2">
                  <span className="text-[#F8D000] text-lg">📌</span>
                  <span><strong className="font-semibold text-[#1C2E4A]">Note:</strong> All strategy calls are scheduled within 24-48 hours. We'll send you a calendar invite with a Google Meet link.</span>
                </p>
              </div>
            </div>
            <div className="bg-[#1C2E4A] rounded-2xl p-8 text-white">
              <h3 className="text-[1rem] font-bold mb-4">What to Expect on Your Call</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">1.</span>
                  <span className="text-[0.85rem] text-white/70">Quick intro & understanding your business model</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">2.</span>
                  <span className="text-[0.85rem] text-white/70">Review your current GHL setup (if any)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">3.</span>
                  <span className="text-[0.85rem] text-white/70">Identify gaps and opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">4.</span>
                  <span className="text-[0.85rem] text-white/70">Outline a clear action plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F8D000] font-bold">5.</span>
                  <span className="text-[0.85rem] text-white/70">Share next steps and timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#0E9BF0] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#0E9BF0] rounded"></span>
              Quick Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2rem]] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3.5 text-[#1C2E4A]">
              Before You Reach Out
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">How soon can you start?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">We typically start within 3-5 business days after discovery call and contract signing.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">Do you work with clients outside India?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Yes! We serve clients in US, UK, Australia, Canada, UAE, and 6+ countries.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">Is the strategy call really free?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Yes, no strings attached. Just a technical conversation to see if we can help.</p>
            </div>
            <div className="p-6 border border-[#E8EDF4] rounded-xl">
              <h3 className="text-[0.9rem] font-bold text-[#1C2E4A] mb-2">What if I already have a GHL account?</h3>
              <p className="text-[0.82rem] text-[#4A5568]">Perfect! We can audit your existing setup and fix what's broken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}