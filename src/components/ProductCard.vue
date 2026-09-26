<script setup>
import { computed } from 'vue'
import { state, inCompare, toggleCompare, MAX } from '../store.js'
import { t, tx, pText } from '../i18n/index.js'
import { CATEGORY_BY_ID } from '../data/categories.js'
import { hasFreeTier, paidTiers, tierUnitPrice } from '../lib/pricing.js'
import { money } from '../lib/format.js'
import { formatMetric } from '../lib/metrics.js'
import RatingLine from './RatingLine.vue'

const props = defineProps({ product: { type: Object, required: true }, showCategory: Boolean })

const cat = computed(() => CATEGORY_BY_ID[props.product.category])
const entry = computed(() => {
  const tiers = paidTiers(props.product)
  if (!tiers.length) return null
  return tiers.reduce((a, b) => (tierUnitPrice(b, state.billing) < tierUnitPrice(a, state.billing) ? b : a))
})
const initials = computed(() =>
  props.product.name
    .replace(/\(.*\)/, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase(),
)
const chips = computed(() =>
  cat.value.cardMetrics.map((key) => {
    const spec = cat.value.metrics.find((m) => m.key === key)
    return { key, label: tx(spec.label), value: formatMetric(props.product, spec) }
  }),
)
const added = computed(() => inCompare(props.product.id))
const full = computed(() => !added.value && state.compare.length >= MAX)
</script>

<template>
  <article class="card" :class="{ added }">
    <header class="head">
      <span class="mono-tile mono" aria-hidden="true">{{ initials }}</span>
      <div class="title">
        <h3>{{ product.name }}</h3>
        <p class="company">{{ product.company }}</p>
      </div>
      <span v-if="showCategory" class="chip"><span aria-hidden="true">{{ cat.glyph }}</span>{{ tx(cat.name) }}</span>
    </header>

    <p class="tagline">{{ pText(product, 'bestFor') }}</p>

    <div class="price">
      <template v-if="entry">
        <span class="from">{{ t('card.from') }}</span>
        <span class="amount">{{ entry.estimate ? '≈' : '' }}{{ money(tierUnitPrice(entry, state.billing), state.currency, state.locale) }}</span>
        <span class="unit">{{ t('card.perUserMonth') }}</span>
      </template>
      <span v-else class="amount">{{ hasFreeTier(product) ? t('card.free') : t('card.quote') }}</span>
      <div class="price-notes">
        <span v-if="hasFreeTier(product)" class="chip free">{{ t('card.freePlan') }}</span>
        <span v-if="entry?.minMonthly" class="chip">{{ t('card.minCharge', { v: money(entry.minMonthly, state.currency, state.locale) }) }}</span>
        <span class="chip">{{ t(`model.${product.pricingModel}`) }}</span>
      </div>
    </div>

    <dl class="metrics">
      <div v-for="c in chips" :key="c.key">
        <dt>{{ c.label }}</dt>
        <dd>{{ c.value }}</dd>
      </div>
    </dl>

    <RatingLine :ratings="product.ratings" compact />

    <footer class="actions">
      <button
        type="button"
        class="btn"
        :class="{ 'is-on': added }"
        :disabled="full"
        :title="full ? t('card.full') : ''"
        :aria-pressed="added"
        @click="toggleCompare(product.id)"
      >
        <span aria-hidden="true">{{ added ? '✓' : '+' }}</span>
        {{ added ? t('card.added') : t('card.add') }}
      </button>
      <button type="button" class="btn btn-ghost" @click="state.detailId = product.id">{{ t('card.details') }} →</button>
    </footer>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 18px;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.card:hover {
  border-color: var(--line-strong);
  box-shadow: var(--shadow);
}
.card.added {
  border-color: var(--accent);
}
.head {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.mono-tile {
  width: 40px;
  height: 40px;
  flex: none;
  display: grid;
  place-items: center;
  border-radius: var(--r-sm);
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 14px;
  font-weight: 500;
}
.title {
  flex: 1;
  min-width: 0;
}
h3 {
  font-size: 19px;
  font-weight: 600;
}
.company {
  margin: 2px 0 0;
  font-size: 12.5px;
  color: var(--muted);
  overflow-wrap: anywhere;
}
.tagline {
  margin: 0;
  color: var(--ink-2);
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 6px;
  padding-top: 12px;
  border-top: 1px dashed var(--line);
}
.from,
.unit {
  font-size: 12.5px;
  color: var(--muted);
}
.amount {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.price-notes {
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.chip.free {
  background: var(--accent-soft);
  color: var(--ink);
}
.metrics {
  display: grid;
  gap: 6px;
  margin: 0;
  font-size: 13px;
}
.metrics div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.metrics dt {
  color: var(--muted);
}
.metrics dd {
  margin: 0;
  text-align: right;
  font-weight: 500;
}
.actions {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-top: 4px;
}
</style>
