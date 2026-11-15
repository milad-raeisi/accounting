import { cn } from '@/lib/utils'

/** Daftar mark: a T-account inside a ledger tile, with a balanced gold dot. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn('size-9', className)} aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="color-mix(in oklch, var(--primary) 55%, var(--equity))" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo-g)" />
      <path d="M10 13.5h20" stroke="var(--primary-foreground)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M20 13.5V30" stroke="var(--primary-foreground)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M12.5 19h4.5M12.5 23.5h3M23 19h4.5M23 23.5h3" stroke="var(--primary-foreground)" strokeOpacity=".65" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="30" cy="30" r="3.4" fill="var(--gold)" />
    </svg>
  )
}
