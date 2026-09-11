<template>
  <section class="bg-cream border-t border-border py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-0">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="px-0 py-10 border-r border-border last:border-r-0"
          :class="index > 0 ? 'px-8 lg:px-12' : 'pr-8 lg:pr-12'"
        >
          <FadeUp :delay="index + 1">
            <p class="font-display font-800 text-4xl lg:text-5xl text-ink leading-none tracking-tight mb-3">
              {{ stat.value }}
            </p>
            <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted leading-relaxed">
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
