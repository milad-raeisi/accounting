import { Fragment } from 'react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'

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
        if (part.startsWith('`') && part.endsWith('`'))
          return (
            <code key={i} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground" dir="auto">
              {part.slice(1, -1)}
            </code>
          )
        return <Fragment key={i}>{part}</Fragment>
      })}
    </span>
  )
}
