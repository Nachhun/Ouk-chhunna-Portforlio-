<template>
  <section id="experience" class="bg-cream border-t border-border py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <!-- Left: label + heading -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel number="05" label="Experience & Education" />
            </FadeUp>
            <FadeUp :delay="1">
              <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight mt-4">
                Career<br />Timeline
              </h2>
              <p class="font-body text-sm text-ink-secondary mt-5 leading-relaxed">
                Detailed professional history combining enterprise software engineering, AI data workflows, digital media production, and academic foundations.
              </p>
            </FadeUp>
          </div>
        </div>

        <!-- Right: timeline -->
        <div class="lg:col-span-8">
          <div class="relative">
            <!-- Vertical line -->
            <div class="absolute left-0 top-2 bottom-0 w-px bg-border" />

            <div class="space-y-0">
              <!-- Item 1: Executive Role -->
              <div class="relative pl-8 sm:pl-10 pb-16">
                <!-- Dot -->
                <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-ink border-2 border-cream -translate-x-1/2 ring-4 ring-black/5" />

                <FadeUp :delay="1">
                  <!-- Period -->
                  <div class="flex items-center gap-3 mb-2">
                    <p class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted">
                      January 1, 2026 – Present
                    </p>
                    <span class="inline-flex items-center gap-1 font-body text-[10px] tracking-[0.1em] uppercase font-600 text-green-700 border border-green-200 bg-green-50 px-2 py-0.5">
                      Current Role
                    </span>
                  </div>

                  <!-- Role & Company -->
                  <h3 class="font-display font-700 text-2xl text-ink leading-snug">
                    Digital Content & Web (Business Systems) Executive
                  </h3>
                  <p class="font-body text-sm font-600 text-ink-secondary mt-0.5 mb-3">
                    Aprati Foods Cambodia
                  </p>

                  <!-- Overview -->
                  <p class="font-body text-sm text-ink-secondary leading-relaxed mb-6 bg-black/[0.02] border-l-2 border-ink p-4">
                    Responsible for the development and support of business systems while also contributing to digital content, AI-assisted production, data analytics, and digital marketing activities.
                  </p>

                  <!-- Sub-section 1: Software Development & Business Systems -->
                  <div class="mb-6 bg-white/60 border border-border p-5">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-2 h-2 rounded-full bg-ink" />
                      <h4 class="font-display font-700 text-sm uppercase tracking-wider text-ink">
                        Software Development & Business Systems
                      </h4>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(bullet, bIdx) in executiveSoftwareBullets"
                        :key="bIdx"
                        class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Sub-section 2: AI & Data Analytics -->
                  <div class="mb-6 bg-white/60 border border-border p-5">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-2 h-2 rounded-full bg-ink" />
                      <h4 class="font-display font-700 text-sm uppercase tracking-wider text-ink">
                        AI & Data Analytics
                      </h4>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(bullet, bIdx) in executiveAiBullets"
                        :key="bIdx"
                        class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Sub-section 3: Digital Content & AI Content Creation -->
                  <div class="mb-6 bg-white/60 border border-border p-5">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-2 h-2 rounded-full bg-ink" />
                      <h4 class="font-display font-700 text-sm uppercase tracking-wider text-ink">
                        Digital Content & AI Content Creation
                      </h4>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(bullet, bIdx) in executiveCreativeBullets"
                        :key="bIdx"
                        class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Production Achievement Badge -->
                  <div class="bg-black/5 border border-border p-4 mb-4">
                    <p class="font-display font-700 text-xs uppercase tracking-wider text-ink mb-1">
                      Production Achievement
                    </p>
                    <p class="font-body text-xs text-ink-secondary leading-relaxed">
                      7+ enterprise platforms deployed, with <strong class="text-ink font-600">3,900+ Git production commits</strong> across major systems including Direct Sales GIS Routing, GT Field Sales SFA, D-Day Executive Analytics, Retail Census, POSM Hangers, Brand Portal, and B2B Wholesale.
                    </p>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in executiveTags"
                      :key="tag"
                      class="font-body text-xs text-ink-secondary border border-border px-2.5 py-1 bg-white/40"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </FadeUp>
              </div>

              <!-- Item 2: Intern Role -->
              <div class="relative pl-8 sm:pl-10 pb-16">
                <!-- Dot -->
                <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full border border-ink-secondary bg-cream -translate-x-1/2" />

                <FadeUp :delay="2">
                  <!-- Period -->
                  <p class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted mb-2">
                    July 2025 – November 2025
                  </p>

                  <!-- Role & Company -->
                  <h3 class="font-display font-700 text-2xl text-ink leading-snug">
                    Digital Content & AI Content Creation Intern
                  </h3>
                  <p class="font-body text-sm font-600 text-ink-secondary mt-0.5 mb-3">
                    Aprati Foods Cambodia
                  </p>

                  <!-- Overview -->
                  <p class="font-body text-sm text-ink-secondary leading-relaxed mb-6 bg-black/[0.02] border-l-2 border-border-strong p-4">
                    During the internship, worked across AI Content Creation, digital media, Web Development, and business-system projects.
                  </p>

                  <!-- Sub-section 1: AI Content Creation & Digital Media -->
                  <div class="mb-6 bg-white/60 border border-border p-5">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-2 h-2 rounded-full bg-border-strong" />
                      <h4 class="font-display font-700 text-sm uppercase tracking-wider text-ink">
                        AI Content Creation & Digital Media
                      </h4>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(bullet, bIdx) in internMediaBullets"
                        :key="bIdx"
                        class="flex items-start gap-2.5 font-body text-xs text-ink-secondary leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Sub-section 2: Web & Business-System Development -->
                  <div class="mb-6 bg-white/60 border border-border p-5">
                    <div class="flex items-center gap-2 mb-3">
                      <span class="w-2 h-2 rounded-full bg-border-strong" />
                      <h4 class="font-display font-700 text-sm uppercase tracking-wider text-ink">
                        Web & Business-System Development
                      </h4>
                    </div>
                    <div class="space-y-4">
                      <div class="border-l-2 border-border pl-3">
                        <p class="font-display font-600 text-xs text-ink uppercase tracking-wider mb-1">
                          B2B E-Commerce Platform
                        </p>
                        <ul class="space-y-1.5">
                          <li class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed">
                            <span class="w-1 h-1 rounded-full bg-border-strong shrink-0 mt-1.5" />
                            <span>Developed a Web-based E-Commerce / B2B ordering platform for business customers.</span>
                          </li>
                          <li class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed">
                            <span class="w-1 h-1 rounded-full bg-border-strong shrink-0 mt-1.5" />
                            <span>Supported functionality related to customer access, product ordering, pricing, and online business transactions.</span>
                          </li>
                        </ul>
                      </div>

                      <div class="border-l-2 border-border pl-3">
                        <p class="font-display font-600 text-xs text-ink uppercase tracking-wider mb-1">
                          POSM Hanger Visibility & Tracking System
                        </p>
                        <ul class="space-y-1.5">
                          <li class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed">
                            <span class="w-1 h-1 rounded-full bg-border-strong shrink-0 mt-1.5" />
                            <span>Developed a POSM Hanger Visibility and Tracking Web/PWA system.</span>
                          </li>
                          <li class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed">
                            <span class="w-1 h-1 rounded-full bg-border-strong shrink-0 mt-1.5" />
                            <span>Supported tracking of POSM assets, placement, verification, and asset information.</span>
                          </li>
                          <li class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed">
                            <span class="w-1 h-1 rounded-full bg-border-strong shrink-0 mt-1.5" />
                            <span>Implemented image/photo-based verification and structured asset management.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Takeaway note -->
                  <p class="font-body text-xs text-ink-muted italic mb-4">
                    This internship provided practical experience combining AI Content Creation, Digital Media, Web Development, and Business Systems before progressing into a full-time technology and digital role at Aprati Foods Cambodia.
                  </p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in internTags"
                      :key="tag"
                      class="font-body text-xs text-ink-secondary border border-border px-2.5 py-1 bg-white/40"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </FadeUp>
              </div>

              <!-- Item 3: Education & Awards -->
              <div class="relative pl-8 sm:pl-10">
                <!-- Dot -->
                <div class="absolute left-0 top-2 w-2.5 h-2.5 rounded-full border border-ink-secondary bg-cream -translate-x-1/2" />

                <FadeUp :delay="3">
                  <!-- Period -->
                  <p class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted mb-2">
                    2023 – 2026
                  </p>

                  <!-- Degree & University -->
                  <h3 class="font-display font-700 text-2xl text-ink leading-snug">
                    Bachelor of Information Technology & Engineering
                  </h3>
                  <p class="font-body text-sm font-600 text-ink-secondary mt-0.5 mb-3">
                    Royal University of Phnom Penh (RUPP)
                  </p>

                  <p class="font-body text-sm text-ink-secondary leading-relaxed mb-5">
                    Specialized coursework in computer science, software engineering, systems architecture, algorithms, and relational database management.
                  </p>

                  <!-- Certification / Award -->
                  <div class="bg-white/60 border border-border p-5 mb-4">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <h4 class="font-display font-700 text-xs uppercase tracking-wider text-ink">
                        Certification / Award
                      </h4>
                    </div>
                    <p class="font-body text-xs text-ink-secondary leading-relaxed pl-6">
                      Team Leader of SDA program in Checkin Me — led for product content and graphic design with team for Checkin Me.
                    </p>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tag in educationTags"
                      :key="tag"
                      class="font-body text-xs text-ink-secondary border border-border px-2.5 py-1 bg-white/40"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Exact bullets from Portfolio.txt lines 343-349
