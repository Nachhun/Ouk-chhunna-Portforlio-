<template>
  <section id="about" class="bg-cream border-t border-border py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <!-- Left: label + portrait -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel number="01" label="About & Profile" />
            </FadeUp>

            <FadeUp :delay="1">
              <!-- Profile photo with refined animated spinning arrow frame -->
              <div class="relative w-full max-w-[320px] mt-6 group select-none">
                <!-- Subtle ambient depth -->
                <div class="absolute -inset-0.5 bg-ink/5 rounded-[28px] blur-sm transition-opacity duration-500 -z-10" />

                <!-- Main Card Frame with Clean Rounded Geometry -->
                <div class="relative rounded-[26px] p-2.5 bg-white/90 border border-ink/10 shadow-lg shadow-ink/5 transition-all duration-500 group-hover:border-ink/20">
                  
                  <!-- SVG Traveling Arrow Orbit & Refined Kinetic Border Track -->
                  <div class="absolute inset-0 pointer-events-none overflow-visible">
                    <svg
                      class="w-full h-full overflow-visible"
                      viewBox="0 0 300 400"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <defs>
                        <!-- Subtle refined gradient for the border beam -->
                        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stop-color="#0A0A0A" stop-opacity="0.75" />
                          <stop offset="40%" stop-color="#D44A1C" stop-opacity="0.5" />
                          <stop offset="80%" stop-color="#0A0A0A" stop-opacity="0.15" />
                          <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0" />
                        </linearGradient>
                      </defs>

                      <!-- Base subtle track with fine dashed pattern -->
                      <path
                        d="M 28,8 H 272 A 20,20 0 0,1 292,28 V 372 A 20,20 0 0,1 272,392 H 28 A 20,20 0 0,1 8,372 V 28 A 20,20 0 0,1 28,8 Z"
                        stroke="#0A0A0A"
                        stroke-opacity="0.1"
                        stroke-width="1.5"
                        stroke-dasharray="4 6"
                        vector-effect="non-scaling-stroke"
                      />

                      <!-- Animated glowing border beam flowing clockwise -->
                      <path
                        d="M 28,8 H 272 A 20,20 0 0,1 292,28 V 372 A 20,20 0 0,1 272,392 H 28 A 20,20 0 0,1 8,372 V 28 A 20,20 0 0,1 28,8 Z"
                        pathLength="100"
                        stroke="url(#beam-gradient)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-dasharray="20 80"
                        vector-effect="non-scaling-stroke"
                        class="anim-beam-flow"
                      />

                      <!-- Synchronized Orbiting Arrow (traveling clockwise along perimeter) -->
                      <g>
                        <animateMotion
                          path="M 28,8 H 272 A 20,20 0 0,1 292,28 V 372 A 20,20 0 0,1 272,392 H 28 A 20,20 0 0,1 8,372 V 28 A 20,20 0 0,1 28,8 Z"
                          dur="8s"
                          repeatCount="indefinite"
                          rotate="auto"
                        />
                        <circle r="7" fill="#0A0A0A" fill-opacity="0.1" />
                        <circle r="4.5" fill="#0A0A0A" stroke="#FFFFFF" stroke-width="1" />
                        <!-- Directional arrow head pointing in flight direction -->
                        <path d="M -1.8,-2 L 2,0 L -1.8,2 L -0.7,0 Z" fill="#FFFFFF" />
                      </g>
                    </svg>
                  </div>

                  <!-- 4 Subtle Directional Arrow Markers (North, East, South, West) -->
                  <!-- Top (→) -->
                  <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 px-2 py-0.5 rounded-full bg-cream border border-ink/20 shadow-xs flex items-center justify-center">
                    <svg class="w-3 h-3 text-ink/70 anim-arrow-flow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>

                  <!-- Right (↓) -->
                  <div class="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 py-2 px-0.5 rounded-full bg-cream border border-ink/20 shadow-xs flex items-center justify-center">
                    <svg class="w-3 h-3 text-ink/70 anim-arrow-flow-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                  </div>

                  <!-- Bottom (←) -->
                  <div class="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 px-2 py-0.5 rounded-full bg-cream border border-ink/20 shadow-xs flex items-center justify-center">
                    <svg class="w-3 h-3 text-ink/70 anim-arrow-flow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </div>

                  <!-- Left (↑) -->
                  <div class="absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 py-2 px-0.5 rounded-full bg-cream border border-ink/20 shadow-xs flex items-center justify-center">
                    <svg class="w-3 h-3 text-ink/70 anim-arrow-flow-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                  </div>

                  <!-- Clean, natural portrait photo with rounded corners -->
                  <div class="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-ink/5">
                    <img
                      src="/images/profile.jpg"
                      alt="Ouk Chhunna — Full-Stack Software Developer"
                      class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                </div>

                <!-- Clean, modest Current Position summary -->
                <div class="mt-6 pt-5 border-t border-border space-y-1.5 max-w-[320px]">
                  <p class="font-mono text-xs text-ink-muted uppercase tracking-wider">Current Position</p>
                  <p class="font-display font-700 text-sm text-ink leading-snug">
                    Digital Content & Web (Business Systems) Executive
                  </p>
                  <p class="font-body text-xs text-ink-secondary">Aprati Foods Cambodia</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        <!-- Right: bio content -->
        <div class="lg:col-span-8 lg:pt-8">
          <FadeUp :delay="1">
            <div class="mb-8">
              <span class="inline-block font-body text-xs tracking-[0.15em] uppercase text-ink-muted mb-3 font-600">
                Professional Profile
              </span>
              <h2 class="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight tracking-tight mb-3">
                Full-Stack Software Developer,<br />AI & Business Systems.
              </h2>
              <p class="font-body text-xs sm:text-sm font-600 text-ink-secondary tracking-wide pb-6 border-b border-border">
                Full-Stack Software Developer · AI & Data Analytics · Digital Content & AI Creative
              </p>
            </div>
          </FadeUp>

          <!-- Verbatim 5 paragraphs of Professional Profile from Portfolio.txt lines 8-18 -->
          <FadeUp :delay="2">
            <div class="space-y-4 font-body text-sm text-ink-secondary leading-relaxed">
              <p>
                Multidisciplinary technology and digital professional with experience across
                <strong class="text-ink font-600">full-stack software development, enterprise business systems, AI-assisted data analytics, digital content production, and AI-powered creative content creation</strong>.
              </p>
              <p>
                Experienced in independently developing and maintaining production-ready
                <strong class="text-ink font-600">Web Applications, Progressive Web Apps (PWA), REST APIs, databases, GIS/location-based systems, dashboards, and business automation platforms</strong>.
              </p>
              <p>
                Strong experience delivering digital solutions for
                <strong class="text-ink font-600">Sales Force Automation (SFA), Route-to-Market (RTM), General Trade (GT), Direct Sales, Retail Store Census, POSM, Logistics, Delivery Management, and B2B E-Commerce</strong>.
              </p>
              <p>
                Extensively use <strong class="text-ink font-600">AI across software development, data analysis, business operations, and creative production</strong> to accelerate work, automate repetitive tasks, reduce manual workload and resource requirements, and improve overall productivity.
              </p>
              <p>
                Also experienced in <strong class="text-ink font-600">digital content strategy, content creator management, photography, video production, graphic design, motion graphics, social-media content, promotional materials, and AI-generated marketing content</strong>.
              </p>
            </div>
          </FadeUp>

          <!-- Key Stats Traits from Portfolio.txt -->
          <FadeUp :delay="3">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div v-for="trait in traits" :key="trait.label" class="group">
                <p class="font-display font-700 text-3xl text-ink mb-1">{{ trait.value }}</p>
                <p class="font-body text-xs tracking-[0.1em] uppercase text-ink font-600 mb-0.5">{{ trait.label }}</p>
                <p class="font-body text-[11px] text-ink-muted leading-tight">{{ trait.note }}</p>
              </div>
            </div>
          </FadeUp>

          <!-- Three Core Professional Areas from Portfolio.txt lines 21-250 -->
          <FadeUp :delay="4">
            <div class="mt-10 pt-8 border-t border-border">
              <p class="font-display font-700 text-xs tracking-[0.15em] uppercase text-ink mb-4">
                Three Core Professional Areas
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  v-for="area in coreAreas"
                  :key="area.number"
                  class="bg-white/60 border border-border p-5 flex flex-col justify-between"
                >
                  <div>
                    <span class="font-display font-800 text-xs text-ink-muted">{{ area.number }}</span>
                    <h3 class="font-display font-700 text-sm text-ink mt-1.5 mb-2 leading-snug">
                      {{ area.title }}
                    </h3>
                    <p class="font-body text-xs text-ink-secondary leading-relaxed">
                      {{ area.summary }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <!-- Key Production Achievements from Portfolio.txt lines 498-506 -->
          <FadeUp :delay="5">
            <div class="mt-10 pt-8 border-t border-border">
              <p class="font-display font-700 text-xs tracking-[0.15em] uppercase text-ink mb-4">
                Key Production Achievements
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="(achieve, aIdx) in keyAchievements"
                  :key="aIdx"
                  class="flex items-start gap-2.5 bg-white/50 border border-border p-3.5"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-ink shrink-0 mt-1.5" />
                  <p class="font-body text-xs text-ink-secondary leading-relaxed">
                    {{ achieve }}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <!-- Domain Specializations from Portfolio.txt line 13 -->
          <FadeUp :delay="6">
            <div class="mt-8 pt-6 border-t border-border">
              <p class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted mb-3">Enterprise Domains Delivered</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="domain in domains"
                  :key="domain"
                  class="font-body text-xs text-ink-secondary bg-black/5 border border-border px-3 py-1"
                >
                  {{ domain }}
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const traits = [
  { value: '7+', label: 'Enterprise Platforms', note: 'Developed & deployed in production' },
  { value: '3,900+', label: 'Git Commits', note: 'Tracked across production codebases' },
  { value: 'Full-Stack', label: 'End-to-End Ownership', note: 'Requirements → Architecture → Deploy → Maintain' },
]

const coreAreas = [
  {
    number: '01',
    title: 'Software Development & Solutions Architecture',
    summary: 'Enterprise Web Applications, PWAs, REST APIs with Laravel, MySQL, Leaflet GIS, dynamic routing, and business automation platforms.',
  },
  {
    number: '02',
    title: 'AI, Data Analytics & Intelligent Automation',
    summary: 'AI-assisted development, SQL & Python data processing, sales & operational KPI analytics (SFA, RTM, GT), and performance dashboards.',
  },
  {
    number: '03',
    title: 'Digital Content, Media & AI Content Creation',
    summary: 'Content strategy, creator coordination, photography, video production, motion graphics, and AI-generated marketing assets.',
  },
]

// Exact Key Achievements from Portfolio.txt lines 498-506
const keyAchievements = [
  'Developed and deployed 7+ enterprise production platforms.',
  'Full ownership of software lifecycle from requirements → architecture → development → testing → deployment → maintenance.',
  'Strong experience with Web Applications and Progressive Web Apps (PWA) rather than native mobile application development.',
  'Built systems incorporating GIS, GPS, geolocation, route planning, real-time tracking, dashboards, and business automation.',
  'Combined software engineering, AI data analytics, business operations, and digital media in practical production environments.',
  'Used AI extensively as a productivity multiplier to save time, reduce repetitive work, reduce manual resource requirements, and increase overall project output.',
]

const domains = [
  'Sales Force Automation (SFA)',
  'Route-to-Market (RTM)',
  'General Trade (GT)',
  'Direct Sales & GIS Delivery Routing',
  'Retail Store Census & FMCG Audit',
  'POSM & Merchandising Hangers',
  'Logistics & Delivery Management',
  'B2B Wholesale E-Commerce',
]
</script>

<style scoped>
/* Kinetic continuous border beam */
.anim-beam-flow {
  animation: beam-flow 7s linear infinite;
}
@keyframes beam-flow {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -100;
  }
}

