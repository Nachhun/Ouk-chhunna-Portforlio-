<template>
  <section
    id="hero"
    class="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-cream overflow-hidden"
  >
    <!-- Ambient Floating Atmosphere Glows -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Terracotta subtle warm orb -->
      <div
        class="absolute -top-24 right-[-10%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-[#D44A1C]/[0.06] blur-[90px] anim-float-slow"
      />
      <!-- Soft ambient indigo/slate orb -->
      <div
        class="absolute bottom-10 -left-20 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-ink/[0.04] blur-[80px] anim-float-reverse"
      />
    </div>

    <!-- Background grid overlay (very subtle) -->
    <div class="absolute inset-0 opacity-[0.028] pointer-events-none">
      <div
        class="w-full h-full"
        style="background-image: linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px); background-size: 72px 72px;"
      />
    </div>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-14 sm:pb-20 w-full">
      <!-- Interactive Mini Profile & Availability Status Badge -->
      <div
        class="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-border/90 shadow-xs mb-6 sm:mb-10 transition-all duration-300 hover:shadow-sm hover:border-ink/25 group select-none animate-fade-in"
      >
        <!-- Mini Avatar with Online Beacon -->
        <div class="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-ink/10 shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Ouk Chhunna"
            class="w-full h-full object-cover object-top"
          />
          <span class="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1.5 ring-white" />
        </div>

        <div class="flex items-center gap-2 text-xs">
          <span class="font-display font-700 text-ink tracking-tight">Ouk Chhunna</span>
          <span class="w-1 h-1 rounded-full bg-ink/20" />
          <span class="font-body text-[11px] sm:text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </span>
        </div>
      </div>

      <!-- Main Name with Staggered Kinetic Typography -->
      <div class="text-reveal mb-2 sm:mb-4">
        <h1
          class="font-display font-800 leading-[0.92] tracking-tighter text-ink"
          style="font-size: clamp(3.2rem, 13vw, 9.5rem);"
        >
          <span class="text-reveal-inner" :class="{ visible: mounted }">Ouk</span>
        </h1>
        <h1
          class="font-display font-800 leading-[0.92] tracking-tighter text-ink"
          style="font-size: clamp(3.2rem, 13vw, 9.5rem); transition-delay: 0.1s;"
        >
          <span class="text-reveal-inner" :class="{ visible: mounted }" style="transition-delay: 0.12s;">Chhunna</span>
        </h1>
      </div>

      <!-- Animated Dynamic Role Switcher with Kinetic Indicator -->
      <div class="flex items-center gap-2.5 sm:gap-3.5 mt-4 sm:mt-6 min-h-[36px]">
        <span class="relative flex h-2.5 w-2.5 shrink-0">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D44A1C] opacity-60" />
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D44A1C]" />
        </span>
        <Transition name="role-fade" mode="out-in">
          <p
            :key="currentRoleIndex"
            class="font-display font-800 text-lg sm:text-2xl text-ink tracking-tight"
          >
            {{ roles[currentRoleIndex] }}
          </p>
        </Transition>
      </div>

      <!-- Domain Specializations Subtitle -->
      <p class="font-body text-xs sm:text-sm font-semibold text-ink-secondary tracking-wide mt-1.5 sm:mt-2">
        Business Systems · AI & Data Analytics · Digital Content & AI Creative
      </p>

      <!-- Interactive Micro-Pills / Specialization Badges -->
      <div class="flex flex-wrap items-center gap-2 mt-5 sm:mt-6">
        <span
          class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-ink text-white shadow-xs hover:scale-102 transition-transform cursor-default"
        >
          <svg class="w-3.5 h-3.5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Full-Stack Vue & Nuxt
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/40 transition-colors shadow-xs cursor-default"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          Enterprise SFA / RTM / FMCG
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/40 transition-colors shadow-xs cursor-default"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
            <line x1="9" y1="3" x2="9" y2="18"></line>
            <line x1="15" y1="6" x2="15" y2="21"></line>
          </svg>
          Dynamic GIS & PWA Routing
        </span>
        <span
          class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/40 transition-colors shadow-xs cursor-default"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"></path>
          </svg>
          AI Workflows & Automation
        </span>
      </div>

      <!-- Professional Profile Summary -->
      <p
        class="font-body text-sm sm:text-base font-medium text-ink/80 leading-relaxed max-w-2xl mt-5 sm:mt-6 opacity-0 animate-fade-in"
        style="animation-delay: 0.35s; animation-fill-mode: forwards;"
      >
        Enterprise software engineering delivering production Web Applications, Progressive Web Apps (PWA), dynamic GIS routing, and business automation across SFA, RTM, GT, and FMCG supply chains.
      </p>

      <!-- CTA Buttons with Sweep Shine Effect -->
      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 opacity-0 animate-fade-up"
        style="animation-delay: 0.45s; animation-fill-mode: forwards;"
      >
        <a
          href="#projects"
          class="btn-shine-sweep inline-flex items-center justify-center gap-2.5 bg-ink text-white font-display font-bold text-xs sm:text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full hover:bg-ink/90 active:scale-98 transition-all duration-200 shadow-md group"
          @click.prevent="scrollTo('#projects')"
        >
          <span>View Selected Work</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#about"
          class="inline-flex items-center justify-center bg-white text-ink font-display font-bold text-xs sm:text-sm tracking-[0.08em] uppercase px-8 py-4 rounded-full border border-border hover:border-ink active:scale-98 transition-all duration-200 shadow-xs hover:shadow-sm"
          @click.prevent="scrollTo('#about')"
        >
          About Me
        </a>
      </div>

      <!-- Quick Direct Contact Links (Phone, Email, LinkedIn) -->
      <div
        class="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8 pt-6 border-t border-border/70 opacity-0 animate-fade-in"
        style="animation-delay: 0.55s; animation-fill-mode: forwards;"
      >
        <span class="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-ink-muted shrink-0 mr-1">Direct Contact:</span>
        
        <!-- Phone Link -->
        <a
          href="tel:0965900986"
          class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/60 hover:shadow-xs transition-all text-xs font-semibold group active:scale-95"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary group-hover:text-ink transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>096 590 0986</span>
        </a>

        <!-- Gmail Link -->
        <a
          href="mailto:chhunnaouk168@gmail.com"
          class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/60 hover:shadow-xs transition-all text-xs font-semibold group active:scale-95"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary group-hover:text-ink transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span>chhunnaouk168@gmail.com</span>
        </a>

        <!-- LinkedIn Link -->
        <a
          href="https://www.linkedin.com/in/chhunna-ouk-1a195237a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-ink/60 hover:shadow-xs transition-all text-xs font-semibold group active:scale-95"
        >
          <svg class="w-3.5 h-3.5 text-ink-secondary group-hover:text-[#0A66C2] transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn Profile</span>
        </a>
      </div>

      <!-- Integrated Flow Scroll Cue (Prevents collision with Section 01 on mobile) -->
      <div
        class="mt-10 sm:mt-14 flex items-center gap-3 opacity-0 animate-fade-in"
        style="animation-delay: 0.75s; animation-fill-mode: forwards;"
      >
        <a
          href="#about"
          class="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-ink-muted hover:text-ink transition-colors group"
          @click.prevent="scrollTo('#about')"
        >
          <span class="w-4 h-7 rounded-full border border-ink/20 flex items-start justify-center p-1 group-hover:border-ink/50 transition-colors">
            <span class="w-1 h-1.5 rounded-full bg-ink/50 anim-wheel-bounce" />
          </span>
          <span class="text-[11px] font-semibold">Scroll to explore</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mounted = ref(false)

