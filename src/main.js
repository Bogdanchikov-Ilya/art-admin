import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vClickOutside from "click-outside-vue3"

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

// import MainLayout from './layouts/MainLayout.vue'
// import EmptyLayout from './layouts/EmptyLayout.vue'

const app = createApp(App)

// app.comment('MainLayout', MainLayout)
// app.component('EmptyLayout', EmptyLayout)

app.use(createPinia())
app.use(router, vClickOutside)

app.mount('#app')
