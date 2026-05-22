<script setup>
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

useHead(computed(() => ({
  htmlAttrs: { lang: locale.value === 'en' ? 'en' : 'vi' },
  title: t('meta.title'),
  meta: [
    { name: 'description', content: t('meta.description') },
    { property: 'og:title', content: t('meta.ogTitle') },
    { property: 'og:description', content: t('meta.ogDescription') },
    { property: 'og:image', content: t('meta.ogImage') },
    { property: 'og:image:alt', content: t('meta.ogTitle') },
    { property: 'og:url', content: t('meta.ogUrl') },
    { property: 'og:locale', content: t('meta.ogLocale') },
    { property: 'og:locale:alternate', content: t('meta.ogLocaleAlternate') },
    { name: 'twitter:title', content: t('meta.twitterTitle') },
    { name: 'twitter:description', content: t('meta.twitterDescription') },
    { name: 'twitter:image', content: t('meta.ogImage') },
  ],
})))
</script>

<template>
  <router-view />
</template>