const roles = [
  'Full-Stack Software Developer',
  'Enterprise Systems Architect',
  'Dynamic GIS & PWA Engineer',
  'AI Automation & Analytics Specialist',
]

const currentRoleIndex = ref(0)
let roleTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  setTimeout(() => { mounted.value = true }, 60)
  roleTimer = setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
  }, 3000)
})

onUnmounted(() => {
  if (roleTimer) clearInterval(roleTimer)
})

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Role transition */
.role-fade-enter-active,
.role-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.role-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.role-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Ambient glow animations */
@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -25px) scale(1.08);
  }
}
.anim-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

@keyframes float-reverse {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}
.anim-float-reverse {
  animation: float-reverse 14s ease-in-out infinite;
}

/* Button sweep light effect */
.btn-shine-sweep {
  position: relative;
  overflow: hidden;
}
.btn-shine-sweep::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 45%;
  height: 200%;
  background: linear-gradient(
    60deg,
    transparent,
    rgba(255, 255, 255, 0.22),
    transparent
  );
  transform: rotate(25deg);
  animation: shine-sweep 4.5s ease-in-out infinite;
}
@keyframes shine-sweep {
  0%, 65% {
    left: -60%;
  }
  100% {
    left: 140%;
  }
}

/* Mouse wheel bounce */
@keyframes wheel-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateY(6px);
    opacity: 0.2;
  }
}
.anim-wheel-bounce {
  animation: wheel-bounce 1.6s ease-in-out infinite;
}
</style>
