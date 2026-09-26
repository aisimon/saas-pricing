<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { state } from '../store.js'
import { t, tx, pText } from '../i18n/index.js'
import { LOADED, PRODUCTS } from '../data/products/index.js'
import { CATEGORIES, CATEGORY_BY_ID } from '../data/categories.js'
import { entryPrice, hasFreeTier, reputation } from '../lib/pricing.js'
import { FX } from '../data/fx.js'
import ProductCard from './ProductCard.vue'

const search = ref(null)

function haystack(p) {
  const cat = CATEGORY_BY_ID[p.category]
  return [
    p.name,
    p.company,
    p.bestFor,
    pText(p, 'bestFor'),
    cat.name.en,
    tx(cat.name),
    ...p.strengths,
    ...(pText(p, 'strengths') || []),
    ...p.tiers.flatMap((tier) => [tier.name, ...tier.highlights]),
  ]
    .join(' ')
    .toLowerCase()
}

const filtered = computed(() => {
  const terms = state.query.toLowerCase().split(/\s+/).filter(Boolean)
  let list = PRODUCTS.filter((p) => {
    if (state.category !== 'all' && p.category !== state.category) return false
    if (state.freeOnly && !hasFreeTier(p)) return false
    if (!terms.length) return true
    const h = haystack(p)
    return terms.every((term) => h.includes(term))
  })
  const price = (p) => entryPrice(p, state.billing) ?? (hasFreeTier(p) ? 0 : Infinity)
  const sorters = {
    priceAsc: (a, b) => price(a) - price(b),
    priceDesc: (a, b) => (price(b) === Infinity ? -1 : price(b)) - (price(a) === Infinity ? -1 : price(a)),
    rating: (a, b) => (reputation(b) ?? -1) - (reputation(a) ?? -1),
    name: (a, b) => a.name.localeCompare(b.name),
  }
  if (sorters[state.sort]) list = [...list].sort(sorters[state.sort])
  return list
})

const grouped = computed(() => {
  if (state.sort !== 'featured') return null
  return CATEGORIES.map((c) => ({ cat: c, items: filtered.value.filter((p) => p.category === c.id) })).filter(
    (g) => g.items.length,
  )
})

const counts = computed(() =>
  Object.fromEntries(
    CATEGORIES.map((c) => [c.id, LOADED.has(c.id) ? PRODUCTS.filter((p) => p.category === c.id).length : '…']),
  ),
)
// Categories still streaming in that the current filter would show.
const pending = computed(() =>
  CATEGORIES.filter((c) => !LOADED.has(c.id) && (state.category === 'all' || state.category === c.id)),
)
const categoryCount = computed(() => new Set(filtered.value.map((p) => p.category)).size)

function clearFilters() {
  state.query = ''
  state.category = 'all'
  state.freeOnly = false
}

