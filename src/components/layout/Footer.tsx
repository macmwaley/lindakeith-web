'use client'
import Link from 'next/link'
import { Shield, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { SERVICES, COMPANY_INFO } from '@/types'

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Why LindaKeith', href: '/#why' },
  { label: 'Coverage Areas', href: '/#coverage' },
  { label: 'Security Insights', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-brand-dark border-t border-white/5" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="LindaKeith Security Home">
              <img
                src="/images/logo-white.svg"
                alt="LindaKeith Security"
                className="h-10 w-auto"
              />
              <div>
                <span className="block font-display font-bold text-white text-base tracking-wide leading-none">
                  LINDAKEITH
                </span>
                <span className="block text-[9px] font-medium tracking-widest uppercase text-white/45 mt-0.5">
                  Security Services
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-5 max-w-xs">
              Professional security services protecting businesses, residential communities, and institutions across Nairobi, Ruiru, Juja, and Thika.
            </p>

            {/* Contact */}
            <address className="not-italic space-y-2.5 mb-6">
              <div className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/40">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/40">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </address>

            {/* Socials */}
            <nav aria-label="Social media links">
              <div className="flex gap-2.5">
                {[
                  { icon: Facebook, href: COMPANY_INFO.socialLinks.facebook ?? '#', label: 'Facebook' },
                  { icon: Instagram, href: COMPANY_INFO.socialLinks.instagram ?? '#', label: 'Instagram' },
                  { icon: Linkedin, href: COMPANY_INFO.socialLinks.linkedin ?? '#', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-white/10 rounded flex items-center justify-center text-white/45 hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h3 className="text-[11px] font-bold tracking-widest uppercase text-white/45 mb-4">Services</h3>
            <ul className="space-y-2.5 list-none">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service._id}>
                  <Link href={`/services/${service.slug}`} className="footer-link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company + Newsletter */}
          <div>
            <nav aria-label="Company navigation">
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-white/45 mb-4">Company</h3>
              <ul className="space-y-2.5 list-none mb-8">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Newsletter */}
            <div>
              <h3 className="text-[11px] font-bold tracking-widest uppercase text-white/45 mb-3">
                Security Updates
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Newsletter signup form"
              >
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-brand-blue text-white px-3 py-2.5 rounded hover:bg-brand-blue/90 transition-colors flex items-center"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <span>
            © {year} LindaKeith Security Limited. All rights reserved. Registered in Kenya.
          </span>
          <span>
            Designed by{' '}
            <a href="https://pruidworks.com" className="hover:text-white/50 transition-colors">
              PruidWorks Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
