// ─── TrustBarSection.tsx ────────────────────────────────────────────────────
'use client'

import { motion } from 'framer-motion'

const CLIENTS = [
  'Prime Bank', 'Juja City Mall', 'Tatu City', 'Ruiru Estates', 'Thika Road Mall',
  'Safaricom PLC', 'Equity Bank', 'Crystal Rivers',
]

export function TrustBarSection() {
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section className="py-14 border-b border-slate-200 dark:border-slate-800 overflow-hidden" aria-label="Trusted clients">
      <div className="max-w-6xl mx-auto px-6 mb-9">
        <p className="text-center text-xs tracking-widest uppercase text-slate-400">
          Trusted By Businesses, Institutions &amp; Residential Communities
        </p>
      </div>
      <div className="overflow-hidden" aria-hidden="true">
        <div className="flex gap-10 animate-logo-scroll" style={{ width: 'max-content' }}>
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded text-xs font-semibold text-slate-400 tracking-widest uppercase whitespace-nowrap opacity-60 hover:opacity-90 transition-opacity"
            >
              <div className="w-3 h-3 rounded-sm bg-slate-300 dark:bg-slate-600" />
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
