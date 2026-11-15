import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { L } from '@/content/types'
import { formatMoney, formatNumber, formatPercent, localizeDigits, type Lang } from '@/lib/format'
import { ScrollTrigger } from '@/lib/gsap'
import { ui, type UIKey } from './strings'

type I18nValue = {
  lang: Lang
  dir: 'rtl' | 'ltr'
  isFa: boolean
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** UI dictionary lookup */
  t: (key: UIKey) => string
  /** Pick the current language from a bilingual string (digits localised). */
  tr: (text: L | undefined) => string
  num: (n: number, decimals?: number) => string
  money: (n: number) => string
  pct: (n: number, decimals?: number) => string
  digits: (s: string) => string
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'aa.lang'

function readStoredLang(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'fa' || v === 'en') return v
  } catch {
    /* storage unavailable */
  }
  return 'fa'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.title = ui['brand.full'][lang]
    // Layout direction & font metrics change → recompute every scroll trigger.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [lang])

  const value = useMemo<I18nValue>(() => {
    const isFa = lang === 'fa'
    return {
      lang,
      isFa,
      dir: isFa ? 'rtl' : 'ltr',
      setLang,
      toggleLang: () => setLang(isFa ? 'en' : 'fa'),
      t: (key) => ui[key][lang],
      tr: (text) => (text ? localizeDigits(text[lang], lang) : ''),
      num: (n, decimals = 0) => formatNumber(n, lang, decimals),
      money: (n) => formatMoney(n, lang),
      pct: (n, decimals = 1) => formatPercent(n, lang, decimals),
      digits: (s) => localizeDigits(s, lang),
    }
  }, [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
