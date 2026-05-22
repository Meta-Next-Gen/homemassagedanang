<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, locale } = useI18n()

const menuOpen = ref(false)
const closeMenu = () => (menuOpen.value = false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const services = computed(() => tm('services.items'))
const benefits = computed(() => tm('benefits.items'))
const processSteps = computed(() => tm('process.steps'))
const testimonials = computed(() => tm('testimonials.items'))
const faqs = computed(() => tm('faq.items'))
const aboutFeatures = computed(() => tm('about.features'))

const isEn = computed(() => locale.value === 'en')
const otherLocaleHref = computed(() => (isEn.value ? '/' : '/en/'))

function handleSubmit(e) {
  e.preventDefault()
  alert(t('contact.form.thanks'))
  e.target.reset()
}
</script>

<template>
  <div>
    <!-- ============ HEADER ============ -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Home Massage Da Nang" class="h-12 w-auto" />
        </a>

        <nav class="hidden lg:flex items-center gap-10 text-[15px] font-medium text-ink-800">
          <a href="#about" class="hover:text-brand-500 transition">{{ t('nav.about') }}</a>
          <a href="#services" class="hover:text-brand-500 transition">{{ t('nav.services') }}</a>
          <a href="#benefits" class="hover:text-brand-500 transition">{{ t('nav.benefits') }}</a>
          <a href="#pricing" class="hover:text-brand-500 transition">{{ t('nav.pricing') }}</a>
          <a href="#faq" class="hover:text-brand-500 transition">{{ t('nav.faq') }}</a>
          <a href="#contact" class="hover:text-brand-500 transition">{{ t('nav.contact') }}</a>
        </nav>

        <div class="hidden md:flex items-center gap-3">
          <div class="inline-flex items-center rounded-full ring-1 ring-slate-200 bg-white p-0.5 text-xs font-semibold">
            <a v-if="isEn" :href="otherLocaleHref" class="px-3 py-1.5 rounded-full text-ink-600 hover:text-brand-500 transition">VI</a>
            <span v-else class="px-3 py-1.5 rounded-full bg-brand-500 text-white">VI</span>
            <span v-if="isEn" class="px-3 py-1.5 rounded-full bg-brand-500 text-white">EN</span>
            <a v-else :href="otherLocaleHref" class="px-3 py-1.5 rounded-full text-ink-600 hover:text-brand-500 transition">EN</a>
          </div>

          <a href="tel:0935922854" class="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 transition shadow-sm">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            0935-922-854
          </a>
        </div>

        <button @click="toggleMenu" class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-800" :aria-label="t('nav.menuLabel')">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      <div v-show="menuOpen" class="lg:hidden border-t border-slate-100 bg-white">
        <div class="px-4 py-4 flex flex-col gap-3 text-[15px] font-medium">
          <a href="#about" class="py-2" @click="closeMenu">{{ t('nav.about') }}</a>
          <a href="#services" class="py-2" @click="closeMenu">{{ t('nav.services') }}</a>
          <a href="#benefits" class="py-2" @click="closeMenu">{{ t('nav.benefits') }}</a>
          <a href="#pricing" class="py-2" @click="closeMenu">{{ t('nav.pricing') }}</a>
          <a href="#faq" class="py-2" @click="closeMenu">{{ t('nav.faq') }}</a>
          <a href="#contact" class="py-2" @click="closeMenu">{{ t('nav.contact') }}</a>

          <div class="mt-2 inline-flex items-center rounded-full ring-1 ring-slate-200 bg-white p-0.5 text-xs font-semibold self-start">
            <a v-if="isEn" :href="otherLocaleHref" class="px-3 py-1.5 rounded-full text-ink-600">VI</a>
            <span v-else class="px-3 py-1.5 rounded-full bg-brand-500 text-white">VI</span>
            <span v-if="isEn" class="px-3 py-1.5 rounded-full bg-brand-500 text-white">EN</span>
            <a v-else :href="otherLocaleHref" class="px-3 py-1.5 rounded-full text-ink-600">EN</a>
          </div>

          <a href="tel:0935922854" class="mt-2 inline-flex justify-center rounded-full bg-brand-500 text-white font-semibold px-5 py-3">{{ t('nav.callNow') }}</a>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="relative isolate overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-brand-50/95 via-brand-50/70 to-brand-50/20"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36 min-h-[560px] flex items-center">
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-600 uppercase ring-1 ring-brand-100">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
            {{ t('hero.badge') }}
          </span>

          <h1 class="font-display font-bold text-ink-900 text-4xl sm:text-5xl lg:text-6xl leading-tight mt-6">
            {{ t('hero.titlePart1') }}<br />{{ t('hero.titlePart2') }} <span class="text-brand-500">{{ t('hero.titleHighlight') }}</span>
          </h1>

          <p class="mt-6 text-lg text-ink-600 max-w-xl">{{ t('hero.desc') }}</p>

          <div class="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" class="inline-flex items-center gap-2 rounded-full bg-amber-cta hover:bg-amber-cta-hover text-white font-semibold px-7 py-3.5 shadow-lg shadow-amber-500/20 transition">
              {{ t('hero.ctaBook') }}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="tel:0935922854" class="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur hover:bg-white text-ink-800 font-semibold px-7 py-3.5 ring-1 ring-slate-200 transition">
              <svg class="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              0935-922-854
            </a>
          </div>

          <div class="mt-12 inline-flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur p-4 pr-6 ring-1 ring-slate-100 shadow-sm">
            <div class="flex -space-x-2">
              <div class="w-9 h-9 rounded-full bg-brand-200 ring-2 ring-white flex items-center justify-center text-xs font-bold text-brand-600">U1</div>
              <div class="w-9 h-9 rounded-full bg-brand-300 ring-2 ring-white flex items-center justify-center text-xs font-bold text-white">U2</div>
              <div class="w-9 h-9 rounded-full bg-brand-400 ring-2 ring-white flex items-center justify-center text-xs font-bold text-white">U3</div>
            </div>
            <div>
              <div class="flex items-center gap-1 text-amber-500">
                <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.7 5.8,21 7,14.1 2,9.3 9,8.5"/></svg>
              </div>
              <p class="text-sm text-ink-600 mt-0.5">{{ t('hero.trustText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ ABOUT ============ -->
    <section id="about" class="py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('about.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">
            {{ t('about.titlePart1') }}<br />{{ t('about.titlePart2') }}
          </h2>
          <p class="mt-6 text-ink-600 leading-relaxed">{{ t('about.desc') }}</p>

          <dl class="mt-10 grid sm:grid-cols-2 gap-6">
            <div v-for="(f, i) in aboutFeatures" :key="i" class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center text-mint-500">
                <svg v-if="i === 0" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <svg v-else-if="i === 1" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <svg v-else-if="i === 2" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <dt class="font-display font-semibold text-ink-900 text-lg">{{ f.title }}</dt>
                <dd class="text-sm text-ink-600 mt-1">{{ f.desc }}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div class="relative">
          <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80" alt="Massage therapist applying oil" class="rounded-3xl shadow-xl w-full h-[520px] object-cover" />
          <div class="absolute -bottom-6 -left-6 sm:left-8 bg-white rounded-2xl shadow-xl p-5 ring-1 ring-slate-100 max-w-xs">
            <div class="flex items-center gap-3">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-brand-200 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-brand-600">U1</div>
                <div class="w-8 h-8 rounded-full bg-brand-300 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white">U2</div>
                <div class="w-8 h-8 rounded-full bg-brand-400 ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white">U3</div>
              </div>
              <div class="flex items-center text-amber-500">
                <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.7 5.8,21 7,14.1 2,9.3 9,8.5"/></svg>
              </div>
            </div>
            <p class="text-sm text-ink-600 mt-2">
              {{ t('about.cardTrustPrefix') }} <span class="font-semibold text-ink-900">{{ t('about.cardTrustCount') }}</span> {{ t('about.cardTrustSuffix') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SERVICES ============ -->
    <section id="services" class="py-20 lg:py-28 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('services.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('services.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('services.subtitle') }}</p>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            v-for="(s, i) in services"
            :key="i"
            class="group relative bg-white rounded-2xl p-7 flex flex-col transition"
            :class="s.featured
              ? 'ring-2 ring-brand-500 shadow-xl'
              : 'ring-1 ring-slate-100 hover:ring-brand-200 hover:shadow-xl'"
          >
            <span v-if="s.featured" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{{ t('services.popular') }}</span>

            <span class="inline-flex self-start items-center gap-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {{ s.duration }} {{ t('services.minutes') }}
            </span>
            <h3 class="font-display font-bold text-ink-900 text-2xl mt-4">{{ s.title }}</h3>
            <p class="text-sm text-ink-600 mt-2 leading-relaxed">{{ s.desc }}</p>

            <ul class="mt-5 space-y-2.5 text-sm text-ink-800">
              <li v-for="f in s.features" :key="f" class="flex items-start gap-2">
                <svg class="w-5 h-5 text-mint-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                {{ f }}
              </li>
            </ul>

            <div class="mt-6 pt-5 border-t border-slate-100">
              <p class="text-xs text-ink-400 uppercase tracking-wider">{{ t('services.price') }}</p>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="text-3xl font-bold text-brand-500">{{ s.price }}</span>
                <span class="text-sm text-ink-400 line-through">{{ s.priceOld }}</span>
              </div>
            </div>

            <a href="#contact"
               class="mt-6 inline-flex justify-center items-center rounded-xl text-white font-semibold py-3 transition"
               :class="s.featured ? 'bg-brand-500 hover:bg-brand-600' : 'bg-amber-cta hover:bg-amber-cta-hover'">
              {{ t('services.bookNow') }}
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ BENEFITS ============ -->
    <section id="benefits" class="py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('benefits.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('benefits.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('benefits.subtitle') }}</p>
        </div>

        <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(b, i) in benefits" :key="i" class="bg-slate-50 rounded-2xl p-7 ring-1 ring-slate-100 hover:bg-white hover:shadow-md transition">
            <div class="w-14 h-14 rounded-2xl bg-mint-50 flex items-center justify-center text-mint-500">
              <svg v-if="b.icon === 'moon'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <svg v-else-if="b.icon === 'activity'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h6l3-9 4 18 3-9h4"/></svg>
              <svg v-else-if="b.icon === 'heart'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <svg v-else-if="b.icon === 'zap'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              <svg v-else-if="b.icon === 'shield'" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="font-display font-semibold text-ink-900 text-xl mt-5">{{ b.title }}</h3>
            <p class="text-sm text-ink-600 mt-2 leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS ============ -->
    <section class="py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('process.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('process.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('process.subtitle') }}</p>
        </div>

        <div class="relative mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-brand-200/60"></div>

          <div v-for="(step, i) in processSteps" :key="i" class="relative bg-white rounded-2xl ring-1 ring-slate-100 p-7 text-center shadow-sm">
            <div class="w-14 h-14 mx-auto rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
              <svg v-if="i === 0" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              <svg v-else-if="i === 1" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>
              <svg v-else-if="i === 2" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
              <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h3 class="font-display font-bold text-ink-900 text-xl mt-5">{{ step.title }}</h3>
            <p class="text-sm text-ink-600 mt-2">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section id="pricing" class="py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('pricing.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('pricing.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('pricing.subtitle') }}</p>
        </div>

        <div class="mt-12 max-w-4xl mx-auto bg-white rounded-3xl ring-1 ring-slate-100 shadow-sm overflow-hidden">
          <div class="hidden sm:grid grid-cols-12 gap-4 px-8 py-5 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-ink-600 border-b border-slate-100">
            <div class="col-span-6">{{ t('pricing.headerPackage') }}</div>
            <div class="col-span-3">{{ t('pricing.headerDuration') }}</div>
            <div class="col-span-3 text-right">{{ t('pricing.headerPrice') }}</div>
          </div>

          <div
            v-for="(s, i) in services"
            :key="i"
            class="grid sm:grid-cols-12 gap-4 px-6 sm:px-8 py-6 items-center hover:bg-slate-50/50 transition"
            :class="i < services.length - 1 ? 'border-b border-slate-100' : ''"
          >
            <div class="sm:col-span-6">
              <h4 class="font-display font-bold text-ink-900 text-lg">{{ s.title }}</h4>
              <p class="text-sm text-ink-600 mt-0.5">{{ s.features?.[0] }}</p>
            </div>
            <div class="sm:col-span-3">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold px-3 py-1">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {{ s.duration }} {{ t('services.minutes') }}
              </span>
            </div>
            <div class="sm:col-span-3 sm:text-right">
              <div class="text-xl font-bold text-brand-500">{{ s.price }}</div>
              <div class="text-sm text-ink-400 line-through">{{ s.priceOld }}</div>
            </div>
          </div>
        </div>

        <p v-if="t('pricing.footnote')" class="mt-6 text-center text-xs text-ink-400">{{ t('pricing.footnote') }}</p>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="py-20 lg:py-28 bg-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('testimonials.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('testimonials.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('testimonials.subtitle') }}</p>
        </div>

        <div class="mt-14 grid md:grid-cols-3 gap-6">
          <figure v-for="(r, i) in testimonials" :key="i" class="bg-white rounded-2xl ring-1 ring-slate-100 p-7 shadow-sm">
            <div class="flex items-center text-amber-500">
              <svg v-for="n in 5" :key="n" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.7 5.8,21 7,14.1 2,9.3 9,8.5"/></svg>
            </div>
            <blockquote class="mt-4 text-ink-800 leading-relaxed">"{{ r.quote }}"</blockquote>
            <figcaption class="mt-6 flex items-center gap-3">
              <div class="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-600">{{ r.initial }}</div>
              <div>
                <div class="font-semibold text-ink-900">{{ r.name }}</div>
                <div class="text-xs text-ink-400">{{ t('testimonials.verifiedLabel') }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section id="faq" class="py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('faq.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('faq.title') }}</h2>
        </div>

        <div class="mt-12 space-y-3">
          <details v-for="(item, i) in faqs" :key="i" class="group bg-slate-50 rounded-xl ring-1 ring-slate-100 open:bg-white open:ring-brand-100 open:shadow-sm transition">
            <summary class="flex items-center justify-between cursor-pointer px-6 py-5 font-display font-semibold text-ink-900 list-none">
              <span>{{ item.q }}</span>
              <svg class="w-5 h-5 text-brand-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </summary>
            <p class="px-6 pb-6 text-ink-600 leading-relaxed">{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section id="contact" class="py-20 lg:py-28 bg-gradient-to-b from-brand-50/40 to-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">{{ t('contact.kicker') }}</span>
          <h2 class="font-display font-bold text-ink-900 text-4xl lg:text-5xl mt-3">{{ t('contact.title') }}</h2>
          <p class="mt-4 text-ink-600">{{ t('contact.subtitle') }}</p>

          <ul class="mt-10 space-y-6">
            <li class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              </div>
              <div>
                <p class="font-display font-semibold text-ink-900 text-lg">{{ t('contact.hotline') }}</p>
                <a href="tel:0935922854" class="text-ink-600 hover:text-brand-500 transition">0935-922-854</a>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p class="font-display font-semibold text-ink-900 text-lg">{{ t('contact.address') }}</p>
                <p class="text-ink-600">{{ t('contact.addressValue') }}</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <p class="font-display font-semibold text-ink-900 text-lg">{{ t('contact.hours') }}</p>
                <p class="text-ink-600">{{ t('contact.hoursValue') }}</p>
              </div>
            </li>
          </ul>
        </div>

        <form class="bg-white rounded-3xl ring-1 ring-slate-100 shadow-xl p-8 lg:p-10" @submit="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.name') }} *</label>
              <input required type="text" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition" :placeholder="t('contact.form.namePlaceholder')" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.phone') }} *</label>
              <input required type="tel" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition" :placeholder="t('contact.form.phonePlaceholder')" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.email') }}</label>
              <input type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition" :placeholder="t('contact.form.emailPlaceholder')" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.service') }}</label>
              <select class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition">
                <option>{{ t('contact.form.servicePlaceholder') }}</option>
                <option v-for="s in services" :key="s.title">{{ s.title }}</option>
              </select>
            </div>
          </div>

          <div class="mt-5">
            <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.datetime') }}</label>
            <input type="datetime-local" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition" />
          </div>

          <div class="mt-5">
            <label class="block text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">{{ t('contact.form.message') }}</label>
            <textarea rows="4" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition resize-none" :placeholder="t('contact.form.messagePlaceholder')"></textarea>
          </div>

          <button type="submit" class="mt-7 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-amber-cta hover:bg-amber-cta-hover text-white font-semibold py-4 shadow-lg shadow-amber-500/20 transition">
            {{ t('contact.form.submit') }}
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </form>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="bg-ink-900 text-slate-300 pt-16 pb-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/logo.png" alt="Home Massage Da Nang" class="h-12 w-auto bg-white/95 rounded-lg p-1.5" />
          <p class="mt-5 text-sm leading-relaxed text-slate-400">{{ t('footer.tagline') }}</p>
          <div class="mt-6 flex gap-3">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 flex items-center justify-center transition" aria-label="Facebook">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 flex items-center justify-center transition" aria-label="Instagram">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 flex items-center justify-center transition" aria-label="Zalo">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.92 2 10.74c0 2.74 1.45 5.18 3.72 6.78L4.5 21l3.84-2.14c1.13.31 2.36.48 3.66.48 5.52 0 10-3.92 10-8.74S17.52 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-display font-semibold text-brand-400 text-lg">{{ t('footer.quickLinks') }}</h4>
          <ul class="mt-5 space-y-3 text-sm">
            <li><a href="#" class="hover:text-brand-400 transition">{{ t('footer.linkHome') }}</a></li>
            <li><a href="#services" class="hover:text-brand-400 transition">{{ t('footer.linkServices') }}</a></li>
            <li><a href="#about" class="hover:text-brand-400 transition">{{ t('footer.linkAbout') }}</a></li>
            <li><a href="#contact" class="hover:text-brand-400 transition">{{ t('footer.linkContact') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-semibold text-brand-400 text-lg">{{ t('footer.contact') }}</h4>
          <ul class="mt-5 space-y-3 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
              <a href="tel:0935922854" class="hover:text-brand-400 transition">0935-922-854</a>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{{ t('footer.addressValue') }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-display font-semibold text-brand-400 text-lg">{{ t('footer.hours') }}</h4>
          <ul class="mt-5 space-y-3 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{{ t('footer.hoursValue') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
        <p>{{ t('footer.copyright') }}</p>
        <a href="https://homemassagedanang.com" class="hover:text-brand-400 transition">homemassagedanang.com</a>
      </div>
    </footer>

    <!-- ============ FLOATING CTA ============ -->
    <a href="tel:0935922854" class="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-500 hover:bg-brand-600 text-white shadow-2xl shadow-brand-500/40 transition lg:hidden" :aria-label="t('floatingCta')">
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
    </a>
  </div>
</template>
