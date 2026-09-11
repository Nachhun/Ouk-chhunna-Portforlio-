<template>
  <div
    ref="el"
    class="reveal"
    :class="[delay ? `reveal-delay-${delay}` : '', { visible: isVisible }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
  }>(),
  { delay: 0 }
)

const el = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  if (typeof window === 'undefined') return

  // Check if already in viewport
  if (el.value) {
    const rect = el.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isVisible.value = true
      return
    }
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 80px 0px' }
    )
    if (el.value) observer.observe(el.value)
  } else {
    isVisible.value = true
  }

  // Safety fallback: ensure content is never permanently hidden
  setTimeout(() => {
    isVisible.value = true
  }, 800)
})
</script>
