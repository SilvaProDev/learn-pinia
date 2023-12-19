// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/main.css'
// const pinia = createPinia()


 createApp(App).use(createPinia()).mount('#app')
