export type Lang = 'fa' | 'en'

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'

const convert = (s: string) => s.replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]).replace(/%/g, '٪')

/** Identifiers that mix Latin letters and digits: AFE-2025-014.02.03, AR-07, PO-4500123, MP01, S/4HANA. */
const CODE = /[A-Za-z][A-Za-z0-9]*(?:[-./_][A-Za-z0-9]+)+|[A-Za-z]+[0-9][A-Za-z0-9]*/g
const LRI = '⁦'
const PDI = '⁩'

/**
 * Replace ASCII digits with Persian digits (and % with ٪). Leaves other text intact.
 * Codes that mix Latin letters and digits keep their ASCII digits and are isolated as an LTR run,
 * so «عنصر AFE-2025-014.02.03» never gets reordered or half-converted inside Persian text.
 */
export function toFaDigits(input: string): string {
  let out = ''
  let last = 0
  for (const m of input.matchAll(CODE)) {
    const token = m[0]
    if (!/[0-9]/.test(token)) continue
    const at = m.index ?? 0
    // U+2011 non-breaking hyphen keeps the code on one line
    out += convert(input.slice(last, at)) + LRI + token.replace(/-/g, '\u2011') + PDI
    last = at + token.length
  }
  return out + convert(input.slice(last))
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
