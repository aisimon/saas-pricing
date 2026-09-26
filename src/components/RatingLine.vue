<script setup>
import { computed } from 'vue'
import { state } from '../store.js'
import { t } from '../i18n/index.js'
import { num } from '../lib/format.js'

const props = defineProps({ ratings: { type: Object, required: true }, compact: Boolean })

const SOURCES = [
  ['trustpilot', 'Trustpilot'],
  ['g2', 'G2'],
  ['capterra', 'Capterra'],
]
const items = computed(() =>
  SOURCES.filter(([k]) => props.ratings[k]?.score != null)
    .map(([k, label]) => ({ k, label, ...props.ratings[k] }))
    .slice(0, props.compact ? 2 : 3),
)
</script>

<template>
  <div class="ratings">
    <template v-if="items.length">
      <span v-for="r in items" :key="r.k" class="r" :title="r.reviews ? t('ratings.reviews', { n: num(r.reviews, state.locale) }) : ''">
        <span class="star" aria-hidden="true">★</span>
        <strong class="tabular">{{ r.score.toFixed(1) }}</strong>
        <span class="src">{{ r.label }}</span>
        <span v-if="r.reviews" class="cnt mono">{{ num(r.reviews, state.locale, { compact: true }) }}</span>
      </span>
    </template>
    <span v-else class="none">{{ t('ratings.none') }}</span>
  </div>
</template>

<style scoped>
.ratings {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  font-size: 13px;
  align-items: baseline;
}
.r {
  display: inline-flex;
  gap: 4px;
  align-items: baseline;
}
.star {
  color: var(--accent);
  font-size: 12px;
}
.src {
  color: var(--ink-2);
}
.cnt {
  font-size: 11px;
  color: var(--muted);
}
.none {
  color: var(--muted);
  font-size: 12.5px;
}
</style>
