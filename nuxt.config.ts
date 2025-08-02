import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,

  css: [
    '@/assets/css/tailwind.css',
  ],

  app: {
    head: {
      title: 'Massage in Đà Nẵng - Thư Giãn Chuyên Nghiệp',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Khám phá dịch vụ massage thư giãn và trị liệu chuyên nghiệp tại Đà Nẵng. Đội ngũ kỹ thuật viên tay nghề cao, không gian yên tĩnh, giúp bạn phục hồi năng lượng.' },
        // Open Graph Meta Tags
        { property: 'og:title', content: 'Massage tại nhà - Đà Nẵng - Thư Giãn Chuyên Nghiệp' },
        { property: 'og:description', content: 'Khám phá dịch vụ massage tại nhà thư giãn và trị liệu chuyên nghiệp ở Đà Nẵng. Đội ngũ kỹ thuật viên tay nghề cao, không gian yên tĩnh, giúp bạn phục hồi năng lượng.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://massageindanang.com/' },
        { property: 'og:image', content: 'https://massageindanang.com/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Massage In Da Nang' },
        { property: 'og:locale', content: 'vi_VN' },

        // Twitter Card Meta Tags
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:site', content: '@massageindanang' }, // Thay @massageindanang bằng username Twitter của bạn
        // { name: 'twitter:creator', content: '@massageindanang' }, // Thay @massageindanang bằng username Twitter của bạn
        // { name: 'twitter:title', content: 'Massage Đà Nẵng - Thư Giãn Chuyên Nghiệp' },
        // { name: 'twitter:description', content: 'Khám phá dịch vụ massage thư giãn và trị liệu chuyên nghiệp tại Đà Nẵng. Đội ngũ kỹ thuật viên tay nghề cao, không gian yên tĩnh, giúp bạn phục hồi năng lượng.' },
        // { name: 'twitter:image', content: 'https://massageindanang.com/images/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logos/fav.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap',
          crossorigin: ''
        }
      ]
    }
  },
  i18n: {
    defaultLocale: 'vi',
    baseUrl: 'https://massageindanang.com',
    locales: [
      { code: 'en', iso: 'en-US', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'vi', iso: 'vi-VN', language: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
      { code: 'ja', iso: 'ja-JP', language: 'ja-JP', name: '日本語', file: 'ja.json' },
      { code: 'cn', iso: 'zh-CN', language: 'zh-CN', name: '中文', file: 'cn.json' },
      { code: 'kr', iso: 'ko-KR', language: 'ko-KR', name: '한국어', file: 'kr.json' }
    ],
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxtjs/i18n']
})
