import { createApp } from 'vue'
import './style.css'
import './styles/base/layout.css'
import './styles/base/uiColorScheme.css'
import App from './App.vue'
import { createPinia } from 'pinia' // 1. インポート
import { vuetify } from './lib/vuetify'
import { router } from './app/router'
const app = createApp(App)
const pinia = createPinia()
app.use(vuetify)
app.use(pinia)
app.use(router)
app.mount('#app')

import { useRouterBlock } from '@/app/router/routerBlock'
useRouterBlock(router, pinia)



