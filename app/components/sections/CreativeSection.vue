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

      <!-- Capabilities Breakdown -->
      <FadeUp :delay="2">
        <div>
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
