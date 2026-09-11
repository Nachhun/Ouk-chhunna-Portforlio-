<template>
  <section id="skills" class="bg-cream border-t border-border py-16 sm:py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
      <FadeUp>
        <SectionLabel number="03" label="Skills & Architecture" />
      </FadeUp>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-8">
        <!-- Section heading -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <FadeUp :delay="1">
              <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight">
                Technical<br />Expertise
              </h2>
              <p class="font-body text-sm text-ink-secondary mt-5 leading-relaxed">
                A multidisciplinary technical foundation built through years of end-to-end production engineering, enterprise business systems, AI acceleration, and creative production.
              </p>

              <!-- Quick stats / badges -->
              <div class="mt-8 pt-6 border-t border-border space-y-3.5">
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-ink shrink-0" />
                  <span class="font-display font-700 text-xs sm:text-[13px] text-ink uppercase tracking-wider">Full-Stack Lifecycle Ownership</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-ink shrink-0" />
                  <span class="font-display font-700 text-xs sm:text-[13px] text-ink uppercase tracking-wider">PWA & Location-First Architecture</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-ink shrink-0" />
                  <span class="font-display font-700 text-xs sm:text-[13px] text-ink uppercase tracking-wider">AI as a Productivity Multiplier</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-ink shrink-0" />
                  <span class="font-display font-700 text-xs sm:text-[13px] text-ink uppercase tracking-wider">Digital Media & Content Production</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-2 h-2 rounded-full bg-ink shrink-0" />
                  <span class="font-display font-700 text-xs sm:text-[13px] text-ink uppercase tracking-wider">AI-Powered Creative Content</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        <!-- Right: 10 Core Skill Categories -->
        <div class="lg:col-span-8">
          <FadeUp :delay="2">
            <div class="mb-6">
              <p class="font-display font-700 text-xs tracking-[0.15em] uppercase text-ink-muted">
                Core Technical Skills (10 Specializations)
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b border-border">
              <div
                v-for="(category, index) in skillCategories"
                :key="category.title"
                class="border-t border-border py-7 pr-6"
                :class="index % 2 === 1 ? 'sm:border-l sm:pl-6 sm:pr-0' : ''"
              >
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-display font-800 text-xs text-ink-muted">{{ String(index + 1).padStart(2, '0') }}</span>
                  <p class="font-display font-700 text-xs tracking-[0.12em] uppercase text-ink">
                    {{ category.title }}
                  </p>
                </div>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span
                    v-for="item in category.items"
                    :key="item"
                    class="font-body text-xs text-ink-secondary bg-white/70 border border-border px-2 py-0.5"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          <!-- Solutions Architecture & Engineering Principles (From Portfolio.txt lines 23-68) -->
          <FadeUp :delay="3">
            <div class="mt-14 pt-10 border-t border-border">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <p class="font-body text-xs tracking-[0.15em] uppercase text-ink-muted mb-1">
                    Engineering Principles & Systems Architecture
                  </p>
                  <h3 class="font-display font-700 text-xl text-ink">
                    Production Architecture Capabilities
                  </h3>
                </div>
                <span class="font-body text-xs text-ink-muted border border-border px-2.5 py-1">
                  21 Principles
                </span>
              </div>

              <div class="space-y-2.5">
                <div
                  v-for="(principle, pIdx) in architecturePrinciples"
                  :key="pIdx"
                  class="bg-white/50 border border-border p-3.5 hover:border-ink/50 hover:bg-white transition-colors duration-200 flex items-start gap-3"
                >
                  <span class="font-display font-800 text-[11px] text-ink-muted shrink-0 mt-0.5 w-5">
                    {{ String(pIdx + 1).padStart(2, '0') }}
                  </span>
                  <p class="font-body text-xs text-ink-secondary leading-relaxed">
                    {{ principle }}
                  </p>
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
// Exact categories and items from Portfolio.txt lines 258-300
const skillCategories = [
  {
    title: 'Frontend Development',
    items: ['Nuxt 3/4', 'Vue.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Composition API', 'State Management', 'Responsive UI Development'],
  },
  {
    title: 'Web Application & PWA',
    items: ['Progressive Web Apps (PWA)', 'Responsive Web Applications', 'Mobile Web', 'GPS-enabled Web Applications', 'Offline-capable Web Features'],
  },
  {
    title: 'Backend Development',
    items: ['Laravel', 'PHP', 'RESTful APIs', 'Sanctum Authentication', 'Eloquent ORM', 'Business Logic', 'API Integration'],
  },
  {
    title: 'Database & Data',
    items: ['MySQL', 'Relational Database Design', 'SQL', 'Spatial Queries', 'Data Validation', 'LocalStorage', 'IndexedDB', 'CSV Processing', 'Excel Reporting'],
  },
  {
    title: 'GIS & Location Technology',
    items: ['Leaflet', 'Mapbox', 'OSRM', 'GPS', 'Geolocation', 'Geofencing', 'Route Planning', 'Interactive Maps', 'Location Tracking'],
  },
  {
    title: 'DevOps & Deployment',
    items: ['Git', 'cPanel', 'Apache', 'PHP-FPM', 'CI/CD', 'Production Deployment', 'Version Control', 'System Maintenance', 'Troubleshooting'],
  },
  {
    title: 'Business Systems',
    items: ['Sales Force Automation (SFA)', 'Route-to-Market Management', 'General Trade Sales Management', 'Direct Sales Management', 'Retail Store Census & Audit', 'POSM Tracking', 'Logistics & Delivery Management', 'B2B E-Commerce'],
  },
  {
    title: 'Data Analytics',
    items: ['Python Data Analytics', 'AI-Assisted Data Analysis', 'Sales Analytics', 'KPI Analysis', 'Territory Analysis', 'Inventory Analysis', 'Reporting', 'Dashboard Data Preparation'],
  },
  {
    title: 'Digital Media',
    items: ['Content Creator Management', 'Content Calendars', 'Creative Strategy', 'Photography', 'Videography', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Social Media Content', 'Promotional Materials', 'Brand Visuals'],
  },
  {
    title: 'AI Creative',
    items: ['AI-Generated Videos', 'AI Product Visuals', 'AI Posters', 'AI Social Media Content', 'AI Creative Concepts', 'AI-Assisted Marketing Content', 'AI + Photography', 'AI + Video Editing', 'AI + Graphic Design', 'AI + Motion Graphics'],
  },
]

// Exact 21 capabilities from Portfolio.txt lines 23-68
const architecturePrinciples = [
  'Use AI extensively throughout software development for coding, debugging, system analysis, documentation, problem-solving, data processing, and repetitive development tasks.',
  'Lead Full-Stack Software Development and end-to-end enterprise system development, from business requirements and system architecture through development, testing, deployment, maintenance, and continuous improvement.',
  'Design, develop, deploy, and maintain enterprise Web Applications, Progressive Web Apps (PWA), REST APIs, databases, GIS solutions, and business automation systems.',
  'Analyze business requirements, operational processes, and user needs and translate them into practical software solutions, digital workflows, and system functionality.',
  'Develop business platforms supporting Sales Force Automation (SFA), Route-to-Market (RTM), General Trade (GT), Direct Sales, Retail Store Census, Point-of-Sale Materials (POSM), Logistics, Delivery Management, and Business-to-Business (B2B) E-Commerce.',
  'Build responsive and mobile-friendly Web Applications and PWAs for field users without requiring separate native mobile applications.',
  'Develop modern frontend applications using Nuxt 3/4, Vue.js, TypeScript, Vite, Tailwind CSS, Composition API, and state management.',
  'Develop backend services and scalable RESTful APIs using Laravel and PHP, including authentication, business logic, validation, integrations, and API communication.',
  'Design and manage MySQL relational databases, including database structures, relationships, business rules, queries, data validation, and spatial data.',
  'Develop GIS and location-based solutions using Leaflet, Mapbox, OSRM, GPS, geolocation, geofencing, interactive maps, and route planning.',
  'Implement GPS and location-aware functionality for field-sales tracking, store visits, route execution, location verification, and real-time monitoring.',
  'Develop interactive mapping features including store mapping, territory visualization, route planning, waypoint management, delivery routes, location tracking, and field activity visualization.',
  'Build business workflows for sales orders, customer management, inventory, delivery planning, stock monitoring, store visits, field surveys, POSM tracking, user management, and reporting.',
  'Develop CSV import/export, bulk data processing, Excel reporting, data validation, data transformation, and large retail/store datasets.',
  'Develop dashboards and reporting for sales performance, field activities, productive/unproductive calls, hit rates, drop size, territory performance, inventory status, and operational monitoring.',
  'Implement role-based access control, authentication, authorization, session management, data validation, and secure API communication.',
  'Develop integrations between frontend applications, backend APIs, databases, GIS services, reporting platforms, and business systems.',
  'Design systems with consideration for performance, scalability, maintainability, usability, data accuracy, and operational reliability.',
  'Troubleshoot and resolve production issues, application bugs, API problems, database issues, deployment problems, and business-process errors.',
  'Manage Git-based development workflows, version control, production deployments, CI/CD pipelines, cPanel hosting, Apache configuration, and system maintenance.',
  'Leverage AI as a productivity multiplier to reduce development time, automate repetitive work, reduce manual workload and human resource requirements, and increase development efficiency.',
]
</script>
