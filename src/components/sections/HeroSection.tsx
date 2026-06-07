'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const STATS = [
  { value: 50, suffix: '+', label: 'Security Officers' },
  { value: 20, suffix: '+', label: 'Client Locations' },
  { value: null, static: '24/7', label: 'Operations Support' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-[#1a3560]" />
      <div className="absolute inset-0 hero-grid-bg opacity-100" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-brand-blue/10 to-transparent" />
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-blue/15 pointer-events-none" />
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-blue/7 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-3xl" ref={ref}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            className="flex items-center gap-2.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-accent">
              Professional Security Services · Nairobi, Kenya
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.08}
            className="font-display text-[clamp(40px,6vw,76px)] font-bold text-white leading-[1.07] tracking-tight mb-6"
          >
            Protecting People,{' '}
            <span className="text-brand-accent">Property</span>
            {' '}&{' '}
            <br className="hidden sm:block" />
            Business Operations
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.16}
            className="text-lg text-white/60 leading-relaxed max-w-xl mb-10 font-light"
          >
            Professional security solutions designed to safeguard businesses, residential
            communities, institutions, and critical infrastructure across Kenya.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.24}
            className="flex flex-wrap gap-3.5 mb-16"
          >
            <Link href="/contact" className="btn-primary">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#services" className="btn-outline-light">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.32}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden max-w-[680px]"
            role="list"
            aria-label="Company statistics"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                role="listitem"
                className="bg-brand-navy/70 backdrop-blur-sm px-5 py-6 text-center"
              >
                {stat.static ? (
                  <span className="block font-display text-[32px] font-bold text-white leading-none">
                    {stat.static}
                  </span>
                ) : (
                  <span className="block font-display text-[32px] font-bold text-white leading-none">
                    {mounted && inView && stat.value !== null ? (
                      <CountUp end={stat.value} duration={1.8} suffix={stat.suffix} useEasing />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                )}
                <span className="block text-[11px] text-white/45 tracking-wider uppercase mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-[11px] tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}