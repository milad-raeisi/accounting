import { useId } from 'react'

import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

const SBC_LOGO = `${import.meta.env.BASE_URL}brand/sbc-logo.svg`

/** Daftar mark: a T-account in white on SBC's Royal → Azure gradient tile. */
export function DaftarMark({ size = 32, className }: { size?: number; className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={cn('shrink-0', className)} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#406AE4" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill={`url(#${id})`} />
      <path d="M11 14h18M20 14v14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13 19.5h4M13 23.5h2.6M23 19.5h4M23 23.5h2.6" stroke="#fff" strokeOpacity=".72" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** Mark + name ("دفتر" / "Daftar"), with an optional small descriptor. */
export function DaftarLockup({ size = 32, showDescriptor = false, className }: { size?: number; showDescriptor?: boolean; className?: string }) {
  const { t } = useI18n()
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <DaftarMark size={size} />
      <span className="leading-tight">
        <span className="block font-heading font-bold text-foreground" style={{ fontSize: size * 0.56 }}>
          {t('brand.name')}
        </span>
        {showDescriptor && <span className="block text-[11px] text-muted-foreground">{t('brand.product')}</span>}
      </span>
    </span>
  )
}

/** The SBC mark for the maker credit, used exactly as supplied (never below 24px, never recoloured). */
export function SbcMark({ size = 24, className }: { size?: number; className?: string }) {
  const px = Math.max(24, size)
  return <img src={SBC_LOGO} width={px} height={px} alt="SBC" draggable={false} className={cn('shrink-0 select-none', className)} />
}
