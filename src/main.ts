import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const store = createPinia()
const app = createApp(App)

app.use(store)

app.mount('#app')
