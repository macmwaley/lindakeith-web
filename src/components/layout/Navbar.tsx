'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/types'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // When scrolled in light mode, text needs to be dark
  const isLightScrolled = mounted && theme !== 'dark' && scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'py-3 shadow-sm'
            : 'py-5 bg-transparent',
          scrolled && (mounted && theme === 'dark'
            ? 'bg-brand-navy/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200'),
        )}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="LindaKeith Security Home">
              {/* Show blue logo when scrolled in light mode, white logo otherwise */}
              <img
                src="/images/logo-white.svg"
                alt="LindaKeith Security"
                className={cn(
                  'h-10 w-auto transition-opacity duration-300',
                  isLightScrolled ? 'opacity-0 absolute' : 'opacity-100'
                )}
              />
              <img
                src="/images/logo-blue.svg"
                alt="LindaKeith Security"
                className={cn(
                  'h-10 w-auto transition-opacity duration-300',
                  isLightScrolled ? 'opacity-100' : 'opacity-0 absolute'
                )}
              />
              <div>
                <span className={cn(
                  'block font-display font-bold text-base tracking-wide leading-none transition-colors duration-300',
                  isLightScrolled ? 'text-brand-navy' : 'text-white'
                )}>
                  LINDAKEITH
                </span>
                <span className={cn(
                  'block text-[9px] font-medium tracking-widest uppercase mt-0.5 transition-colors duration-300',
                  isLightScrolled ? 'text-slate-400' : 'text-white/50'
                )}>
                  Security Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:flex">
              <ul className="flex items-center gap-7 list-none">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-[13px] font-medium transition-colors duration-300 tracking-wide',
                        isLightScrolled
                          ? 'text-slate-600 hover:text-brand-blue'
                          : 'text-white/75 hover:text-white'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={cn(
                    'w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200',
                    isLightScrolled
                      ? 'text-slate-500 hover:text-brand-blue hover:bg-slate-100'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  )}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <Link href="/contact" className="hidden md:inline-flex btn-primary py-2.5 px-5 text-xs">
                Request a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-1 transition-colors duration-300',
                  isLightScrolled
                    ? 'text-slate-700 hover:text-brand-blue'
                    : 'text-white/80 hover:text-white'
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.25, 0.8, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-brand-navy z-50 flex flex-col p-8 pt-16 lg:hidden"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 text-white/50 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
              <ul className="list-none flex flex-col gap-1 mb-8">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base text-white/65 hover:text-white border-b border-white/5 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary justify-center"
              >
                Request a Quote
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}