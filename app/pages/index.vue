<template>
  <header id="header" class="h-screen flex flex-col justify-between bg-cover bg-center ">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="block">
        <img src="/images/logo-white.png" alt="Massage Đà Nẵng Logo" class="h-12" width="169" height="48">
      </a>
      <!-- Nút thay đổi ngôn ngữ với biểu tượng lá cờ -->
      <div class="relative">
        <button @click="state.showLanguage = !state.showLanguage" aria-label="Change Language">
          <img :src="`/flags/${locale}.svg`" :alt="locale" width="32" height="32">
        </button>
        <Transition enter-active-class="animate-fade-left" leave-active-class="animate-fade-left animate-reverse">
          <div v-if="state.showLanguage" class="absolute right-0 bg-white rounded-lg shadow-lg flex space-x-2 px-2"
            v-on-click-outside="() => state.showLanguage = false">
            <template v-for="locale in locales" :key="locale.code">
              <button @click="setLocale(locale.code)" class=" w-8 h-8 ">
                <img :src="`/flags/${locale.code}.svg`" :alt="locale.code" width="32" height="32" class="inline">
              </button>
            </template>
          </div>
        </Transition>
      </div>
    </nav>
    <section id="hero" class="container mx-auto grow grid grid-cols-1 md:grid-cols-2 items-center ">
      <!-- Cột trái: Tiêu đề, giới thiệu và nút đặt lịch -->
      <div class="text-center md:text-left animate-fade-in-up px-2 ">
        <h1 class="text-4xl md:text-8xl font-extrabold leading-tight text-white">
          {{ $t('hero.title') }} <span class="inline md:block">{{ $t('hero.subtitle') }}</span>
        </h1>
        <hr class="hidden md:block md:w-3/4 text-white border-2 my-10" />
        <p class="text-lg md:text-xl mb-16 max-w-2xl mx-auto md:mx-0 text-white">
          {{ $t('hero.description') }}
        </p>
        <a href="#footer"
          class="bg-primary text-white font-bold py-5 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          {{ $t('hero.button') }}
        </a>
      </div>
      <!-- Cột phải: Hình ảnh -->
      <div class="order-first md:order-last flex justify-center md:justify-end animate-fade-in-up delay-200">
        <img src="/images/hero.png" alt="Hình ảnh Massage" width="736" height="736" class="rounded-3xl object-contain">
      </div>
    </section>
  </header>

  <main>
    <!-- Services Section -->
    <section id="services" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-center text-primary">{{ $t('services.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-16">{{ $t('services.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
          <template v-for="item in $tm('services.items')">
            <div class="bg-white rounded-lg shadow hover:shadow-xl hover:scale-110 transition duration-300 text-center">
              <img class="rounded-t-lg" :src="$rt(item.image)" alt="" />
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">{{ $rt(item.title) }}</h5>
                </a>
                <p class="text-gray-700">{{ $rt(item.description) }}</p>
              </div>
            </div>

          </template>
        </div>
      </div>
    </section>

    <!-- Price List Section -->
    <section id="prices" class="py-16 bg-white">
      <div class="container mx-auto px-4 my-16">
        <h2 class="text-4xl font-bold text-center text-primary">{{ $t('price.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-16">{{ $t('price.description') }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <template v-for="(service, index) in $tm('price.services')">
            <div
              class="flex flex-col p-6 text-center rounded-lg border shadow hover:scale-110 hover:shadow-xl transition duration-300"
              :class="index === 0 ? 'text-gray-900 bg-white border-gray-100' : 'border-gray-600 bg-gray-800 text-white'">
              <h3 class="mb-4 text-2xl font-semibold">{{ $rt(service.title) }}</h3>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                <template v-for="item in service.items">
                  <li class="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                    <span>{{ $rt(item.name) }}</span>
                    <span class="font-semibold ">{{ $rt(item.price) }}</span>
                  </li>

                </template>
              </ul>
              <p class="text-gray-200 italic text-sm" v-if="service.description">{{ $rt(service.description) }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-gray-100 ">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 text-white">
        <div>
          <h2 class="text-4xl font-bold text-center mb-6">{{ $t('about.title') }}</h2>
          <p class=" leading-relaxed mb-4">
            {{ $t('about.description') }}
          </p>
          <p class="text-gray-200 leading-relaxed">
            {{ $t('about.mission') }}
          </p>
        </div>
        <div>
          <img src="/images/about-us.jpg" :alt="$t('about.title')" width="736" height="617"
            class="rounded-xl shadow-lg w-full h-auto object-cover">
        </div>

      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-primary ">{{ $t('testimonials.title') }}</h2>
        <p class="text-lg text-center text-gray-700 mt-4 mb-12">{{ $t('testimonials.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  <footer id="footer" class="bg-gray-900 text-white py-12">
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
            <a href="tel:0935922854" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/phone.svg" alt="Phone" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://www.messenger.com/t/100009511365248"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/facebook.svg" alt="Facebook" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="http://qr.kakao.com/talk/0diNs_cW8DuEbDIrdyHsbGQsh5Q-"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://zalo.me/0935922854" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/zalo.svg" alt="Zalo" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://wa.me/qr/XETIG4TOJI5QO1" class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-6 w-6" width="24" height="24">
            </a>
            <a href="https://u.wechat.com/kO-ri94s652iegVmaHFDtlw?s=2"
              class="text-gray-400 hover:text-white transition duration-300">
              <img src="/logos/wechat.svg" alt="WeChat" class="h-6 w-6" width="24" height="24">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="fixed bottom-8 right-8 z-50">
    <button
      class="bg-white p-1 rounded-full shadow-lg hover:bg-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
      @click="state.showHelp = !state.showHelp" aria-label="Contact Us">
      <img src="/logos/help.svg" alt="Help" class="h-12 w-12">
    </button>

    <Transition enter-active-class="animate-fade-up" leave-active-class="animate-fade-up animate-reverse">
      <div v-if="state.showHelp" v-on-click-outside="() => state.showHelp = false"
        class="absolute bottom-full right-1/2 translate-x-1/2 rounded-xl grid gap-3 mb-4 bg-white shadow-lg">
        <a href="tel:0935922854" target="_blank">
          <img src="/logos/phone.svg" alt="Phone" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://www.messenger.com/t/100009511365248" target="_blank">
          <img src="/logos/facebook.svg" alt="Facebook" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="http://qr.kakao.com/talk/0diNs_cW8DuEbDIrdyHsbGQsh5Q-" target="_blank">
          <img src="/logos/kakaotalk.svg" alt="KakaoTalk" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://zalo.me/0935922854" target="_blank">
          <img src="/logos/zalo.svg" alt="Zalo" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://wa.me/qr/XETIG4TOJI5QO1" target="_blank">
          <img src="/logos/whatsapp.svg" alt="WhatsApp" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
        <a href="https://u.wechat.com/kO-ri94s652iegVmaHFDtlw?s=2" target="_blank">
          <img src="/logos/wechat.svg" alt="WeChat" class="h-10 w-10 hover:scale-110 transition duration-300">
        </a>
      </div>
    </Transition>
  </div>

</template>

<script lang="ts" setup>
  const { locale, locales, setLocale, t } = useI18n()
  import { vOnClickOutside } from '@vueuse/components'


  const state = reactive({
    showLanguage: false,
    showHelp: false
  })

  useSeoMeta({
    title: t('seo.title'),
    ogTitle: t('seo.title'),
    description: t('seo.description'),
    ogDescription: t('seo.description'),
    ogImage: 'https://homemassagedanang.com/images/og-image.jpg'
  });

</script>

<style>
  #header {
    background-image: linear-gradient(to right, rgba(105, 67, 41, 0.7), rgba(105, 67, 41, 0.95)), url('/images/hero-bg.png');
    background-size: cover;
    background-position: center;
  }

  #about {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0)), url('/images/about-us-bg.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
