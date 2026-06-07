'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Clock, Zap, Eye, FileText, Cpu } from 'lucide-react'
import { BLOG_POSTS, COVERAGE_AREAS } from '@/types'
import { formatDate } from '@/lib/utils'

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
const WHY_FEATURES = [
  { num: '01', title: 'Trained Personnel', icon: Users, desc: 'All officers undergo rigorous background checks, security training, and regular refresher courses to maintain high operational standards.' },
  { num: '02', title: '24/7 Operations', icon: Clock, desc: 'Our operations centre is active around the clock ensuring continuous monitoring, rapid dispatch, and uninterrupted client coverage.' },
  { num: '03', title: 'Rapid Response', icon: Zap, desc: 'Established escalation protocols and mobile response teams enable swift action whenever an incident is detected at any client site.' },
  { num: '04', title: 'Site Supervision', icon: Eye, desc: 'Dedicated supervisors conduct scheduled and unannounced site visits to verify officer performance and maintain client confidence.' },
  { num: '05', title: 'Incident Reporting', icon: FileText, desc: 'Detailed digital occurrence books and incident reports are submitted to clients, maintaining a full audit trail of all security events.' },
  { num: '06', title: 'Technology-Driven', icon: Cpu, desc: 'We integrate CCTV monitoring, digital reporting systems, and access control technology to enhance our human security teams.' },
]

