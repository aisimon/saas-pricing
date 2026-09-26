<script setup>
import { computed } from 'vue'
import { state, removeCompare, MAX } from '../store.js'
import { t } from '../i18n/index.js'
import { PRODUCT_BY_ID } from '../data/products/index.js'
import { useSeriesColor } from '../lib/colors.js'

const color = useSeriesColor()
function openCompare() {
  state.view = 'compare'
  window.scrollTo(0, 0)
}
const items = computed(() => state.compare.map((id) => PRODUCT_BY_ID[id]).filter(Boolean))
</script>

<template>
  <div v-if="items.length" class="tray" role="region" :aria-label="t('nav.compare')">
    <div class="wrap inner">
      <span class="label mono">{{ t('tray.selected', { n: items.length }) }} / {{ MAX }}</span>
      <ul class="list">
        <li v-for="p in items" :key="p.id">
          <span class="dot" :style="{ background: color(p.id) }" aria-hidden="true"></span>
          {{ p.name }}
          <button type="button" class="x" :aria-label="t('remove', { name: p.name })" @click="removeCompare(p.id)">×</button>
        </li>
      </ul>
      <div class="btns">
        <button type="button" class="btn btn-ghost" @click="state.compare = []">{{ t('tray.clear') }}</button>
        <button type="button" class="btn btn-primary" @click="openCompare">
          {{ t('tray.compare') }} →
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tray {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  background: var(--surface);
  border-top: 1px solid var(--line-strong);
  box-shadow: 0 -8px 24px -16px rgba(0, 0, 0, 0.3);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
.inner {
  display: flex;
  align-items: center;
  gap: 10px 16px;
  padding-block: 12px;
  flex-wrap: wrap;
}
.label {
  font-size: 12px;
  color: var(--muted);
}
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  min-width: 0;
}
.list li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  padding: 3px 4px 3px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--bg);
}
.x {
  border: 0;
  background: none;
  cursor: pointer;
  color: var(--muted);
  font-size: 16px;
  line-height: 1;
  width: 22px;
  height: 22px;
  border-radius: 50%;
}
.x:hover {
  background: var(--surface-2);
  color: var(--ink);
}
.btns {
  display: flex;
  gap: 6px;
}
</style>
