export type Lang = 'fa' | 'en'

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'

/** Replace ASCII digits with Persian digits (and % with ٪). Leaves other text intact. */
export function toFaDigits(input: string): string {
  return input.replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]).replace(/%/g, '٪')
}

export function localizeDigits(input: string, lang: Lang): string {
  return lang === 'fa' ? toFaDigits(input) : input
}

const cache = new Map<string, Intl.NumberFormat>()
function nf(lang: Lang, min: number, max: number) {
  const key = `${lang}-${min}-${max}`
  let f = cache.get(key)
  if (!f) {
    f = new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', {
      minimumFractionDigits: min,
      maximumFractionDigits: max,
    })
    cache.set(key, f)
  }
  return f
}

export function formatNumber(n: number, lang: Lang, decimals = 0, maxDecimals = decimals): string {
  return nf(lang, decimals, Math.max(decimals, maxDecimals)).format(n)
}

/** Accounting style: negatives in parentheses. */
export function formatMoney(
  n: number,
  lang: Lang,
  opts: { parens?: boolean; decimals?: number } = {},
): string {
  const { parens = true, decimals = 0 } = opts
  const abs = formatNumber(Math.abs(n), lang, decimals)
  if (n < 0) return parens ? `(${abs})` : `−${abs}`
  return abs
}

/** +1,200 / −1,200. In Persian the run is isolated LTR (LRI…PDI) so the sign stays in front of the digits. */
export function formatSigned(n: number, lang: Lang): string {
  if (n === 0) return formatNumber(0, lang)
  const s = `${n > 0 ? '+' : '−'}${formatNumber(Math.abs(n), lang)}`
  return lang === 'fa' ? `⁦${s}⁩` : s
}

export function formatPercent(n: number, lang: Lang, decimals = 1): string {
  return localizeDigits(`${formatNumber(n, 'en', decimals)}%`, lang)
}
