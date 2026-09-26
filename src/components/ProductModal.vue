<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { state, inCompare, toggleCompare, MAX } from '../store.js'
import { t, tx, pText, tierText } from '../i18n/index.js'
import { PRODUCT_BY_ID } from '../data/products/index.js'
import { CATEGORY_BY_ID } from '../data/categories.js'
import { money, num } from '../lib/format.js'
import { formatMetric } from '../lib/metrics.js'
import { FX } from '../data/fx.js'
import RatingLine from './RatingLine.vue'

const dialog = ref(null)
const p = computed(() => (state.detailId ? PRODUCT_BY_ID[state.detailId] : null))
const cat = computed(() => p.value && CATEGORY_BY_ID[p.value.category])

watch(p, async (val) => {
  await nextTick()
  if (val && !dialog.value.open) dialog.value.showModal()
  if (!val && dialog.value?.open) dialog.value.close()
})

function close() {
  state.detailId = null
}
function onBackdrop(e) {
  if (e.target === dialog.value) close()
}
function priceCell(tier) {
  if (tier.custom) return t('card.quote')
  if (tier.price === 0) return t('card.free')
  return (tier.estimate ? '≈' : '') + money(tier.price, state.currency, state.locale)
}
function limitCell(tier) {
  const bits = []
  if (tier.maxUsers) bits.push(t('modal.upTo', { n: num(tier.maxUsers, state.locale) }))
  if (tier.minSeats) bits.push(t('modal.minSeats', { n: tier.minSeats }))
  if (tier.freeSeats) bits.push(t('modal.freeSeats', { n: num(tier.freeSeats, state.locale) }))
  return bits.join(' · ') || '—'
}
function annualCell(tier) {
  if (tier.annual != null) return money(tier.annual, state.currency, state.locale)
  return tier.annualOnly ? t('modal.annualOnly') : '—'
}
function minimumCell(tier) {
  return tier.minMonthly ? money(tier.minMonthly, state.currency, state.locale) : '—'
}
// Columns that would read "—" on every plan of this product are dropped.
const columns = computed(() => {
  if (!p.value) return []
  return [
    { key: 'price', label: p.value.priceUnit === 'account' ? 'modal.priceAccount' : 'modal.price', num: true, cell: priceCell },
    { key: 'annual', label: 'modal.annual', num: true, cell: annualCell },
    { key: 'minimum', label: 'modal.minimum', num: true, cell: minimumCell },
    { key: 'users', label: 'modal.users', num: false, cell: limitCell },
  ].filter((c) => p.value.tiers.some((tier) => c.cell(tier) !== '—'))
})
const showIncludes = computed(
  () => !!p.value && p.value.tiers.some((_, i) => tierText(p.value, i, 'quota') || tierText(p.value, i, 'highlights')?.length),
)
</script>