const executiveSoftwareBullets = [
  'Develop and maintain enterprise Web Applications and Progressive Web Apps (PWA) for sales, field operations, retail census, logistics, POSM, and B2B E-Commerce.',
  'Lead end-to-end Full-Stack Development, including system architecture, frontend, backend APIs, database design, testing, deployment, troubleshooting, and maintenance.',
  'Develop solutions using Nuxt, Vue.js, TypeScript, Laravel, PHP, MySQL, REST APIs, GIS, GPS, and geolocation technologies.',
  'Build business workflows for sales orders, customer management, inventory, delivery planning, store visits, field surveys, POSM tracking, and reporting.',
  'Develop GIS/location-based functionality for route planning, store mapping, field-sales tracking, geofencing, and real-time monitoring.',
  'Support production systems, resolve bugs, improve existing functionality, and respond to business-user requirements.',
  'Manage Git-based development, deployment, cPanel hosting, API integration, and production system maintenance.',
]

// Exact bullets from Portfolio.txt lines 353-358
const executiveAiBullets = [
  'Use AI extensively throughout software development and data-analysis workflows to save time, accelerate development, automate repetitive tasks, and reduce manual workload.',
  'Use AI for coding, debugging, system analysis, SQL assistance, data processing, documentation, problem-solving, and development planning.',
  'Analyze sales, customer, inventory, retail, field-sales, and operational data using AI-assisted workflows.',
  'Use AI to identify trends, patterns, anomalies, performance gaps, and potential business opportunities.',
  'Support sales performance reviews, KPI analysis, territory analysis, reporting, and management decision-making.',
  'Combine AI with Python, SQL, Excel/CSV data, databases, dashboards, and business systems.',
]

