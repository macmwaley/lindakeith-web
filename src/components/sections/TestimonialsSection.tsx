'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/types'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="testimonials" className="py-24 overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="section-label justify-center">Client Feedback</div>
          <h2 id="testimonials-heading" className="font-display text-[clamp(26px,4vw,42px)] font-bold text-slate-900 dark:text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Swipeable cards - one at a time */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
              role="list"
              aria-label="Client testimonials"
            >
              {TESTIMONIALS.map((t) => (
                <article
                  key={t._id}
                  role="listitem"
                  className="w-full flex-shrink-0 px-2"
                  aria-label={`Testimonial from ${t.authorName}`}
                >
                  <div className="max-w-xl mx-auto p-8 sm:p-10 border dark:border-slate-800 rounded-lg bg-white dark:bg-brand-navy">
                    <div className="font-display text-5xl text-brand-blue/40 leading-none mb-4" aria-hidden="true">
                      &ldquo;
                    </div>
                    <blockquote>
                      <p className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed italic mb-7">
                        {t.text}
                      </p>
                    </blockquote>
                    <footer className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        aria-hidden="true"
                      >
                        {t.initials}
                      </div>
                      <div>
                        <cite className="not-italic font-semibold text-sm text-slate-900 dark:text-white block">
                          {t.authorName}
                        </cite>
                        <span className="text-xs text-slate-400">
                          {t.authorRole}, {t.authorCompany}
                        </span>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={current === i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                current === i
                  ? 'w-6 bg-brand-blue'
                  : 'w-2 bg-slate-200 dark:bg-slate-700',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}