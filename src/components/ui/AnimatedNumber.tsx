import { useCallback } from 'react'

import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number'
import { useI18n } from '@/i18n/I18nProvider'
import { formatMoney, formatNumber, formatPercent } from '@/lib/format'
import { cn } from '@/lib/utils'

type Props = {
  value: number
  /** money → accounting style; number → grouped; percent → 12.3% */
  format?: 'money' | 'number' | 'percent'
  decimals?: number
  /** start animating only when scrolled into view */
  inView?: boolean
  from?: number
  suffix?: string
  className?: string
}

/**
 * Locale-aware wrapper around Animate UI's CountingNumber.
 * Counts with Persian digits in fa and Latin digits in en.
 */
export function AnimatedNumber({ value, format = 'money', decimals = 0, inView = false, from = 0, suffix, className }: Props) {
  const { lang } = useI18n()
  const formatter = useCallback(
    (v: number) => {
      const s =
        format === 'percent'
          ? formatPercent(v, lang, decimals)
          : format === 'number'
            ? formatNumber(v, lang, decimals)
            : formatMoney(v, lang, { decimals })
      return suffix ? `${s}${suffix}` : s
    },
    [lang, format, decimals, suffix],
  )
  return (
    <CountingNumber
      key={lang}
      number={value}
      fromNumber={from}
      decimalPlaces={decimals}
      inView={inView}
      formatter={formatter}
      transition={{ stiffness: 110, damping: 26 }}
      className={cn('tabular inline-block', className)}
    />
  )
}