// Exact bullets from Portfolio.txt lines 362-367
const executiveCreativeBullets = [
  'Plan and produce digital content, social-media content, promotional materials, photography, video, graphic design, and motion graphics.',
  'Manage content production workflows including creative concepts, planning, production, editing, review, publishing, and performance improvement.',
  'Create and support AI-generated product videos, product visuals, posters, promotional content, and social-media materials.',
  'Combine AI-generated assets with photography, video editing, graphic design, compositing, and motion graphics.',
  'Use AI to increase creative output, production speed, content variation, and overall efficiency.',
  'Apply human judgment to maintain brand consistency, storytelling, product accuracy, visual quality, and final creative decisions.',
]

const executiveTags = [
  'Nuxt 3/4', 'Vue.js', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'GIS / Leaflet', 'OSRM',
  'Python Data Analytics', 'AI Automation', 'cPanel CI/CD', 'SFA & RTM',
]

// Exact bullets from Portfolio.txt lines 391-397
const internMediaBullets = [
  'Created AI-generated product promotion videos, product visuals, posters, and social-media content.',
  'Developed creative concepts, storyboards, visual directions, and promotional ideas using AI-assisted workflows.',
  'Combined AI-generated assets with photography, video editing, graphic design, and motion graphics.',
  'Supported product launches, social-media campaigns, and digital marketing activities.',
  'Used AI to test multiple creative concepts, visual styles, product presentations, and promotional ideas.',
  'Applied AI to reduce repetitive production work, improve production speed, and increase creative output.',
  'Used human judgment to ensure brand consistency, product accuracy, visual quality, and appropriate final content.',
]

const internTags = [
  'AI Content Creation', 'Web Development', 'B2B E-Commerce', 'POSM Tracking',
  'Video Production', 'Graphic Design', 'Motion Graphics',
]

const educationTags = [
  'Software Engineering', 'Information Technology', 'Algorithms', 'Database Systems',
  'RUPP', 'SDA Leadership Award',
]
</script>
