<template>
  <div class="flex items-center gap-3 mb-6">
    <span class="font-body text-xs tracking-[0.18em] uppercase text-ink-muted">{{ number }}</span>
    <span class="w-8 h-px bg-border-strong" />
    <span class="font-body text-xs tracking-[0.18em] uppercase text-ink-muted">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  label: string
}>()
</script>
