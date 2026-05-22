import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { setupI18n, SUPPORT_LOCALES, DEFAULT_LOCALE } from './i18n'
import './assets/main.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router }) => {
    const initialLocale =
      router.currentRoute.value.meta?.locale || DEFAULT_LOCALE
    const i18n = setupI18n(initialLocale)
    app.use(i18n)

    router.beforeEach((to) => {
      const locale = to.meta?.locale || DEFAULT_LOCALE
      if (SUPPORT_LOCALES.includes(locale)) {
        i18n.global.locale.value = locale
      }
    })
  },
)
