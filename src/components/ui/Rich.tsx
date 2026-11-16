import { Fragment } from 'react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g

/** Renders a bilingual string with **bold** and `code` inline markup and localized digits. */
export function Rich({ text, className }: { text: L | string | undefined; className?: string }) {
  const { tr, digits } = useI18n()
  if (!text) return null
  const raw = typeof text === 'string' ? digits(text) : tr(text)
  const parts = raw.split(TOKEN)
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**'))
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        if (part.startsWith('`') && part.endsWith('`')) {
          const content = part.slice(1, -1)
          // Persian inside a code span is set in Vazirmatn; Latin codes (AFE-2025-014.02.03) stay monospaced.
          const persian = /[\u0600-\u06FF]/.test(content)
          return (
            <code
              key={i}
              className={cn('rounded-md bg-muted px-1.5 py-0.5 text-[0.85em] text-foreground', persian ? 'font-fa' : 'font-mono')}
              dir="auto"
            >
              {content}
            </code>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </span>
  )
}
