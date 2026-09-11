<template>
  <section id="projects" class="bg-cream border-t border-border py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <FadeUp>
        <SectionLabel number="04" label="Selected Work" />
      </FadeUp>
      <FadeUp :delay="1">
        <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight mt-4 mb-20">
          Selected Projects
        </h2>
      </FadeUp>

      <!-- Projects -->
      <div class="space-y-0">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="border-t border-border py-16 lg:py-24"
        >
          <FadeUp :delay="1">
            <div
              class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
              :class="index % 2 === 1 ? 'lg:direction-rtl' : ''"
            >
              <!-- Project info (left or right based on index) -->
              <div
                class="lg:col-span-5 flex flex-col justify-between gap-8"
                :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
              >
                <!-- Number & category -->
                <div>
                  <div class="flex items-baseline gap-4 mb-6">
                    <span class="font-display font-800 text-6xl lg:text-7xl text-border-strong leading-none">
                      {{ project.id }}
                    </span>
                    <div class="flex flex-wrap items-center gap-2.5">
                      <span class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted">
                        {{ project.type }}
                      </span>
                      <span
                        v-if="project.commits"
                        class="inline-flex items-center gap-1 font-body text-[10px] tracking-[0.08em] uppercase font-600 text-ink bg-black/5 border border-border px-2 py-0.5"
                      >
                        <svg class="w-3 h-3 text-ink-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="3" />
                          <line x1="3" y1="12" x2="9" y2="12" />
                          <line x1="15" y1="12" x2="21" y2="12" />
                        </svg>
                        {{ project.commits }}
                      </span>
                    </div>
                  </div>

                  <h3 class="font-display font-700 text-2xl lg:text-3xl text-ink leading-snug tracking-tight mb-4">
                    {{ project.title }}
                  </h3>
                  <p class="font-body text-sm text-ink-secondary leading-relaxed mb-4">
                    {{ project.description }}
                  </p>

                  <!-- Feature Bullets -->
                  <ul v-if="project.bullets" class="space-y-1.5 mb-6">
                    <li
                      v-for="(b, bIdx) in project.bullets"
                      :key="bIdx"
                      class="flex items-start gap-2 font-body text-xs text-ink-secondary leading-relaxed"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-border-strong shrink-0 mt-1.5" />
                      <span>{{ b }}</span>
                    </li>
                  </ul>

                  <!-- Confidential badge -->
                  <div v-if="project.confidential" class="flex items-center gap-2 mb-6">
                    <div class="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span class="font-body text-xs tracking-[0.12em] uppercase text-ink-muted">
                      Enterprise Production System · Confidential
                    </span>
                  </div>

                  <!-- Tech stack -->
                  <div class="flex flex-wrap gap-2 mb-8">
                    <span
                      v-for="tech in project.tech"
                      :key="tech"
                      class="inline-block font-body text-xs text-ink-secondary border border-border px-3 py-1 hover:border-ink hover:text-ink transition-colors duration-200"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Role & contribution -->
                  <div class="space-y-3 pt-6 border-t border-border">
                    <div class="flex gap-4">
                      <span class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted w-24 shrink-0">Role</span>
                      <span class="font-body text-xs text-ink-secondary">{{ project.role }}</span>
                    </div>
                    <div class="flex gap-4">
                      <span class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted w-24 shrink-0">Impact</span>
                      <span class="font-body text-xs text-ink-secondary">{{ project.impact }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project visual -->
              <div
                class="lg:col-span-7"
                :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
              >
                <div class="project-image-wrap">
                  <!-- Mockup placeholder with project-themed UI -->
                  <div
                    class="mockup-placeholder relative w-full aspect-[16/10] bg-gray-50 border border-border overflow-hidden"
                    :style="{ background: project.mockupBg }"
                  >
                    <!-- Browser chrome -->
                    <div class="absolute top-0 left-0 right-0 h-8 flex items-center px-4 gap-2 bg-white/80 border-b border-border">
                      <div class="flex gap-1.5">
                        <div class="w-2.5 h-2.5 rounded-full bg-red-300" />
                        <div class="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                        <div class="w-2.5 h-2.5 rounded-full bg-green-300" />
                      </div>
                      <div class="flex-1 mx-4 h-4 bg-gray-100 rounded text-[9px] font-body text-ink-muted flex items-center px-2">
                        {{ project.confidential ? '● ● ● ● ● ● ● ● ● ● ● ●' : project.url || 'app.internal' }}
                      </div>
                    </div>

                    <!-- Mock content -->
                    <div class="absolute inset-0 top-8 p-6 flex flex-col gap-4">
                      <div class="flex gap-4">
                        <!-- Sidebar mock -->
                        <div class="w-36 shrink-0 space-y-2">
                          <div class="h-2 rounded bg-black/10 w-3/4" />
                          <div class="h-1.5 rounded bg-black/6 w-full" />
                          <div class="h-1.5 rounded bg-black/6 w-5/6" />
                          <div class="h-1.5 rounded bg-black/6 w-4/5" />
                          <div class="mt-3 h-1.5 rounded bg-black/6 w-full" />
                          <div class="h-1.5 rounded bg-black/6 w-2/3" />
                          <div class="h-1.5 rounded bg-black/6 w-3/4" />
                        </div>
                        <!-- Main area mock -->
                        <div class="flex-1 space-y-3">
                          <div class="flex gap-3">
                            <div class="flex-1 h-16 rounded bg-black/6 border border-black/5" />
                            <div class="flex-1 h-16 rounded bg-black/6 border border-black/5" />
                            <div class="flex-1 h-16 rounded bg-black/6 border border-black/5" />
                          </div>
                          <div class="h-24 rounded bg-black/6 border border-black/5" v-if="project.hasMap">
                            <div class="w-full h-full flex items-center justify-center">
                              <span class="font-body text-xs text-ink-muted tracking-widest uppercase">[ Map View ]</span>
                            </div>
                          </div>
                          <div class="h-20 rounded bg-black/6 border border-black/5" v-else />
                          <div class="flex gap-2">
                            <div class="h-1.5 rounded bg-black/10 flex-1" />
                            <div class="h-1.5 rounded bg-black/6 w-1/3" />
                          </div>
                          <div class="h-1.5 rounded bg-black/6 w-4/5" />
                        </div>
                      </div>
                    </div>

                    <!-- Confidential overlay -->
                    <div
                      v-if="project.confidential"
                      class="absolute inset-0 top-8 flex items-center justify-center bg-cream/70 backdrop-blur-[2px]"
                    >
                      <div class="text-center">
                        <div class="inline-flex items-center gap-2 border border-border-strong px-5 py-3 bg-cream">
                          <svg class="w-3.5 h-3.5 text-ink-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                          <span class="font-body text-xs tracking-[0.14em] uppercase text-ink-secondary">Confidential</span>
                        </div>
                        <p class="font-body text-xs text-ink-muted mt-3">Production system — details available on request</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: string
  title: string
  type: string
  commits: string
  description: string
  bullets: string[]
  tech: string[]
  role: string
  impact: string
  confidential: boolean
  hasMap: boolean
  mockupBg: string
  url?: string
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Direct Sales & Dynamic Delivery Routing Platform',
    type: 'Web Application · PWA',
    commits: '1,499 Commits',
    description:
      'Developed an end-to-end Direct Sales and Delivery Management Web/PWA Platform. Built interactive GIS route planning and automated inventory aggregation.',
    bullets: [
      'Developed an end-to-end Direct Sales and Delivery Management Web/PWA Platform.',
      'Built workflows for order management, customer management, delivery planning, inventory allocation, delivery assignment, and delivery tracking.',
      'Developed interactive GIS route planning with custom route drawing, waypoint management, route visualization, route editing, and multi-stop delivery planning.',
      'Implemented delivery-plan workflows for assignment, unassignment, rescheduling, and closed-shop deliveries.',
      'Developed inventory aggregation based on delivery plans to support warehouse preparation and delivery operations.',
      'Created dynamic warehouse pick-list generation and Excel export.',
      'Implemented location-based functionality using GIS mapping and road-routing services.',
      'Maintained and enhanced the production platform with 1,499 Git production commits.',
    ],
    tech: ['Nuxt 3', 'Vue.js', 'Laravel REST API', 'MySQL', 'Leaflet GIS', 'OSRM', 'cPanel CI/CD'],
    role: 'Full-Stack Developer / System Architect',
    impact: '1,499 Git production commits; powers daily multi-stop delivery routing & inventory allocation.',
    confidential: true,
    hasMap: true,
    mockupBg: '#F1F5F9',
  },
  {
    id: '02',
    title: 'GT Field Sales & Inventory Management Platform',
    type: 'Web Application + PWA',
    commits: '1,088 Commits',
    description:
      'Developed a General Trade Sales Force Automation (SFA) Web/PWA Platform covering store visits, stock counting, route execution, and geolocation-verified tracking without native apps.',
    bullets: [
      'Developed a General Trade Sales Force Automation Web/PWA Platform.',
      'Built workflows covering store visits, sales orders, inventory management, route execution, customer/store information, and sales-representative tracking.',
      'Implemented GPS and geolocation functionality for routes, store arrival, visit duration, and field activities.',
      'Developed stock counting, stock aging, expiry monitoring, damaged/returned SKU management, and reorder management.',
      'Built real-time tracking maps and visit timelines.',
      'Developed store-universe management and bulk CSV import for large retail datasets.',
      'Managed geographical structures including Provinces, Khans, Sangkats, and ASM territories.',
      'Designed the solution as a responsive Web/PWA platform without a separate native mobile application.',
      'Maintained the production system with 1,088 Git production commits.',
    ],
    tech: ['Nuxt 3/4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PHP', 'MySQL', 'GPS', 'GIS'],
    role: 'Full-Stack Developer / System Architect',
    impact: '1,088 Git production commits; eliminated manual paper reporting across field sales operations.',
    confidential: true,
    hasMap: true,
    mockupBg: '#F8FAFC',
  },
  {
    id: '03',
    title: 'D-Day Field Sales & Executive Analytics Platform',
    type: 'Web Application / PWA',
    commits: '876 Commits',
    description:
      'Developed a D-Day Field Sales Web/PWA Platform for intensive field-sales campaigns. Features real-time KPI calculations, sales performance dashboards, and territory leaderboards.',
    bullets: [
      'Developed a D-Day Field Sales Web/PWA Platform for intensive field-sales campaigns.',
      'Built functionality for retail-store mapping, field information collection, order capture, and sales activity monitoring.',
      'Developed calculations for productive calls, unproductive calls, hit rates, and drop-size performance.',
      'Created sales performance dashboards and territory leaderboards.',
      'Developed management reporting for individual, team, and territory performance.',
      'Integrated field data with analytical workflows for sales performance evaluation and management decision-making.',
      'Implemented multi-target deployment for the field application and executive analytics dashboard.',
      'Maintained the project with 876 Git production commits.',
    ],
    tech: ['Nuxt 3/4', 'Laravel', 'Python Data Analytics', 'cPanel CI/CD'],
    role: 'Full-Stack Developer / System Architect',
    impact: '876 Git production commits; provides real-time sales intelligence and territory leaderboards.',
    confidential: true,
    hasMap: false,
    mockupBg: '#F8F7F4',
  },
  {
    id: '04',
    title: 'Retail Store Census & FMCG Audit System',
    type: 'Web Application / PWA',
    commits: '277 Commits',
    description:
      'Developed a Retail Store Census and FMCG Audit Web/PWA Platform to replace manual store enumeration across Phnom Penh and provincial territories with QA back-check workflows.',
    bullets: [
      'Developed a Retail Store Census and FMCG Audit Web/PWA Platform to replace manual store enumeration.',
      'Built GIS functionality for mapping audited stores and potential/unvisited store locations.',
      'Developed field forms for GPS coordinates, storefront photos, shelf facings, price tiers, and competitor SKU information.',
      'Implemented retail mapping across Phnom Penh and provincial areas.',
      'Created supervisor Quality Assurance and back-check workflows.',
      'Implemented approve, reject, and re-enumeration workflows.',
      'Designed the system for large-scale retail data collection and structured field reporting.',
      'Maintained the project with 277 Git production commits.',
    ],
    tech: ['Nuxt 3', 'Laravel', 'MySQL', 'Leaflet', 'Mapbox', 'GIS'],
    role: 'Full-Stack Developer / System Architect',
    impact: '277 Git production commits; structured large retail datasets across provinces and Sangkats.',
    confidential: true,
    hasMap: true,
    mockupBg: '#F1F5F9',
  },
  {
    id: '05',
    title: 'POSM & Merchandising Hanger Tracking System',
    type: 'Web Application / PWA',
    commits: '80 Commits',
    description:
      'Developed a POSM and merchandising asset tracking Web/PWA platform managing asset allocation, photo-based installation verification, damaged items, and reconciliation.',
    bullets: [
      'Developed a POSM and merchandising asset tracking Web/PWA platform.',
      'Built workflows for POSM registration, allocation, installation verification, and asset tracking.',
      'Implemented photo upload and image-based verification.',
      'Developed asset lifecycle management covering allocation, damaged items, retired assets, and reconciliation.',
      'Maintained the production system with 80 Git production commits.',
    ],
    tech: ['Nuxt 3', 'Laravel REST API', 'MySQL', 'cPanel CI/CD'],
    role: 'Full-Stack Developer',
    impact: '80 Git production commits; full visibility into trade marketing asset placements.',
    confidential: true,
    hasMap: false,
    mockupBg: '#F0F4FF',
  },
  {
    id: '06',
    title: 'Aprati Foods Corporate Brand Portal',
    type: 'Web Application',
    commits: '79 Commits',
    description:
      'Developed the corporate brand and product Web Portal. Built content-management functionality for product lines, announcements, and optimized image processing with normalized caching.',
    bullets: [
      'Developed the corporate brand and product Web Portal.',
      'Built content-management functionality for product information, brand content, company announcements, and digital assets.',
      'Implemented optimized product-image handling including storage, format conversion, normalization, and caching.',
      'Developed the frontend using Vue.js/Vite and integrated it with Laravel API.',
      'Maintained the project with 79 Git production commits.',
    ],
    tech: ['Vue.js', 'Vite', 'Laravel API', 'Apache'],
    role: 'Full-Stack Developer / Web Developer',
    impact: '79 Git production commits; high-performance brand portal representing Aprati Foods.',
    confidential: false,
    hasMap: false,
    mockupBg: '#FAFAF8',
    url: 'apratifoods.com.kh',
  },
  {
    id: '07',
    title: 'B2B Wholesale E-Order Platform',
    type: 'Web Application',
    commits: 'Production',
    description:
      'Developed a B2B wholesale E-Commerce Web Platform enabling authorized customers to place wholesale orders online with tiered pricing without manual sales-rep intervention.',
    bullets: [
      'Developed a B2B wholesale E-Commerce Web Platform.',
      'Built secure customer authentication, role-based access, and session management.',
      'Implemented tiered pricing and price-book management.',
      'Enabled authorized customers to place B2B wholesale orders online without manual sales-representative intervention.',
      'Maintained and improved the production platform.',
    ],
    tech: ['Nuxt / Vue', 'Laravel REST API', 'MySQL', 'cPanel Git Pipeline'],
    role: 'Full-Stack Developer',
    impact: 'Automated recurring wholesale order processing and eliminated manual order-taking friction.',
    confidential: true,
    hasMap: false,
    mockupBg: '#F8FAFC',
  },
]
</script>