export function WhyChooseSection() {
  return (
    <section id="why" className="py-24" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="section-label justify-center">Our Difference</div>
          <h2 id="why-heading" className="font-display text-[clamp(26px,4vw,44px)] font-bold text-slate-900 dark:text-white mb-4">
            Why Organizations Trust LindaKeith
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            We combine professional discipline with modern operational frameworks to deliver security that is reliable, accountable, and effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_FEATURES.map((feat, i) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="why-card group"
            >
              <span className="block font-display text-5xl font-bold text-brand-blue/12 leading-none mb-4">
                {feat.num}
              </span>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
                <feat.icon className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                {feat.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── COVERAGE SECTION ─────────────────────────────────────────────────────────
export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 bg-brand-navy relative overflow-hidden" aria-labelledby="coverage-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(29,95,191,0.15)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ color: '#60A5FA' }}>Operations Coverage</div>
            <h2 id="coverage-heading" className="font-display text-[clamp(26px,3.5vw,42px)] font-bold text-white mb-5 leading-tight">
              Areas We Serve Across Kenya
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-md">
              Currently operating across the Greater Nairobi metropolitan region with active sites in Ruiru, Juja, Thika, and Nairobi CBD. Expanding operations progressively to serve more client locations.
            </p>

            <ul className="space-y-3 list-none" aria-label="Coverage areas">
              {COVERAGE_AREAS.map((area) => (
                <li
                  key={area.name}
                  className={`flex items-center gap-3.5 px-4 py-3.5 border rounded text-sm font-medium transition-all duration-200 ${
                    area.active
                      ? 'border-white/10 text-white/80 hover:border-brand-blue/50 hover:bg-brand-blue/8'
                      : 'border-dashed border-white/5 text-white/30'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      area.active ? 'bg-brand-accent shadow-[0_0_8px_rgba(96,165,250,0.6)]' : 'bg-white/20'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{area.name}</span>
                  <span className={`text-xs ml-auto ${area.active ? 'text-white/40' : 'text-white/20'}`}>
                    {area.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kenya Map SVG */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <svg viewBox="0 0 340 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
              {/* Kenya outline (simplified) */}
              <path
                d="M170 30 L200 40 L230 60 L250 90 L260 120 L270 160 L265 200 L280 230 L290 260 L280 290 L260 310 L240 330 L220 350 L200 365 L180 370 L160 365 L140 350 L120 335 L100 315 L80 295 L70 265 L65 235 L70 205 L60 175 L65 145 L75 115 L90 85 L110 60 L140 40 Z"
                fill="rgba(29,95,191,0.12)"
                stroke="rgba(29,95,191,0.4)"
                strokeWidth="1.5"
              />
              {/* Nairobi */}
              <g>
                <circle cx="175" cy="195" r="16" fill="rgba(29,95,191,0.2)" className="map-pulse" />
                <circle cx="175" cy="195" r="6" fill="#60A5FA" />
                <text x="188" y="199" fill="#60A5FA" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600">Nairobi</text>
              </g>
              {/* Ruiru */}
              <g>
                <circle cx="185" cy="158" r="12" fill="rgba(29,95,191,0.15)" className="map-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="185" cy="158" r="5" fill="#60A5FA" />
                <text x="198" y="162" fill="#60A5FA" fontFamily="DM Sans, sans-serif" fontSize="10">Ruiru</text>
              </g>
              {/* Juja */}
              <g>
                <circle cx="206" cy="136" r="10" fill="rgba(29,95,191,0.15)" className="map-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="206" cy="136" r="4.5" fill="#60A5FA" />
                <text x="218" y="140" fill="#60A5FA" fontFamily="DM Sans, sans-serif" fontSize="10">Juja</text>
              </g>
              {/* Thika */}
              <g>
                <circle cx="216" cy="110" r="9" fill="rgba(29,95,191,0.12)" className="map-pulse" style={{ animationDelay: '1.5s' }} />
                <circle cx="216" cy="110" r="4" fill="#60A5FA" />
                <text x="228" y="114" fill="#60A5FA" fontFamily="DM Sans, sans-serif" fontSize="10">Thika</text>
              </g>
              {/* Future */}
              <circle cx="140" cy="240" r="4" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS SECTION ──────────────────────────────────────────────────────────
const STEPS = [
  { num: '01', title: 'Assessment', desc: 'Thorough security risk assessment identifying vulnerabilities, access points, and coverage requirements at your premises.' },
  { num: '02', title: 'Deployment', desc: 'Trained officers assigned, briefed on site-specific procedures, and deployed with all necessary equipment and documentation.' },
  { num: '03', title: 'Monitoring', desc: 'Continuous operations monitoring, regular supervisor checks, and real-time incident escalation keep your security active.' },
  { num: '04', title: 'Reporting', desc: 'Detailed daily and monthly reports provide full visibility of security operations, incidents, and officer performance.' },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-brand-navy" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="section-label justify-center">Our Process</div>
          <h2 id="process-heading" className="font-display text-[clamp(26px,4vw,44px)] font-bold text-slate-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            A structured four-stage process ensuring every client site receives properly planned, deployed, and monitored security coverage.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" role="list" aria-label="Our process steps">
          {/* Connector line - desktop only */}
          <div className="process-connector hidden lg:block" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center px-4 relative z-10 group"
            >
              <div className="w-20 h-20 rounded-full border border-brand-blue flex items-center justify-center mx-auto mb-6 bg-slate-50 dark:bg-brand-navy transition-all duration-300 group-hover:bg-brand-blue group-hover:shadow-[0_0_0_8px_rgba(29,95,191,0.12)]">
                <span className="font-display text-xl font-bold text-brand-blue transition-colors duration-300 group-hover:text-white">
                  {step.num}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── BLOG SECTION ─────────────────────────────────────────────────────────────
export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-brand-navy" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <div className="section-label">Knowledge Hub</div>
            <h2 id="blog-heading" className="font-display text-[clamp(24px,3.5vw,38px)] font-bold text-slate-900 dark:text-white">
              Security Insights &amp; Industry Updates
            </h2>
          </div>
          <Link href="/blog" className="btn-outline-dark whitespace-nowrap">
            View All Articles <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="blog-card"
              aria-label={post.title}
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={`/images/${
                    post.slug === 'security-risk-assessments-kenya'
                      ? 'business-security-risk-assessment.jpg'
                      : post.slug === 'cctv-vs-manned-guarding'
                      ? 'kenya-security-cctv.jpg'
                      : 'access-control.jpg'
                  }`}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/blog-placeholder.png'
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.7), rgba(29,95,191,0.5))' }}
                  aria-hidden="true"
                />
                <span className="absolute top-4 left-4 z-10 bg-brand-blue text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <time
                  dateTime={post.publishedAt}
                  className="block text-[11px] text-slate-400 tracking-wider uppercase mb-2.5"
                >
                  {formatDate(post.publishedAt)}
                </time>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-3 transition-all duration-200"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CAREERS SECTION ──────────────────────────────────────────────────────────
export function CareersSection() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden" aria-labelledby="careers-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-navy" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Join Our Team</div>
            <h2 id="careers-heading" className="font-display text-[clamp(24px,3.5vw,40px)] font-bold text-white mb-3 leading-tight">
              Join Our Security Team
            </h2>
            <p className="text-white/60 leading-relaxed max-w-lg">
              We are always looking for disciplined, professional individuals to join LindaKeith Security. We offer competitive terms, ongoing training, and a structured career path in the security industry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <Link href="/careers" className="btn-outline-light whitespace-nowrap">
              View Opportunities <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-brand-navy relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(29,95,191,0.2)_0%,transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="section-label justify-center" style={{ color: '#60A5FA' }}>Get Started Today</div>
          <h2 id="cta-heading" className="font-display text-[clamp(30px,5vw,56px)] font-bold text-white mb-5 tracking-tight leading-tight">
            Secure Your Business With Confidence
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-9">
            Contact our team today to discuss your security requirements, arrange a site visit, or request a competitive quote for your premises.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="#footer" className="btn-outline-light">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
