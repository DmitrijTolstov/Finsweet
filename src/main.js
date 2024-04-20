import './assets/main.css'

import { createApp } from 'vue'

import { router } from '@/routes/routes.js'

import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
