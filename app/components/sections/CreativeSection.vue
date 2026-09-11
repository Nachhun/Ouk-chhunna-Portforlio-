<template>
  <section id="creative" class="bg-cream border-t border-border py-16 sm:py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
      <FadeUp>
        <SectionLabel number="07" label="Creative Work & Media" />
      </FadeUp>
      <FadeUp :delay="1">
        <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight mt-4 mb-6">
          Digital Creative
        </h2>
        <p class="font-body text-base sm:text-lg font-semibold text-ink/85 leading-relaxed max-w-3xl mb-12">
          Beyond software engineering — digital content strategy, creator management, photography, video production, graphic design, motion graphics, and AI-powered visual assets.
        </p>
      </FadeUp>

      <!-- Capabilities Breakdown -->
      <FadeUp :delay="2">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <!-- Digital Content & Media Production (14 Bullets) -->
          <div class="bg-white border border-border/90 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all space-y-6">
            <div class="flex items-center justify-between border-b border-border/80 pb-4">
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-ink" />
                <h3 class="font-display font-800 text-2xl sm:text-3xl text-ink tracking-tight">
                  Digital Content & Media Production
                </h3>
              </div>
              <span class="font-body text-xs sm:text-sm font-700 uppercase tracking-wider text-ink bg-ink/5 border border-ink/10 px-3 py-1 rounded-full shrink-0">
                14 Capabilities
              </span>
            </div>

            <div class="p-4 rounded-xl bg-surface/80 border border-border">
              <p class="font-body text-sm sm:text-base font-semibold text-ink leading-relaxed">
                Complete workflow management from <span class="underline decoration-accent-terracotta/40 decoration-2 font-bold">concept → script → production → editing → review → publishing → performance feedback</span>.
              </p>
            </div>

            <ul class="space-y-3.5">
              <li
                v-for="(item, idx) in mediaProductionPoints"
                :key="idx"
                class="flex items-start gap-3.5 p-2 rounded-lg hover:bg-cream/60 transition-colors"
              >
                <span class="w-2 h-2 rounded-full bg-ink shrink-0 mt-2" />
                <span class="font-body text-[15px] sm:text-base font-medium text-ink leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- AI Content Creation (10 Bullets) -->
          <div class="bg-white border border-border/90 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all space-y-6">
            <div class="flex items-center justify-between border-b border-border/80 pb-4">
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-ink" />
                <h3 class="font-display font-800 text-2xl sm:text-3xl text-ink tracking-tight">
                  AI Content Creation
                </h3>
              </div>
              <span class="font-body text-xs sm:text-sm font-700 uppercase tracking-wider text-ink bg-ink/5 border border-ink/10 px-3 py-1 rounded-full shrink-0">
                10 Capabilities
              </span>
            </div>

            <div class="p-4 rounded-xl bg-surface/80 border border-border">
              <p class="font-body text-sm sm:text-base font-semibold text-ink leading-relaxed">
                Harnessing AI to test visual directions and combine AI generation with traditional cinematography, editing, and design.
              </p>
            </div>

            <ul class="space-y-3.5">
              <li
                v-for="(item, idx) in aiContentPoints"
                :key="idx"
                class="flex items-start gap-3.5 p-2 rounded-lg hover:bg-cream/60 transition-colors"
              >
                <span class="w-2 h-2 rounded-full bg-ink shrink-0 mt-2" />
                <span class="font-body text-[15px] sm:text-base font-medium text-ink leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
</template>

<script setup lang="ts">


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
