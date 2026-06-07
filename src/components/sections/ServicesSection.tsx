'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Shield, Home, Building2, HardHat, Camera, Lock, ClipboardList, CalendarCheck, ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/types'

const ICON_MAP: Record<string, React.ElementType> = {
  shield: Shield,
  home: Home,
  building: Building2,
  'hard-hat': HardHat,
  camera: Camera,
  lock: Lock,
  clipboard: ClipboardList,
  calendar: CalendarCheck,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-brand-navy" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="section-label justify-center">What We Offer</div>
          <h2 id="services-heading" className="font-display text-[clamp(26px,4vw,44px)] font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Tailored security services for every environment — from corporate headquarters to residential communities and construction sites.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 rounded-sm overflow-hidden"
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Shield
            return (
              <motion.div
                key={service._id}
                variants={cardVariants}
                role="listitem"
                className="group service-card"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-blue">
                  <Icon
                    className="w-5 h-5 text-brand-blue transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <ArrowRight
                  className="w-4 h-4 text-brand-blue absolute top-7 right-6 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
