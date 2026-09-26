import { FX } from '../data/fx.js'

export const CURRENCIES = ['USD', 'GBP', 'EUR', 'HKD', 'JPY', 'CNY', 'SGD', 'AUD', 'CAD']
export const LOCALE_TAGS = { en: 'en-US', zhHant: 'zh-HK', zhHans: 'zh-CN' }

const cache = new Map()
function nf(tag, opts) {
  const key = tag + JSON.stringify(opts)
  if (!cache.has(key)) cache.set(key, new Intl.NumberFormat(tag, opts))
  return cache.get(key)
}

export const toCurrency = (usd, currency) => (usd == null ? null : usd * FX.rates[currency])

export function money(usd, currency, locale, opts) {
  if (usd == null || Number.isNaN(usd)) return '—'
  return moneyLocal(usd * FX.rates[currency], currency, locale, opts)
}

export function moneyLocal(value, currency, locale, { compact = false } = {}) {
  if (value == null || Number.isNaN(value)) return '—'
  const tag = LOCALE_TAGS[locale]
  const noCents = currency === 'JPY' || Math.abs(value) >= 100
  const opts = { style: 'currency', currency, currencyDisplay: 'narrowSymbol' }
  if (currency !== 'USD' && currency !== 'EUR' && currency !== 'GBP') opts.currencyDisplay = 'symbol'
  if (compact && Math.abs(value) >= 10000) {
    opts.notation = 'compact'
    opts.maximumFractionDigits = 1
  } else {
    opts.maximumFractionDigits = noCents ? 0 : 2
    opts.minimumFractionDigits = noCents ? 0 : value % 1 === 0 ? 0 : 2
  }
  return nf(tag, opts).format(value)
}

export function num(v, locale, { compact = false, digits = 0 } = {}) {
  if (v == null || Number.isNaN(v)) return '—'
  const opts = { maximumFractionDigits: digits }
  if (compact && Math.abs(v) >= 10000) {
    opts.notation = 'compact'
    opts.maximumFractionDigits = 1
  }
  return nf(LOCALE_TAGS[locale], opts).format(v)
}

export function pct(v, locale) {
  if (v == null) return '—'
  return nf(LOCALE_TAGS[locale], { style: 'percent', maximumFractionDigits: 0 }).format(v)
}
