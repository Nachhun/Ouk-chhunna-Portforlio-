<template>
  <header
    ref="navRef"
    class="site-header fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4] border-b border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200"
    style="background-color: #F8F7F4;"
  >
    <nav class="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="font-display font-800 text-xl lg:text-2xl tracking-[0.08em] uppercase text-ink animated-link shrink-0"
      >
        Ouk Chhunna
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9 shrink-0">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="font-display font-800 text-[15px] lg:text-[17px] tracking-[0.05em] uppercase text-ink hover:text-black transition-colors duration-200 whitespace-nowrap"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="mailto:chhunnaouk168@gmail.com"
            class="inline-flex items-center gap-2 bg-ink text-cream font-display font-800 text-[15px] tracking-[0.06em] uppercase px-6 py-2.5 hover:bg-ink/85 transition-colors duration-200 whitespace-nowrap shadow-sm"
          >
            Contact
          </a>
        </li>
      </ul>

      <!-- Mobile actions (Quick Contact + Profile Avatar Menu) -->
      <div class="md:hidden flex items-center gap-2.5">
        <a
          href="mailto:chhunnaouk168@gmail.com"
          class="inline-flex items-center text-xs font-display font-800 tracking-wider uppercase bg-ink text-white px-3.5 py-1.5 rounded-full shadow-xs active:scale-95 transition-all"
        >
          Contact
        </a>

        <button
          id="mobile-menu-btn"
          class="relative flex items-center justify-center p-0.5 rounded-full focus:outline-none active:scale-95 transition-transform"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <!-- Profile Avatar Image -->
          <div class="w-9 h-9 rounded-full overflow-hidden border border-ink/20 shadow-xs bg-ink/5">
            <img
              src="/images/profile.jpg"
              alt="Ouk Chhunna"
              class="w-full h-full object-cover object-top"
            />
          </div>
          <!-- Menu Toggle Badge Indicator -->
          <span class="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-ink text-white flex items-center justify-center shadow-xs border border-white">
            <svg v-if="!mobileOpen" class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg v-else class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        </button>
      </div>
    </nav>

    <!-- Modern Fullscreen Mobile Navigation Drawer -->
    <Teleport to="body">
      <Transition name="mobile-drawer">
        <div
          v-if="mobileOpen"
          class="fixed inset-0 z-[100] md:hidden bg-[#F8F7F4]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto"
        >
          <!-- Drawer Header -->
          <div class="flex items-center justify-between border-b border-border/80 pb-4">
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full overflow-hidden border border-ink/15 shadow-xs shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Ouk Chhunna"
                  class="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p class="font-display font-800 text-lg uppercase tracking-wider text-ink">
                  Ouk Chhunna
                </p>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span class="text-[11px] font-medium text-ink-secondary">Available for hire</span>
                </div>
              </div>
            </div>

            <button
              class="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-ink transition-colors"
              aria-label="Close menu"
              @click="mobileOpen = false"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Navigation Links -->
          <ul class="flex flex-col gap-2 py-6">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors group"
                @click.prevent="mobileScrollTo(link.href)"
              >
                <div class="flex items-center gap-3.5">
                  <span class="font-mono text-xs font-semibold text-ink-muted group-hover:text-accent-terracotta transition-colors">
                    {{ link.number }}
                  </span>
                  <div>
                    <p class="font-display font-800 text-xl tracking-tight text-ink group-hover:text-black transition-colors">
                      {{ link.label }}
                    </p>
                    <p class="text-xs text-ink-secondary">
                      {{ link.desc }}
                    </p>
                  </div>
                </div>
                <svg class="w-4 h-4 text-ink-muted group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Drawer Quick Actions / Footer -->
          <div class="pt-4 border-t border-border/80 space-y-3">
            <p class="text-[11px] font-mono uppercase tracking-widest text-ink-muted">Quick Connect</p>
            <div class="grid grid-cols-2 gap-2.5">
              <a
                href="mailto:chhunnaouk168@gmail.com"
                class="flex items-center justify-center gap-2 bg-ink text-white font-display font-700 text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-sm"
              >
                <span>Email Me</span>
              </a>
              <a
                href="tel:0965900986"
                class="flex items-center justify-center gap-2 bg-white border border-border text-ink font-display font-700 text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-xs"
              >
                <span>Call Phone</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)
const navRef = ref<HTMLElement>()

const links = [
  { href: '#about', label: 'About', number: '01', desc: 'Background & Profile' },
  { href: '#skills', label: 'Skills', number: '02', desc: 'Core Technologies & Tools' },
  { href: '#projects', label: 'Projects', number: '03', desc: 'Production Systems & PWAs' },
  { href: '#experience', label: 'Experience', number: '04', desc: 'Career & Achievements' },
  { href: '#ai', label: 'AI & Data', number: '05', desc: 'Intelligent Automation' },
  { href: '#creative', label: 'Creative', number: '06', desc: 'Media & Digital Assets' },
  { href: '#contact', label: 'Contact', number: '07', desc: 'Get in Touch Directly' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const navHeight = 85
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const mobileScrollTo = (href: string) => {
  mobileOpen.value = false
  setTimeout(() => scrollTo(href), 200)
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.site-header {
  background-color: #F8F7F4 !important;
}

.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.98);
}
</style>
