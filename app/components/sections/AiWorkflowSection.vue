<template>
  <section id="ai" class="bg-ink py-24 lg:py-36 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <FadeUp>
        <div class="flex items-center gap-3 mb-6">
          <span class="font-body text-xs tracking-[0.18em] uppercase text-white/30">06</span>
          <span class="w-8 h-px bg-white/20" />
          <span class="font-body text-xs tracking-[0.18em] uppercase text-white/30">AI, Data & Intelligent Automation</span>
        </div>
      </FadeUp>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <!-- Left: Headline & AI Philosophy -->
        <div class="lg:col-span-5">
          <FadeUp :delay="1">
            <h2 class="font-display font-700 text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6">
              AI Is Part Of<br />My Workflow.
            </h2>
            <p class="font-body text-sm text-white/60 leading-relaxed mb-6">
              I integrate Artificial Intelligence extensively across software development, data analytics, business analysis, and operational workflows — not as a gimmick, but as a genuine productivity multiplier combined with human technical judgment.
            </p>
            <div class="p-4 border border-white/10 bg-white/[0.02]">
              <p class="font-display font-700 text-xs text-white uppercase tracking-wider mb-1">
                Productivity Multiplier
              </p>
              <p class="font-body text-xs text-white/50 leading-relaxed">
                Allows more work to be completed faster while maintaining practical technical and business quality, validating outputs to ensure business relevance, accuracy, and usability.
              </p>
            </div>
          </FadeUp>
        </div>

        <!-- Right: Flow diagram & tools -->
        <div class="lg:col-span-7">
          <FadeUp :delay="2">
            <div class="relative">
              <!-- Flow steps -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-0">
                <div
                  v-for="(step, index) in steps"
                  :key="step.label"
                  class="flex flex-col sm:flex-row items-start sm:items-center gap-0 flex-1"
                >
                  <!-- Step -->
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col gap-1 py-4 sm:py-0">
                      <span class="font-body text-xs tracking-[0.15em] uppercase text-white/30">
                        {{ String(index + 1).padStart(2, '0') }}
                      </span>
                      <span class="font-display font-600 text-sm text-white leading-snug">
                        {{ step.label }}
                      </span>
                      <span class="font-body text-xs text-white/40 leading-relaxed">
                        {{ step.desc }}
                      </span>
                    </div>
                  </div>

                  <!-- Arrow connector -->
                  <div
                    v-if="index < steps.length - 1"
                    class="flex sm:flex-row flex-col items-center sm:px-3 py-2 sm:py-0"
                  >
                    <div class="sm:hidden w-px h-6 bg-white/15" />
                    <svg class="hidden sm:block w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Highlight bar -->
              <div class="mt-10 pt-10 border-t border-white/10">
                <p class="font-body text-xs text-white/40 tracking-wider uppercase mb-3">
                  AI & Analytical Technologies Integrated:
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tool in aiTools"
                    :key="tool"
                    class="inline-block font-body text-xs text-white/60 border border-white/10 px-3 py-1.5 hover:border-white/30 hover:text-white transition-colors duration-200"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      <!-- Core AI Integration Principles from Portfolio.txt lines 174-186 -->
      <FadeUp :delay="3">
        <div class="mt-16 pt-12 border-t border-white/10">
          <p class="font-body text-xs tracking-[0.18em] uppercase text-white/40 mb-6">
            Core AI Integration Capabilities
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(item, idx) in aiIntegrationPoints"
              :key="idx"
              class="flex items-start gap-3 p-3.5 border border-white/5 bg-white/[0.02]"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-1.5" />
              <p class="font-body text-xs text-white/70 leading-relaxed">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      <!-- AI-Assisted Business Analytics Applications from Portfolio.txt lines 188-221 -->
      <FadeUp :delay="4">
        <div class="mt-16 pt-12 border-t border-white/10">
          <p class="font-body text-xs tracking-[0.18em] uppercase text-white/40 mb-8">
            AI-Assisted Business Analytics Applications (Exact Verbatim Pillars)
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Sales Analytics -->
            <div class="border border-white/10 p-6 bg-white/[0.02]">
              <div class="flex items-center justify-between mb-3">
                <p class="font-display font-700 text-base text-white">
                  Sales Analytics
                </p>
                <span class="font-body text-[10px] uppercase text-white/40 border border-white/10 px-2 py-0.5">8 Metrics</span>
              </div>
              <p class="font-body text-xs text-white/50 leading-relaxed mb-5">
                Deep analytical workflows evaluating field performance, team KPIs, and commercial momentum.
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="item in salesAnalyticsItems"
                  :key="item"
                  class="flex items-center gap-2.5 font-body text-xs text-white/80"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Operational Analytics -->
            <div class="border border-white/10 p-6 bg-white/[0.02]">
              <div class="flex items-center justify-between mb-3">
                <p class="font-display font-700 text-base text-white">
                  Operational Analytics
                </p>
                <span class="font-body text-[10px] uppercase text-white/40 border border-white/10 px-2 py-0.5">7 Metrics</span>
              </div>
              <p class="font-body text-xs text-white/50 leading-relaxed mb-5">
                Monitoring inventory dynamics, field activity execution, and identifying operational bottlenecks.
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="item in operationalAnalyticsItems"
                  :key="item"
                  class="flex items-center gap-2.5 font-body text-xs text-white/80"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Data Processing -->
            <div class="border border-white/10 p-6 bg-white/[0.02]">
              <div class="flex items-center justify-between mb-3">
                <p class="font-display font-700 text-base text-white">
                  Data Processing & ETL
                </p>
                <span class="font-body text-[10px] uppercase text-white/40 border border-white/10 px-2 py-0.5">8 Workflows</span>
              </div>
              <p class="font-body text-xs text-white/50 leading-relaxed mb-5">
                Automating repetitive data handling, data cleaning, and executive dashboard preparation.
              </p>
              <ul class="space-y-2.5">
                <li
                  v-for="item in dataProcessingItems"
                  :key="item"
                  class="flex items-center gap-2.5 font-body text-xs text-white/80"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
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
const steps = [
  {
    label: 'Idea & Problem',
    desc: 'Define the challenge and business logic',
  },
  {
    label: 'AI Assistance',
    desc: 'Research, schema drafting, and prototyping',
  },
  {
    label: 'Build & Analyze',
    desc: 'Code, SQL query, or analytical output',
  },
  {
    label: 'Human Review',
    desc: 'Rigorous technical validation & verification',
  },
  {
    label: 'Production Ship',
    desc: 'Deploy with operational confidence',
  },
]

