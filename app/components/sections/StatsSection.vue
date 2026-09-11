<template>
  <section class="bg-cream border-t border-border py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="bg-white/95 border border-border/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs hover:border-ink/20 hover:shadow-md transition-all flex flex-col justify-center relative overflow-hidden group"
        >
          <FadeUp :delay="index + 1">
            <div class="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span class="w-2 h-2 rounded-full bg-ink/70"></span>
              <p class="font-body text-[11px] sm:text-xs lg:text-sm font-bold tracking-widest uppercase text-ink-secondary leading-none">
                {{ stat.label }}
              </p>
            </div>
            <p class="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight tracking-tight mb-2 sm:mb-2.5">
              {{ stat.value }}
            </p>
            <p class="font-body text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-xl">
              {{ stat.description }}
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: 'Full-Stack',
    label: 'End-to-End Development',
    description: 'Enterprise Web Applications, PWAs, Laravel REST APIs, and production database solutions.',
  },
  {
    value: 'AI-Powered',
    label: 'Development & Analytics',
    description: 'AI-assisted engineering, data analytics workflows, and intelligent business process automation.',
  },
]
</script>
