<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center bg-cream overflow-hidden"
  >
    <!-- Background grid overlay (very subtle) -->
    <div class="absolute inset-0 opacity-[0.025] pointer-events-none">
      <div
        class="w-full h-full"
        style="background-image: linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px); background-size: 80px 80px;"
      />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
      <!-- Status indicator -->
      <div class="flex items-center gap-2.5 mb-12 animate-fade-in">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span class="font-body text-xs tracking-[0.15em] uppercase text-ink-secondary">
          Available for opportunities
        </span>
      </div>

      <!-- Name -->
      <div class="text-reveal mb-4">
        <h1
          class="font-display font-800 leading-none tracking-tighter text-ink"
          style="font-size: clamp(3.5rem, 10vw, 10rem);"
        >
          <span class="text-reveal-inner" :class="{ visible: mounted }">Ouk</span>
        </h1>
        <h1
          class="font-display font-800 leading-none tracking-tighter text-ink"
          style="font-size: clamp(3.5rem, 10vw, 10rem); transition-delay: 0.1s;"
        >
          <span class="text-reveal-inner" :class="{ visible: mounted }" style="transition-delay: 0.12s;">Chhunna</span>
        </h1>
      </div>

      <!-- Role line -->
      <div class="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 mt-8">
        <div class="text-reveal">
          <p
            class="text-reveal-inner font-display font-600 text-xl md:text-2xl text-ink tracking-tight"
            :class="{ visible: mounted }"
            style="transition-delay: 0.28s;"
          >
            Full-Stack Software Developer
          </p>
        </div>
        <div class="hidden md:block w-px h-5 bg-border-strong" />
        <div class="text-reveal">
          <p
            class="text-reveal-inner font-body text-sm text-ink-secondary tracking-wide"
            :class="{ visible: mounted }"
            style="transition-delay: 0.38s;"
          >
            Business Systems · AI & Data Analytics · Digital Content & AI Creative
          </p>
        </div>
      </div>

      <!-- Professional Profile Summary -->
      <p
        class="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mt-6 opacity-0 animate-fade-in"
        style="animation-delay: 0.45s; animation-fill-mode: forwards;"
      >
        Enterprise software engineering delivering production Web Applications, Progressive Web Apps (PWA), dynamic GIS routing, and business automation across SFA, RTM, GT, and FMCG supply chains.
      </p>

      <!-- CTA buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 mt-14 opacity-0 animate-fade-up"
        style="animation-delay: 0.55s; animation-fill-mode: forwards;"
      >
        <a
          href="#projects"
          class="inline-flex items-center justify-center gap-2 bg-ink text-cream font-body text-xs tracking-[0.1em] uppercase px-8 py-4 hover:bg-ink/80 transition-all duration-300 group"
          @click.prevent="scrollTo('#projects')"
        >
          View Selected Work
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#about"
          class="inline-flex items-center justify-center bg-transparent text-ink font-body text-xs tracking-[0.1em] uppercase px-8 py-4 border border-border-strong hover:border-ink hover:bg-ink hover:text-cream transition-all duration-300"
          @click.prevent="scrollTo('#about')"
        >
          About Me
        </a>
      </div>

      <!-- Scroll cue -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style="animation-delay: 1.2s; animation-fill-mode: forwards;"
      >
        <div class="w-px h-10 bg-border-strong animate-pulse" />
        <span class="font-body text-xs tracking-[0.15em] uppercase text-ink-muted">Scroll</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mounted = ref(false)

onMounted(() => {
  setTimeout(() => { mounted.value = true }, 80)
})

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