<template>
  <dialog ref="dialog" class="modal" :aria-label="p?.name" @close="close" @click="onBackdrop">
    <div v-if="p" class="body">
      <header class="head">
        <div>
          <p class="eyebrow"><span aria-hidden="true">{{ cat.glyph }}</span> {{ tx(cat.name) }} · {{ t(`model.${p.pricingModel}`) }}</p>
          <h2>{{ p.name }}</h2>
          <p class="company">{{ p.company }}</p>
        </div>
        <button type="button" class="btn btn-ghost close" :aria-label="t('modal.close')" @click="close">✕</button>
      </header>

      <p class="lead">{{ pText(p, 'bestFor') }}</p>
      <RatingLine :ratings="p.ratings" />

      <section>
        <h3 class="eyebrow">{{ t('modal.plans') }}</h3>
        <div class="table-wrap">
          <table class="tiers">
            <thead>
              <tr>
                <th>{{ t('modal.plan') }}</th>
                <th v-for="c in columns" :key="c.key" :class="{ num: c.num }">{{ t(c.label) }}</th>
                <th v-if="showIncludes">{{ t('modal.includes') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tier, i) in p.tiers" :key="tier.name">
                <th scope="row">{{ tier.name }}</th>
                <td v-for="c in columns" :key="c.key" :class="{ num: c.num, tabular: c.num }">{{ c.cell(tier) }}</td>
                <td v-if="showIncludes" class="inc">
                  <span class="quota">{{ tierText(p, i, 'quota') }}</span>
                  <ul>
                    <li v-for="h in tierText(p, i, 'highlights')" :key="h">{{ h }}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="note">{{ t('note.prices', { date: FX.date }) }}</p>
      </section>

      <section class="two">
        <div>
          <h3 class="eyebrow">{{ t('modal.strengths') }}</h3>
          <ul class="bul plus">
            <li v-for="s in pText(p, 'strengths')" :key="s">{{ s }}</li>
          </ul>
        </div>
        <div>
          <h3 class="eyebrow">{{ t('modal.weaknesses') }}</h3>
          <ul class="bul minus">
            <li v-for="s in pText(p, 'weaknesses')" :key="s">{{ s }}</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 class="eyebrow">{{ t('row.strategy') }}</h3>
        <p>{{ pText(p, 'strategy') }}</p>
      </section>

      <section>
        <h3 class="eyebrow">{{ t('modal.metrics') }}</h3>
        <dl class="kv">
          <div v-for="m in cat.metrics" :key="m.key">
            <dt>{{ tx(m.label) }}</dt>
            <dd>{{ formatMetric(p, m) }}</dd>
          </div>
        </dl>
      </section>

      <section class="meta">
        <h3 class="eyebrow">{{ t('modal.confidence') }}</h3>
        <p>{{ pText(p, 'confidence') }}</p>
        <h3 class="eyebrow">{{ t('modal.sources') }}</h3>
        <ul class="sources">
          <li v-for="s in p.sources" :key="s"><a :href="s" target="_blank" rel="noopener noreferrer">{{ s.replace(/^https?:\/\/(www\.)?/, '') }}</a></li>
        </ul>
      </section>

      <footer class="foot">
        <a class="btn" :href="p.url" target="_blank" rel="noopener noreferrer">{{ t('modal.visit') }} ↗</a>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!inCompare(p.id) && state.compare.length >= MAX"
          @click="toggleCompare(p.id)"
        >
          {{ inCompare(p.id) ? '✓ ' + t('card.added') : '+ ' + t('card.add') }}
        </button>
      </footer>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  width: min(880px, calc(100vw - 32px));
  max-height: calc(100dvh - 48px);
  padding: 0;
  border: 1px solid var(--line-strong);
  border-radius: var(--r-lg);
  background: var(--surface);
  color: var(--ink);
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.5);
}
.modal::backdrop {
  background: rgba(10, 14, 12, 0.45);
  backdrop-filter: blur(2px);
}
.body {
  padding: 24px;
  display: grid;
  gap: 22px;
}
.head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
h2 {
  font-size: 30px;
  margin-top: 6px;
}
.company {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 13px;
}
.close {
  align-self: flex-start;
}
.lead {
  margin: 0;
  font-size: 16px;
  color: var(--ink-2);
  max-width: 68ch;
}
section h3 {
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-weight: 400;
}
section p {
  margin: 0;
  max-width: 72ch;
}
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: var(--r-md);
}
.tiers {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 640px;
}
.tiers th,
.tiers td {
  text-align: left;
  padding: 10px 12px;
  vertical-align: top;
  border-bottom: 1px solid var(--line);
}
.tiers thead th {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
  background: var(--bg);
}
.tiers tbody tr:last-child > * {
  border-bottom: 0;
}
.tiers tbody th {
  font-weight: 600;
  white-space: nowrap;
}
.num {
  text-align: right !important;
  white-space: nowrap;
}
.inc ul {
  margin: 4px 0 0;
  padding-left: 16px;
  color: var(--ink-2);
}
.quota {
  color: var(--muted);
}
.note {
  margin-top: 8px !important;
  font-size: 12px;
  color: var(--muted);
}
.two {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 20px;
}
.bul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
  font-size: 14px;
}
.bul li {
  padding-left: 20px;
  position: relative;
}
.bul li::before {
  position: absolute;
  left: 0;
  font-family: var(--font-mono);
  color: var(--muted);
}
.plus li::before {
  content: '+';
  color: var(--accent);
}
.minus li::before {
  content: '−';
}
.kv {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 8px 24px;
  margin: 0;
  font-size: 13.5px;
}
.kv div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--line);
}
.kv dt {
  color: var(--muted);
}
.kv dd {
  margin: 0;
  text-align: right;
  font-weight: 500;
}
.meta {
  font-size: 12.5px;
  color: var(--muted);
  display: grid;
  gap: 6px;
}
.meta h3 {
  margin: 6px 0 0;
}
.sources {
  margin: 0;
  padding-left: 16px;
  overflow-wrap: anywhere;
}
.foot {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  position: sticky;
  bottom: -24px;
  margin: 0 -24px -24px;
  padding: 14px 24px;
  background: var(--surface);
  border-top: 1px solid var(--line);
}
.foot a {
  text-decoration: none;
  color: var(--ink);
}
</style>
