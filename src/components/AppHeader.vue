<script setup>
import { state } from '../store.js'
import { t } from '../i18n/index.js'
import { LOCALES } from '../i18n/ui.js'
import { CURRENCIES } from '../lib/format.js'
import { PALETTES } from '../palettes.js'
</script>

<template>
  <header class="header">
    <div class="wrap bar">
      <button class="brand" type="button" @click="state.view = 'gallery'">
        <span class="spark" aria-hidden="true">✻</span>
        <span class="brand-name">{{ t('app.name') }}</span>
      </button>

      <nav class="tabs" :aria-label="t('app.name')">
        <button type="button" :aria-current="state.view === 'gallery' ? 'page' : null" @click="state.view = 'gallery'">
          {{ t('nav.gallery') }}
        </button>
        <button type="button" :aria-current="state.view === 'compare' ? 'page' : null" @click="state.view = 'compare'">
          {{ t('nav.compare') }}
          <span class="count mono">{{ state.compare.length }}</span>
        </button>
      </nav>

      <div class="controls">
        <label class="ctl">
          <span class="sr-only">{{ t('ctl.language') }}</span>
          <select id="locale" v-model="state.locale" class="select" :title="t('ctl.language')">
            <option v-for="l in LOCALES" :key="l.id" :value="l.id">{{ l.label }}</option>
          </select>
        </label>
        <label class="ctl">
          <span class="sr-only">{{ t('ctl.currency') }}</span>
          <select id="currency" v-model="state.currency" class="select mono" :title="t('ctl.currency')">
            <option v-for="c in CURRENCIES" :key="c" :value="c">{{ c }} · {{ t(`cur.${c}`) }}</option>
          </select>
        </label>
        <div class="seg billing" role="group" :aria-label="t('ctl.billing')">
          <button type="button" :aria-pressed="state.billing === 'monthly'" @click="state.billing = 'monthly'">
            {{ t('billing.monthly') }}
          </button>
          <button type="button" :aria-pressed="state.billing === 'annual'" @click="state.billing = 'annual'">
            {{ t('billing.annual') }}
          </button>
        </div>
        <div class="palettes" role="radiogroup" :aria-label="t('ctl.palette')">
          <button
            v-for="p in PALETTES"
            :key="p.id"
            type="button"
            role="radio"
            class="swatch"
            :aria-checked="state.palette === p.id"
            :title="t(`palette.${p.id}`)"
            :style="{ '--sw-bg': p.swatch[0], '--sw-accent': p.swatch[1] }"
            @click="state.palette = p.id"
          >
            <span class="sr-only">{{ t(`palette.${p.id}`) }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: env(safe-area-inset-top, 0px);
  z-index: 20;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.bar {
  display: flex;
  align-items: center;
  gap: 16px 24px;
  min-height: 60px;
  flex-wrap: wrap;
  padding-block: 10px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
}
.spark {
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
}
.brand-name {
  font-family: var(--font-serif);
  font-size: 21px;
  letter-spacing: -0.01em;
}
.tabs {
  display: flex;
  gap: 4px;
}
.tabs button {
  border: 0;
  background: none;
  padding: 6px 10px;
  border-radius: var(--r-sm);
  cursor: pointer;
  color: var(--ink-2);
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tabs button:hover {
  background: var(--surface-2);
}
.tabs button[aria-current='page'] {
  color: var(--ink);
  background: var(--surface-2);
  font-weight: 600;
}
.count {
  font-size: 11px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: inline-grid;
  place-items: center;
  border-radius: 9px;
  background: var(--accent);
  color: var(--accent-ink);
}
.controls {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.palettes {
  display: flex;
  gap: 6px;
  padding-left: 4px;
}
.swatch {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  background: linear-gradient(135deg, var(--sw-bg) 50%, var(--sw-accent) 50%);
  cursor: pointer;
  padding: 0;
}
.swatch[aria-checked='true'] {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
@media (max-width: 720px) {
  .controls {
    margin-left: 0;
    width: 100%;
  }
}
</style>
