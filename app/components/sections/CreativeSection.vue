<template>
  <section id="creative" class="bg-cream border-t border-border py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <FadeUp>
        <SectionLabel number="07" label="Creative Work & Media" />
      </FadeUp>
      <FadeUp :delay="1">
        <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight mt-4 mb-6">
          Digital Creative
        </h2>
        <p class="font-body text-sm text-ink-secondary leading-relaxed max-w-2xl mb-16">
          Beyond software engineering — digital content strategy, creator management, photography, video production, graphic design, motion graphics, and AI-powered visual assets.
        </p>
      </FadeUp>

      <!-- Masonry grid of creative samples -->
      <FadeUp :delay="2">
        <div class="masonry-grid">
          <div
            v-for="(item, index) in creativeItems"
            :key="index"
            class="masonry-item group relative overflow-hidden cursor-pointer"
          >
            <div class="relative overflow-hidden">
              <img
                v-if="item.useRealPhoto"
                :src="item.src"
                :alt="item.alt"
                class="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                :style="{ height: item.height }"
                loading="lazy"
              />
              <div
                v-else
                class="w-full flex items-center justify-center bg-gray-50 border border-border transition-all duration-500 group-hover:bg-gray-100"
                :style="{ height: item.height, background: item.bg || '#F1F5F9' }"
              >
                <div class="text-center px-6">
                  <p class="font-display font-700 text-3xl mb-2" :style="{ color: item.iconColor || '#D1D5DB' }">
                    {{ item.icon }}
                  </p>
                  <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted">
                    {{ item.type }}
                  </p>
                </div>
              </div>
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                <div>
                  <p class="font-display font-600 text-sm text-white mb-1">{{ item.title }}</p>
                  <p class="font-body text-xs text-white/70">{{ item.type }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <!-- Exact Verbatim Breakdowns from Portfolio.txt lines 224-255 -->
      <FadeUp :delay="3">
        <div class="mt-20 pt-16 border-t border-border">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <!-- Digital Content & Media Production (14 Bullets) -->
            <div class="space-y-5">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-2 h-2 rounded-full bg-ink" />
                  <h3 class="font-display font-700 text-xl text-ink">
                    Digital Content & Media Production
                  </h3>
                </div>
                <span class="font-body text-[11px] uppercase text-ink-muted border border-border px-2 py-0.5">14 Capabilities</span>
              </div>
              <p class="font-body text-xs text-ink-secondary leading-relaxed">
                Complete workflow management from <strong class="text-ink font-600">concept → script → production → editing → review → publishing → performance feedback</strong>.
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="(item, idx) in mediaProductionPoints"
                  :key="idx"
                  class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- AI Content Creation (10 Bullets) -->
            <div class="space-y-5">
              <div class="flex items-center justify-between border-b border-border pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-2 h-2 rounded-full bg-ink" />
                  <h3 class="font-display font-700 text-xl text-ink">
                    AI Content Creation
                  </h3>
                </div>
                <span class="font-body text-[11px] uppercase text-ink-muted border border-border px-2 py-0.5">10 Capabilities</span>
              </div>
              <p class="font-body text-xs text-ink-secondary leading-relaxed">
                Harnessing AI to test visual directions and combine AI generation with traditional cinematography, editing, and design.
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="(item, idx) in aiContentPoints"
                  :key="idx"
                  class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
</template>

<script setup lang="ts">
const creativeItems = [
  {
    title: 'Product Photography',
    type: 'Photography · Commercial',
    useRealPhoto: true,
    src: '/images/creative1.jpg',
    alt: 'Product photography by Ouk Chhunna',
    height: '320px',
  },
  {
    title: 'Brand Visual Identity',
    type: 'Graphic Design · Branding',
    useRealPhoto: false,
    height: '240px',
    bg: '#F8F5F0',
    icon: '◈',
    iconColor: '#C4A882',
  },
  {
    title: 'Portrait & Event',
    type: 'Photography · Portrait',
    useRealPhoto: true,
    src: '/images/creative2.jpg',
    alt: 'Portrait photography by Ouk Chhunna',
    height: '400px',
  },
  {
    title: 'AI-Generated Visuals',
    type: 'AI Art · Midjourney & Stable Diffusion',
    useRealPhoto: false,
    height: '280px',
    bg: '#F0F0F8',
    icon: '✦',
    iconColor: '#A0A0C0',
  },
  {
    title: 'Motion Graphics',
    type: 'Video · After Effects & Premiere',
    useRealPhoto: false,
    height: '220px',
    bg: '#0A0A0A',
    icon: '▶',
    iconColor: '#666666',
  },
  {
    title: 'Architecture & Environment',
    type: 'Photography · Architecture',
    useRealPhoto: true,
    src: '/images/creative3.jpg',
    alt: 'Architecture photography by Ouk Chhunna',
    height: '350px',
  },
  {
    title: 'Social Media Content',
    type: 'Design · Content Calendars',
    useRealPhoto: false,
    height: '200px',
    bg: '#FFF8F0',
    icon: '◻',
    iconColor: '#E0C090',
  },
  {
    title: 'Video Production',
    type: 'Video · Documentary & Commercial',
    useRealPhoto: false,
    height: '260px',
    bg: '#F4F0F8',
    icon: '⬡',
    iconColor: '#B090D0',
  },
]

// Exact 14 bullets from Portfolio.txt lines 228-241
const mediaProductionPoints = [
  'Manage and coordinate content creators and digital media activities.',
  'Manage content creator workflows, production schedules, creative resources, and content delivery.',
  'Plan and manage social media content calendars and publishing schedules.',
  'Develop creative concepts, campaign ideas, and content strategies for digital platforms.',
  'Plan content from concept → script → production → editing → review → publishing → performance feedback.',
  'Manage photo and video production, including shooting, editing, post-production, and final delivery.',
  'Create social media posts, promotional posters, product visuals, packaging materials, and marketing materials.',
  'Create video bumpers, intro/outro animations, branded motion graphics, and promotional visual content.',
  'Support product promotion, campaign content, social-media communication, and digital marketing activities.',
  'Maintain visual consistency and brand identity across digital and marketing channels.',
  'Manage creative assets, B-roll, audio, lower thirds, intro/outro elements, caption presets, templates, and production resources.',
  'Develop structured content production workflows to improve consistency, efficiency, and production speed.',
  'Review content performance and use feedback to improve future creative direction and production quality.',
  'Coordinate content production schedules and resources to support consistent publishing.',
]

// Exact 10 bullets from Portfolio.txt lines 245-254
const aiContentPoints = [
  'Create AI-generated video content for product promotion, social media, and digital marketing campaigns.',
  'Use AI tools to develop product videos, promotional visuals, creative concepts, storyboards, and visual directions.',
  'Create AI-generated posters, product visuals, advertising materials, and social-media content.',
  'Generate creative visual assets that can be combined with real photography, video footage, graphic design, compositing, and motion graphics.',
  'Develop AI-assisted creative content for product launches, social-media campaigns, promotional materials, and digital marketing.',
  'Use AI to rapidly generate and test different creative concepts, visual styles, product presentations, and promotional ideas.',
  'Combine AI-generated content with traditional production workflows to improve creative flexibility and visual quality.',
  'Use AI to increase production speed, content variation, creative output, and overall efficiency.',
  'Apply AI throughout the creative workflow to reduce repetitive production tasks and produce more content with less manual effort and fewer resource requirements.',
  'Use AI as a creative productivity tool while applying human judgment for brand consistency, storytelling, visual quality, product accuracy, and final content decisions.',
]
</script>
