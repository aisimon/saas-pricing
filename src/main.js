import { createApp } from 'vue'
import App from './App.vue'
import { loadRemainingCategories } from './data/products/index.js'
import './style.css'

createApp(App).mount('#app')
loadRemainingCategories()
