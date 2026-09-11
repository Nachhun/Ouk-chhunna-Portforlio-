<template>
  <!-- Floating Mobile App-Style Dock (Visible only on mobile/tablet screens) -->
  <aside
    aria-label="Mobile Navigation"
    class="md:hidden fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300"
    :class="{ 'translate-y-20 opacity-0': hidden }"
  >
    <nav
      class="pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-3 py-2 rounded-full bg-[#111111]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.35)] text-white/70 max-w-sm w-full"
    >
      <button
        v-for="item in navItems"
        :key="item.href"
        type="button"
        class="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-all duration-200 group relative"
        :class="activeSection === item.id ? 'text-white' : 'text-white/60 hover:text-white'"
        :aria-label="item.label"
        @click="scrollTo(item.href)"
      >
        <!-- Active Pill Background Indicator -->
        <span
          v-if="activeSection === item.id"
          class="absolute inset-0 rounded-full bg-white/15 shadow-inner -z-10 animate-fade-in"
        />

        <!-- Icon -->
        <component :is="item.icon" class="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-active:scale-90" />
        
        <!-- Text Label -->
        <span class="text-[10px] font-medium tracking-tight mt-0.5 leading-none">
          {{ item.label }}
        </span>
      </button>

      <!-- Quick Contact Direct Action -->
      <a
        href="mailto:chhunnaouk168@gmail.com"
        class="flex items-center justify-center w-8 h-8 rounded-full bg-white text-ink shadow-sm shrink-0 active:scale-90 transition-transform ml-1"
        aria-label="Email Ouk Chhunna"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { h } from 'vue'

const activeSection = ref('hero')
const hidden = ref(false)
let lastScrollY = 0

// SVG Icon Helpers
const IconHome = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
  h('polyline', { points: '9 22 9 12 15 12 15 22' })
])

const IconAbout = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '12', cy: '7', r: '4' })
])

const IconProjects = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' })
])

const IconExperience = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('rect', { width: '20', height: '14', x: '2', y: '7', rx: '2', ry: '2' }),
  h('path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' })
])

const IconAI = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }, [
  h('path', { d: 'm12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z' })
])

const navItems = [
  { id: 'hero', href: '#hero', label: 'Home', icon: IconHome },
  { id: 'about', href: '#about', label: 'About', icon: IconAbout },
  { id: 'projects', href: '#projects', label: 'Work', icon: IconProjects },
  { id: 'experience', href: '#experience', label: 'Exp', icon: IconExperience },
  { id: 'ai', href: '#ai', label: 'AI', icon: IconAI },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'ai', 'creative', 'contact']

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Hide dock on quick downward scroll near footer if desired, or keep smooth
  lastScrollY = currentScrollY

  // Determine active section based on scroll offset
  const scrollPosition = currentScrollY + 200
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const id = sectionIds[i]
    if (!id) continue

    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollPosition) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
