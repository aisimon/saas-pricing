import { money, num } from './format.js'
import { metricText, t } from '../i18n/index.js'
import { state } from '../store.js'

const RES = { '8k': 4320, '4k': 2160, '2k': 1440, '1440p': 1440, '1080p': 1080, '720p': 720, '480p': 480 }

function seconds(v) {
  if (v < 60) return `${num(v, state.locale)} ${t('unit.s')}`
  return `${num(v / 60, state.locale, { digits: v % 60 ? 1 : 0 })} ${t('unit.min')}`
}

export function formatMetric(p, spec) {
  const v = p.metrics?.[spec.key]
  switch (spec.type) {
    case 'bool':
      return v === true ? `✓ ${t('yes')}` : v === false ? `✕ ${t('no')}` : '—'
    case 'freeLimit':
      if (!p.metrics.freeTier) return `✕ ${t('no')}`
      return v == null ? t('unlimited') : `≤ ${num(v, state.locale)}`
    case 'num':
      return v === 'unlimited' ? t('unlimited') : num(v, state.locale)
    case 'money':
      return money(v, state.currency, state.locale)
    case 'tokens':
      if (v == null) return '—'
      return v >= 1e6 ? `${num(v / 1e6, state.locale, { digits: 1 })}M` : `${num(v / 1e3, state.locale)}K`
    case 'seconds':
      return v == null ? '—' : seconds(v)
    case 'minutes':
      return v == null ? '—' : `${num(v, state.locale, { digits: 1 })} ${t('unit.min')}`
    case 'score':
      return v == null ? '—' : `${'●'.repeat(v)}${'○'.repeat(5 - v)}`
    case 'list':
      return v?.length ? v.map((x) => t(`platform.${x}`) === `platform.${x}` ? x : t(`platform.${x}`)).join(', ') : '—'
    default:
      return v == null ? '—' : metricText(p, spec.key)
  }
}

// Numeric rank where larger is better, or null when the metric can't be ranked.
export function metricRank(p, spec) {
  const v = p.metrics?.[spec.key]
  if (!spec.better) return null
  let r
  switch (spec.type) {
    case 'bool':
      if (v == null) return null
      r = v ? 1 : 0
      break
    case 'freeLimit':
      r = !p.metrics.freeTier ? 0 : v == null ? Infinity : v
      break
    case 'list':
      r = v?.length ?? null
      break
    case 'resolution':
      r = v ? RES[String(v).toLowerCase()] ?? null : null
      break
    case 'num':
      r = v === 'unlimited' ? Infinity : v
      break
    default:
      r = v
  }
  if (r == null) return null
  if (spec.better === 'lower' || spec.better === 'false') return -r
  return r
}

// Ids of the products holding the best rank; empty when everyone ties or fewer than two are ranked.
export function bestIds(items, rankFn) {
  const ranked = items.map((p) => [p.id, rankFn(p)]).filter(([, r]) => r != null && !Number.isNaN(r))
  if (ranked.length < 2) return new Set()
  const top = Math.max(...ranked.map(([, r]) => r))
  const winners = ranked.filter(([, r]) => r === top)
  return winners.length === ranked.length ? new Set() : new Set(winners.map(([id]) => id))
}
