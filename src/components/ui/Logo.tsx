'use client'

import { cn } from '@/lib/utils'

export function LogoIcon({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.svg"
      alt=""
      className={cn('w-10 h-10', className)}
      aria-hidden="true"
    />
  )
}