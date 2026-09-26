<script setup>
import { computed, ref } from 'vue'
import { state } from '../store.js'
import { t } from '../i18n/index.js'
import { PRODUCTS } from '../data/products/index.js'
import { entryPrice, hasFreeTier, reputation } from '../lib/pricing.js'
import { money } from '../lib/format.js'

// A single enthusiastic review shouldn't crown the "best reviewed" pick.
const MIN_REVIEWS = 100

const cheapestAi = computed(() => {
  let best = null
  for (const p of PRODUCTS) {
    if (p.category !== 'ai_assistant') continue
    const price = entryPrice(p, state.billing)
    if (price != null && (!best || price < best.price)) best = { p, price }
  }
  return best
})

const topRated = computed(() => {
  let best = null
  for (const p of PRODUCTS) {
    const reviews = Object.values(p.ratings || {}).reduce((n, r) => n + (r?.reviews || 0), 0)
    const score = reputation(p)
    if (score != null && reviews >= MIN_REVIEWS && (!best || score > best.score)) best = { p, score }
  }
  return best
})

const freeCount = computed(() => PRODUCTS.filter(hasFreeTier).length)

const copied = ref(false)
async function share() {
  const url = location.href.split('#')[0]
  try {
    if (navigator.share) return await navigator.share({ title: t('app.name'), text: t('app.tagline'), url })
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* share sheet dismissed or clipboard blocked: nothing to do */
  }
}
</script>

<template>
  <aside class="spotlight" :aria-label="t('spot.eyebrow')">
    <p class="eyebrow">{{ t('spot.eyebrow') }}</p>
    <ul class="pitch">
      <li>
        <span class="mark" aria-hidden="true">✓</span>
        <span><strong>{{ t('spot.p1title') }}</strong> {{ t('spot.p1') }}</span>
      </li>
      <li>
        <span class="mark" aria-hidden="true">⇄</span>
        <span><strong>{{ t('spot.p2title') }}</strong> {{ t('spot.p2') }}</span>
      </li>
      <li>
        <span class="mark" aria-hidden="true">¤</span>
        <span><strong>{{ t('spot.p3title') }}</strong> {{ t('spot.p3') }}</span>
      </li>
    </ul>

    <div class="now">
      <p class="eyebrow">{{ t('spot.now') }}</p>
      <dl>
        <div v-if="cheapestAi" class="fact">
          <dt>{{ t('spot.cheapestAi') }}</dt>
          <dd>
            <button type="button" class="link" @click="state.detailId = cheapestAi.p.id">{{ cheapestAi.p.name }}</button>
            <span class="val mono">{{ money(cheapestAi.price, state.currency, state.locale) }}</span>
          </dd>
        </div>
        <div v-if="topRated" class="fact">
          <dt>{{ t('spot.topRated') }}</dt>
          <dd>
            <button type="button" class="link" @click="state.detailId = topRated.p.id">{{ topRated.p.name }}</button>
            <span class="val mono">★ {{ topRated.score.toFixed(1) }}</span>
          </dd>
        </div>
        <div class="fact">
          <dt>{{ t('spot.free') }}</dt>
          <dd>
            <span class="val mono">{{ t('spot.freeValue', { n: freeCount, total: PRODUCTS.length }) }}</span>
          </dd>
        </div>
      </dl>
    </div>

    <div class="cta">
      <button type="button" class="btn btn-primary" @click="state.view = 'compare'">{{ t('spot.compare') }} →</button>
      <button type="button" class="btn" @click="share">{{ copied ? t('spot.copied') : t('spot.share') }}</button>
    </div>
  </aside>
</template>

<style scoped>
.spotlight {
  display: grid;
  gap: 14px;
  align-content: start;
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  background: var(--surface);
  box-shadow: var(--shadow);
  padding: 18px 22px;
}
.spotlight .eyebrow {
  margin: 0;
}
.pitch {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  font-size: 13.5px;
  color: var(--ink-2);
}
.pitch li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 8px;
  align-items: center;
}
.pitch strong {
  color: var(--ink);
  font-weight: 600;
}
.mark {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 12px;
}
.now {
  display: grid;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px dashed var(--line-strong);
}
dl {
  margin: 0;
  display: grid;
  gap: 6px;
}
.fact {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  font-size: 13px;
}
dt {
  color: var(--muted);
}
dd {
  margin: 0;
  display: inline-flex;
  gap: 8px;
  align-items: baseline;
  min-width: 0;
}
.link {
  border: 0;
  background: none;
  padding: 0;
  font: inherit;
  font-weight: 600;
  color: var(--ink);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 3px;
}
.link:hover {
  text-decoration-color: var(--accent);
}
.val {
  color: var(--accent);
  font-size: 12.5px;
  white-space: nowrap;
}
.cta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.cta .btn {
  padding: 8px 14px;
}
</style>
