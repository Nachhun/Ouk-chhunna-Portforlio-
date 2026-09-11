<template>
  <section class="bg-cream border-t border-border py-14 sm:py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="bg-white/90 border border-border/90 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xs hover:border-ink/20 transition-all flex flex-col justify-center"
        >
          <FadeUp :delay="index + 1">
            <p class="font-display font-800 text-2xl sm:text-4xl lg:text-5xl text-ink leading-none tracking-tight mb-1.5 sm:mb-2.5">
              {{ stat.value }}
            </p>
            <p class="font-body text-[11px] sm:text-xs lg:text-sm font-bold tracking-wider uppercase text-ink-secondary leading-snug">
              {{ stat.label }}
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '7+', label: 'Production Platforms' },
  { value: '3,900+', label: 'Git Production Commits' },
  { value: 'Full-Stack', label: 'End-to-End Development' },
  { value: 'AI-Powered', label: 'Development & Analytics' },
]
</script>