const aiTools = [
  'Claude', 'ChatGPT', 'Gemini', 'Python Data Analytics',
  'Midjourney', 'Runway', 'SQL Optimization AI', 'cPanel Pipelines',
]

// Exact points from Portfolio.txt lines 174-186
const aiIntegrationPoints = [
  'Use Artificial Intelligence extensively across software development, data analytics, business analysis, and operational workflows.',
  'Integrate AI into daily development workflows to save time, accelerate development, automate repetitive tasks, and reduce manual workload.',
  'Use AI for coding assistance, debugging, code analysis, system analysis, documentation, problem-solving, and development planning.',
  'Use AI to support SQL queries, database analysis, data transformation, data processing, reporting logic, and analytical workflows.',
  'Analyze sales, customer, inventory, field-sales, retail, and operational data using AI-assisted workflows.',
  'Use AI to identify trends, patterns, anomalies, performance gaps, and potential business opportunities.',
  'Apply AI-assisted analysis to sales performance reviews, KPI analysis, territory analysis, and management reporting.',
  'Use AI to clean, organize, summarize, interpret, compare, and analyze structured data from Excel, CSV files, databases, and business systems.',
  'Combine AI with Python Data Analytics, databases, dashboards, and business systems to support data visualization and forecasting.',
  'Automate repetitive analytical and operational tasks to reduce manual work, processing time, and human resource requirements.',
]

// Exact items from Portfolio.txt lines 192-199
const salesAnalyticsItems = [
  'Sales performance analysis',
  'KPI analysis',
  'Product and customer performance',
  'Territory performance',
  'Sales-representative performance',
  'Productive/unproductive call analysis',
  'Hit-rate analysis',
  'Drop-size analysis',
]

// Exact items from Portfolio.txt lines 203-209
const operationalAnalyticsItems = [
  'Inventory analysis',
  'Stock-aging analysis',
  'Retail/store data analysis',
  'Field activity analysis',
  'Customer data analysis',
  'Operational performance monitoring',
  'Anomaly and performance-gap identification',
]

// Exact items from Portfolio.txt lines 213-220
const dataProcessingItems = [
  'Excel and CSV analysis with AI',
  'Data cleaning and organization with AI Support',
  'Data transformation with AI Support',
  'Data summarization with AI Support',
  'Data comparison with AI Support',
  'SQL assistance with AI Support',
  'Reporting preparation with AI Support',
  'Dashboard data preparation with AI Support',
]
</script>