function onKey(e) {
  if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && !state.detailId) {
    e.preventDefault()
    search.value?.focus()
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="hero">
    <h1>{{ t('hero.title') }}</h1>
    <p class="hero-sub">{{ t('app.tagline') }}</p>
    <p class="hero-stats mono">
      {{ t('hero.stats', { n: PRODUCTS.length, c: CATEGORIES.length, date: FX.date }) }}
    </p>
  </section>

  <section class="filters" :aria-label="t('filter.label')">
    <div class="prompt">
      <span class="caret mono" aria-hidden="true">&gt;</span>
      <label for="search" class="sr-only">{{ t('search.placeholder') }}</label>
      <input
        id="search"
        ref="search"
        v-model="state.query"
        type="search"
        autocomplete="off"
        :placeholder="t('search.placeholder')"
        @keydown.esc="state.query = ''"
      />
      <span class="hint mono">{{ t('search.hint') }}</span>
    </div>

    <div class="row">
      <div class="cats" role="group" :aria-label="t('row.category')">
        <button type="button" class="cat" :aria-pressed="state.category === 'all'" @click="state.category = 'all'">
          {{ t('filter.all') }} <span class="n mono">{{ PRODUCTS.length }}</span>
        </button>
        <button
          v-for="c in CATEGORIES"
          :key="c.id"
          type="button"
          class="cat"
          :aria-pressed="state.category === c.id"
          @click="state.category = c.id"
        >
          <span class="glyph" aria-hidden="true">{{ c.glyph }}</span>
          {{ tx(c.name) }} <span class="n mono">{{ counts[c.id] }}</span>
        </button>
      </div>
      <div class="tools">
        <label class="toggle">
          <input id="free-only" v-model="state.freeOnly" type="checkbox" />
          {{ t('filter.freeOnly') }}
        </label>
        <label class="field-inline">
          <span class="eyebrow">{{ t('sort.label') }}</span>
          <select id="sort" v-model="state.sort" class="select">
            <option value="featured">{{ t('sort.featured') }}</option>
            <option value="priceAsc">{{ t('sort.priceAsc') }}</option>
            <option value="priceDesc">{{ t('sort.priceDesc') }}</option>
            <option value="rating">{{ t('sort.rating') }}</option>
            <option value="name">{{ t('sort.name') }}</option>
          </select>
        </label>
      </div>
    </div>
    <p class="results mono" aria-live="polite">{{ t('results', { n: filtered.length, c: categoryCount }) }}</p>
  </section>

  <div v-if="!filtered.length && !pending.length" class="empty">
    <p>{{ t('noResults') }}</p>
    <button type="button" class="btn" @click="clearFilters">{{ t('clearFilters') }}</button>
  </div>

  <template v-else-if="grouped">
    <section v-for="g in grouped" :key="g.cat.id" class="group">
      <header class="group-head">
        <h2><span class="glyph" aria-hidden="true">{{ g.cat.glyph }}</span> {{ tx(g.cat.name) }}</h2>
        <p class="lens">{{ tx(g.cat.lens) }}</p>
      </header>
      <div class="grid">
        <ProductCard v-for="p in g.items" :key="p.id" :product="p" />
      </div>
    </section>
  </template>

  <div v-else class="grid">
    <ProductCard v-for="p in filtered" :key="p.id" :product="p" show-category />
  </div>

  <p v-if="pending.length" class="loading mono" aria-live="polite">
    {{ t('gallery.loading', { list: pending.map((c) => tx(c.name)).join(' · ') }) }}
  </p>
</template>

<style scoped>
.hero {
  padding-block: 20px 28px;
  max-width: 760px;
}
.hero h1 {
  font-size: clamp(30px, 4.4vw, 46px);
  letter-spacing: -0.015em;
}
.hero-sub {
  margin: 12px 0 0;
  color: var(--ink-2);
  font-size: 17px;
}
.hero-stats {
  margin: 14px 0 0;
  font-size: 12px;
  color: var(--muted);
}

.filters {
  display: grid;
  gap: 14px;
  margin-bottom: 28px;
}
.prompt {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-md);
  background: var(--surface);
  padding: 4px 14px;
  min-height: 52px;
}
.prompt:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}
.caret {
  color: var(--accent);
  font-size: 17px;
}
.prompt input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  font-size: 16px;
  padding: 10px 0;
  outline: none;
}
.hint {
  font-size: 11px;
  color: var(--muted);
  white-space: nowrap;
}
@media (max-width: 560px) {
  .hint {
    display: none;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  align-items: center;
  justify-content: space-between;
}
.cats {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.cat {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 13px;
  cursor: pointer;
}
.cat:hover {
  border-color: var(--line-strong);
}
.cat[aria-pressed='true'] {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}
.cat[aria-pressed='true'] .n {
  color: inherit;
  opacity: 0.7;
}
.n {
  font-size: 11px;
  color: var(--muted);
}
.glyph {
  color: var(--accent);
}
.cat[aria-pressed='true'] .glyph {
  color: inherit;
}
.tools {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
.toggle {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
}
.toggle input {
  accent-color: var(--accent);
  width: 16px;
  height: 16px;
}
.field-inline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.results {
  margin: 0;
  font-size: 12px;
  color: var(--muted);
}

.group {
  margin-bottom: 40px;
}
.group-head {
  display: flex;
  align-items: baseline;
  gap: 6px 18px;
  flex-wrap: wrap;
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--line);
}
.group-head h2 {
  font-size: 24px;
}
.lens {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  max-width: 70ch;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr));
  gap: 16px;
}
.loading {
  margin: 8px 0 0;
  font-size: 12px;
  color: var(--muted);
}
.empty {
  padding: 48px 0;
  display: grid;
  justify-items: start;
  gap: 12px;
  color: var(--ink-2);
}
</style>
