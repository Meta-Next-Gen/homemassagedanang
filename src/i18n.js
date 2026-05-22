import { createI18n } from 'vue-i18n'
import vi from './locales/vi.json'
import en from './locales/en.json'

export const SUPPORT_LOCALES = ['vi', 'en']
export const DEFAULT_LOCALE = 'vi'

export function setupI18n(locale = DEFAULT_LOCALE) {
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages: { vi, en },
  })
}
