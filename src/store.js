import { reactive, watch } from 'vue'
import { CATEGORIES } from './data/categories.js'
import { PALETTES } from './palettes.js'

const KEY = 'pricing-lens:v1'
const MAX_COMPARE = 6

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

function systemPalette() {
  const theme = document.documentElement.dataset.theme
  const dark = theme ? theme === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)').matches
  return dark ? 'midnight' : 'sage'
}

const saved = load()

export const state = reactive({
  locale: saved.locale || (navigator.language?.startsWith('zh') ? (/TW|HK|MO|Hant/i.test(navigator.language) ? 'zhHant' : 'zhHans') : 'en'),
  currency: saved.currency || 'USD',
  palette: PALETTES.some((p) => p.id === saved.palette) ? saved.palette : systemPalette(),
  billing: saved.billing || 'monthly',
  view: location.hash === '#compare' ? 'compare' : 'gallery',
  category: 'all',
  query: '',
  sort: 'featured',
  freeOnly: false,
  compare: saved.compare || ['vacation_tracker', 'timetastic', 'day_off'],
  slots: saved.slots || { vacation_tracker: 0, timetastic: 1, day_off: 2 },
  users: saved.users || 50,
  tierChoice: saved.tierChoice || {},
  margins: { ...Object.fromEntries(CATEGORIES.map((c) => [c.id, c.margin])), ...(saved.margins || {}) },
  growth: saved.growth || { start: 50, rate: 8, churn: 2, months: 24 },
  forecastMetric: saved.forecastMetric || 'cumGp',
  detailId: null,
})

const PERSIST = ['locale', 'currency', 'palette', 'billing', 'compare', 'slots', 'users', 'tierChoice', 'margins', 'growth', 'forecastMetric']
watch(
  () => PERSIST.map((k) => JSON.stringify(state[k])),
  () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(PERSIST.map((k) => [k, state[k]]))))
    } catch {
      /* storage unavailable: preferences just won't persist */
    }
  },
)

watch(
  () => state.view,
  (v) => {
    const hash = v === 'compare' ? '#compare' : '#gallery'
    try {
      if (location.hash !== hash) history.replaceState(null, '', hash)
    } catch {
      /* sandboxed frames may refuse history updates; the view still switches */
    }
  },
)
window.addEventListener('hashchange', () => {
  state.view = location.hash === '#compare' ? 'compare' : 'gallery'
})

export const MAX = MAX_COMPARE

export function inCompare(id) {
  return state.compare.includes(id)
}

export function toggleCompare(id) {
  if (inCompare(id)) return removeCompare(id)
  if (state.compare.length >= MAX_COMPARE) return
  const used = new Set(state.compare.map((c) => state.slots[c]))
  let slot = 0
  while (used.has(slot)) slot++
  state.slots = { ...state.slots, [id]: slot }
  state.compare.push(id)
}

export function removeCompare(id) {
  state.compare = state.compare.filter((c) => c !== id)
}

export function setCompare(ids) {
  state.compare = []
  state.slots = {}
  ids.forEach(toggleCompare)
}
