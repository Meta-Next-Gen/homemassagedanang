import Home from '../pages/Home.vue'

export const routes = [
  { path: '/', component: Home, meta: { locale: 'vi' } },
  { path: '/en/', component: Home, meta: { locale: 'en' } },
]
