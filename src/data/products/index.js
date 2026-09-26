import { shallowReactive } from 'vue'
import { CATEGORIES } from '../categories.js'
import aiAssistant from './ai_assistant.js'
import aiAssistantZh from './ai_assistant.zh.js'

// AI tools ship in the main bundle so they render on first paint; every other category is its own chunk,
// fetched by loadRemainingCategories() after mount and merged in as it arrives.
const LOADERS = {
  ai_video: () => Promise.all([import('./ai_video.js'), import('./ai_video.zh.js')]),
  image: () => Promise.all([import('./image.js'), import('./image.zh.js')]),
  music: () => Promise.all([import('./music.js'), import('./music.zh.js')]),
  leave: () => Promise.all([import('./leave.js'), import('./leave.zh.js')]),
  shipping: () => Promise.all([import('./shipping.js'), import('./shipping.zh.js')]),
}

export const PRODUCTS = shallowReactive([])
export const PRODUCT_BY_ID = shallowReactive({})
export const LOADED = shallowReactive(new Set())

const byCategory = {}

// A plan is priced per account exactly when perSeat is false; priceUnit must say the same for every plan.
const unitMismatch = (p) =>
  !['user', 'account'].includes(p.priceUnit) ||
  p.tiers.some((tier) => !tier.custom && (tier.perSeat === false) !== (p.priceUnit === 'account'))

function add(category, list, zh) {
  // Prices are converted from USD for display, so a record in any other currency would show wrong amounts.
  const nonUsd = list.filter((p) => p.currency !== 'USD').map((p) => p.id)
  if (nonUsd.length) throw new Error(`Product prices must be USD (currency: "USD"); check: ${nonUsd.join(', ')}`)
  const badUnit = list.filter(unitMismatch).map((p) => p.id)
  if (badUnit.length)
    throw new Error(`priceUnit must be "user" or "account" and match each plan's perSeat; check: ${badUnit.join(', ')}`)
  byCategory[category] = list.map((p) => ({ ...p, zh: zh[p.id] }))
  for (const p of byCategory[category]) PRODUCT_BY_ID[p.id] = p
  // Keep PRODUCTS in category order regardless of which chunk lands first.
  PRODUCTS.splice(0, PRODUCTS.length, ...CATEGORIES.flatMap((c) => byCategory[c.id] || []))
  LOADED.add(category)
}

add('ai_assistant', aiAssistant, aiAssistantZh)

export function loadRemainingCategories() {
  return Promise.all(
    Object.entries(LOADERS).map(([id, load]) =>
      load()
        .then(([en, zh]) => add(id, en.default, zh.default))
        .catch((err) => console.error(`Failed to load ${id} products`, err)),
    ),
  )
}
