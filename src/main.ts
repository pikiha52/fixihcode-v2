import { createApp } from 'vue'
import './index.css'
// @ts-expect-error
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { TroisJSVuePlugin } from 'troisjs'
import Vue3Spline from 'vue3-spline'

const app = createApp(App)

app.use(TroisJSVuePlugin);
app.use(Vue3Spline)
app.use(router)
app.use(createPinia())

app.mount('#app')