/* Orbiting arrow pulse scale */
.anim-pulse-scale {
  animation: pulse-scale 2s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.6);
    opacity: 0.75;
  }
}

/* 4 Cardinal HUD Arrow Pulses */
.anim-arrow-flow-right {
  animation: arrow-flow-right 1.2s ease-in-out infinite alternate;
}
@keyframes arrow-flow-right {
  0% { transform: translateX(-2px); opacity: 0.7; }
  100% { transform: translateX(2px); opacity: 1; }
}

.anim-arrow-flow-down {
  animation: arrow-flow-down 1.2s ease-in-out infinite alternate;
}
@keyframes arrow-flow-down {
  0% { transform: translateY(-2px); opacity: 0.7; }
  100% { transform: translateY(2px); opacity: 1; }
}

.anim-arrow-flow-left {
  animation: arrow-flow-left 1.2s ease-in-out infinite alternate;
}
@keyframes arrow-flow-left {
  0% { transform: translateX(2px); opacity: 0.7; }
  100% { transform: translateX(-2px); opacity: 1; }
}

.anim-arrow-flow-up {
  animation: arrow-flow-up 1.2s ease-in-out infinite alternate;
}
@keyframes arrow-flow-up {
  0% { transform: translateY(2px); opacity: 0.7; }
  100% { transform: translateY(-2px); opacity: 1; }
}
</style>
