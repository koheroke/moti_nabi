import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from './lib/vuetify'
import { router } from './app/router'
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')

