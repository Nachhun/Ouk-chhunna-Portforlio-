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
            href="mailto:oukchhunna@gmail.com"
            class="inline-flex items-center gap-2 bg-ink text-cream font-display font-800 text-[15px] tracking-[0.06em] uppercase px-6 py-2.5 hover:bg-ink/85 transition-colors duration-200 whitespace-nowrap shadow-sm"
          >
            Contact
          </a>
        </li>
      </ul>

      <!-- Mobile burger -->
      <button
        id="mobile-menu-btn"
        class="md:hidden flex flex-col gap-1.5 p-2"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          class="block w-5 h-px bg-ink transition-all duration-300"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block w-5 h-px bg-ink transition-all duration-300"
          :class="mobileOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-5 h-px bg-ink transition-all duration-300"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-cream border-b border-border px-6 pb-6"
      >
        <ul class="flex flex-col gap-4 pt-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="font-display font-700 text-base tracking-[0.08em] uppercase text-ink hover:text-black transition-colors duration-200"
              @click.prevent="mobileScrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="mailto:oukchhunna@gmail.com"
              class="inline-flex bg-ink text-cream font-display font-700 text-sm tracking-[0.08em] uppercase px-6 py-3"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileOpen = ref(false)
const navRef = ref<HTMLElement>()

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai', label: 'AI & Data' },
  { href: '#creative', label: 'Creative' },
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

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
