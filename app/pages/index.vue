<template>
  <header class="py-4">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="block">
        <img src="/images/logo-black.png" alt="Massage Đà Nẵng Logo" class="h-12" width="169" height="48">
      </a>
      <!-- Nút thay đổi ngôn ngữ với biểu tượng lá cờ -->
      <div class="relative">
        <button @click="state.showLanguage = !state.showLanguage" aria-label="Change Language">
          <img :src="`/flags/${locale}.svg`" :alt="locale" width="32" height="32">
        </button>
        <Transition enter-active-class="animate-fade-left" leave-active-class="animate-fade-left animate-reverse">
          <div v-if="state.showLanguage" class="absolute right-0 bg-white rounded-lg shadow-lg flex space-x-2 px-2">
            <template v-for="locale in locales" :key="locale.code">
              <button @click="setLocale(locale.code)" class=" w-8 h-8 ">
                <img :src="`/flags/${locale.code}.svg`" :alt="locale.code" width="32" height="32" class="inline">
              </button>
            </template>
          </div>
        </Transition>
      </div>
    </nav>
  </header>

  <main>
    <!-- Hero Section -->
    <!-- Phần Hero đã được cập nhật thành bố cục 2 cột -->
    <section id="hero" class="md:h-screen flex items-center justify-center ">
      <!-- Đã loại bỏ lớp phủ gradient nền, nền giờ là màu trắng -->
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Cột trái: Tiêu đề, giới thiệu và nút đặt lịch -->
        <div class="md:w-1/2 text-center md:text-left animate-fade-in-up">
          <h1 class="text-4xl md:text-9xl font-extrabold leading-tight mb-6 text-primary">
            {{ $t('hero.title') }} <span class="inline md:block">{{ $t('hero.subtitle') }}</span>
          </h1>
          <p class="text-lg md:text-xl mb-16 max-w-2xl mx-auto md:mx-0 text-gray-700">
            {{ $t('hero.description') }}
          </p>
          <a href="#footer"
            class="bg-primary text-white font-bold py-5 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            {{ $t('hero.button') }}
          </a>
        </div>
        <!-- Cột phải: Hình ảnh -->
        <div class="md:w-1/2 order-first md:order-last flex justify-center md:justify-end animate-fade-in-up delay-200">
          <img src="/images/banner.png" alt="Hình ảnh Massage" width="736" height="736"
            class="rounded-3xl shadow-2xl max-w-full h-auto object-cover">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary">{{ $t('services.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-12">{{ $t('services.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="item in $tm('services.items')">
            <div
              class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div class="text-primary mb-4 text-5xl text-center">
                <img :src="$rt(item.image)" :alt="$rt(item.title)" class="w-16 h-16 mx-auto">
              </div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">{{ $rt(item.title) }}</h3>
              <p class="text-gray-700 text-center">{{ $rt(item.description) }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Price List Section -->
    <section id="prices" class="py-16 bg-white">
      <div class="container mx-auto px-4 my-16">
        <h2 class="text-4xl font-bold text-center text-primary">{{ $t('price.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-12">{{ $t('price.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Massage Pricing -->
          <template v-for="service in $tm('price.services')">
            <div class="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-primary">
              <h3 class="text-3xl font-bold text-primary mb-6 text-center">{{ $rt(service.title) }}</h3>
              <ul class="space-y-4 text-lg text-gray-700">
                <template v-for="item in service.items">
                  <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                    <span>{{ $rt(item.name) }}</span>
                    <span class="font-semibold text-primary">{{ $rt(item.price) }}</span>
                  </li>
                </template>
              </ul>
              <p class="text-gray-600 italic text-sm" v-if="service.description">{{ $rt(service.description) }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <img src="/images/about-us.jpg" :alt="$t('about.title')" width="736" height="617"
            class="rounded-xl shadow-lg w-full h-auto object-cover">
        </div>
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold text-primary mb-6">{{ $t('about.title') }}</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ $t('about.description') }}
          </p>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('about.mission') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary ">{{ $t('testimonials.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-12">{{ $t('testimonials.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-for="testimonial in $tm('testimonials.items')">
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <p class="text-gray-700 italic mb-6">"{{ $rt(testimonial.content) }}"</p>
              <div class="flex items-center">
                <img :src="$rt(testimonial.avatar)" :alt="$rt(testimonial.name)"
                  class="w-16 h-16 rounded-full mr-4 object-cover">
                <div>
                  <p class="font-semibold text-gray-900">{{ $rt(testimonial.name) }}</p>
                  <p class="text-gray-600 text-sm">{{ $rt(testimonial.description) }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer id="footer" class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <!-- Footer content wrapper for two columns -->
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
        <!-- Left Column: Logo, Contact Info and Copyright -->
        <div class="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
          <!-- Logo added here -->
          <a href="#" class="block mb-4">
            <img src="/images/logo-white.png" alt="Massage Đà Nẵng Logo" class="mx-auto md:mx-0 h-12" width="169"
              height="48">
          </a>
          <!-- Copyright text moved here -->
          <p class="text-center md:text-left mt-4 pt-4 border-t border-gray-700 md:border-t-0 md:pt-0">{{
            $t('footer.copyright') }}</p>
        </div>

        <!-- Right Column: Social Media -->
        <div class="text-center md:text-right md:w-1/2 order-first md:order-last mb-10">
          <p class="text-lg font-semibold mb-4">{{ $t('footer.title') }}</p>
          <div class="flex justify-center md:justify-end space-x-6">
            <a href="tel:0789489459" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/phone.svg" alt="Phone" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://www.facebook.com/lien.phan.413325#"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/facebook.svg" alt="Facebook" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="http://qr.kakao.com/talk/RKGLmzR6kDq4.b17wlsO.ClBFiw-"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://zaloapp.com/qr/p/140qbin8a5e2d?src=qr"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/zalo.svg" alt="Zalo" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://wa.me/qr/WJTF2BIQME3EB1" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://u.wechat.com/kKScc93Ie77PvEZe-8hpzYI?s=2"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/wechat.svg" alt="WeChat" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://vt.tiktok.com/ZSS8nQFrv/" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/tiktok.svg" alt="TikTok" class="h-6 w-6" width="24" height="24">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="fixed bottom-8 right-8 z-50">
    <button
      class="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-110 cursor-pointer"
      @click="state.showHelp = !state.showHelp" aria-label="Contact Us">
      <img src="/logos/help.svg" alt="Help" class="h-12 w-12">
    </button>

    <Transition enter-active-class="animate-fade-up" leave-active-class="animate-fade-up animate-reverse">
      <div v-if="state.showHelp"
        class="absolute bottom-full right-1/2 translate-x-1/2 rounded-xl grid gap-3 mb-4 bg-white shadow-lg">
        <a href="tel:0789489459" target="_blank">
          <img src="/logos/phone.svg" alt="Phone" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://www.facebook.com/lien.phan.413325#" target="_blank">
          <img src="/logos/facebook.svg" alt="Facebook" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="http://qr.kakao.com/talk/RKGLmzR6kDq4.b17wlsO.ClBFiw-" target="_blank">
          <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://zaloapp.com/qr/p/140qbin8a5e2d?src=qr" target="_blank">
          <img src="/logos/zalo.svg" alt="Zalo" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://wa.me/qr/WJTF2BIQME3EB1" target="_blank">
          <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://u.wechat.com/kKScc93Ie77PvEZe-8hpzYI?s=2" target="_blank">
          <img src="/logos/wechat.svg" alt="WeChat" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://vt.tiktok.com/ZSS8nQFrv/" target="_blank">
          <img src="/logos/tiktok.svg" alt="TikTok" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
      </div>
    </Transition>
  </div>

</template>

<script lang="ts" setup>
const { locale, locales, setLocale, t } = useI18n()

const state = reactive({
  showLanguage: false,
  showHelp: false
})

useSeoMeta({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  description: t('seo.description'),
  ogDescription: t('seo.description'),
  ogImage: 'https://massageindanang.com/images/og-image.jpg'
});

</script>
