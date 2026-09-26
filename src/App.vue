<script setup>
import { watchEffect } from 'vue'
import { state } from './store.js'
import { LOCALES } from './i18n/ui.js'
import { t } from './i18n/index.js'
import { FX } from './data/fx.js'
import AppHeader from './components/AppHeader.vue'
import GalleryView from './components/GalleryView.vue'
import CompareView from './components/CompareView.vue'
import CompareTray from './components/CompareTray.vue'
import ProductModal from './components/ProductModal.vue'

watchEffect(() => {
  const root = document.documentElement
  root.dataset.palette = state.palette
  root.lang = LOCALES.find((l) => l.id === state.locale).html
  document.title = t('app.name')
})
</script>

<template>
  <AppHeader />
  <main class="wrap main">
    <GalleryView v-if="state.view === 'gallery'" />
    <CompareView v-else />
    <p class="footer">{{ t('footer.data', { date: FX.date }) }}</p>
  </main>
  <CompareTray v-if="state.view === 'gallery'" />
  <ProductModal />
</template>

<style scoped>
.main {
  padding-block: 24px 120px;
}
.footer {
  margin-top: 48px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 12.5px;
  max-width: 72ch;
}
</style>
