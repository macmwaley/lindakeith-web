'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/types'

const FEATURES = [
  'Professionally trained and vetted security personnel',
  '24/7 operations centre with rapid response capability',
  'Regular site supervision and compliance audits',
  'Detailed incident reporting and documentation',
]

export function AboutSection() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Placeholder for real photography */}
            <img
              src="/images/about-team.png"
              alt="LindaKeith Security professional team on site"
              className="w-full h-[480px] object-cover rounded"
              style={{ objectPosition: 'right' }}
            />

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-6 rounded text-center min-w-[140px]">
              <span className="block font-display text-4xl font-bold leading-none">
                {COMPANY_INFO.yearsOperating}+
              </span>
              <span className="block text-[10px] tracking-widest uppercase opacity-75 mt-1">
                Years Operating
              </span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="section-label">Who We Are</div>
            <h2
              id="about-heading"
              className="font-display text-[clamp(26px,3.5vw,42px)] font-bold text-slate-900 dark:text-white mb-5 leading-tight"
            >
              Security Backed By Professionalism And Accountability
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              LindaKeith Security Limited is a Kenya-registered security services company delivering professional manned guarding, surveillance, and access control solutions to businesses, residential estates, and institutions across Nairobi, Ruiru, Thika, and Juja.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Our operations are guided by a strict supervision framework, real-time incident reporting protocols, and a commitment to deploying well-trained, vetted security personnel at every client site.
            </p>

            {/* Feature List */}
            <ul className="space-y-3.5 mb-9 list-none" aria-label="Key company strengths">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {feat}
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-outline-dark">
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
