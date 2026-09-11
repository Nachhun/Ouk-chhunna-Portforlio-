<template>
  <div class="relative w-full rounded-xl overflow-hidden border border-border/80 shadow-xl bg-[#0b132b] text-white font-sans select-none transition-all duration-300 hover:shadow-2xl">
    <!-- Browser Chrome Bar -->
    <div class="h-9 px-3.5 bg-[#0f172a] border-b border-white/10 flex items-center justify-between gap-3 text-xs">
      <!-- Window Controls -->
      <div class="flex items-center gap-1.5 shrink-0">
        <span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/90 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#10b981]/90 inline-block"></span>
      </div>

      <!-- URL Omnibar with Live Demo Pill -->
      <div class="flex-1 max-w-md mx-auto h-6 bg-white/[0.07] hover:bg-white/[0.1] transition-colors rounded-md px-2.5 flex items-center justify-between text-[11px] text-gray-300 border border-white/5">
        <div class="flex items-center gap-1.5 truncate">
          <svg class="w-3 h-3 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span class="font-mono text-[10.5px] text-gray-200">demo.afc-directsales.kh<span class="text-white/40">/admin/deliveries/map</span></span>
        </div>
        <span class="hidden sm:inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          LIVE DEMO
        </span>
      </div>

      <!-- External Launch Link -->
      <a
        :href="demoUrl"
        target="_blank"
        rel="noopener"
        class="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-sky-300 hover:text-sky-200 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 px-2.5 py-1 rounded transition-colors group"
        title="Open full interactive demo app"
      >
        <span>Open App</span>
        <svg class="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>

    <!-- Mini Dashboard Top Header -->
    <div class="px-4 py-2 bg-[#111c3a] border-b border-white/5 flex flex-wrap items-center justify-between gap-2">
      <!-- App Brand & Territory -->
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-500 flex items-center justify-center font-bold text-white text-xs shadow-inner">
          ⚡
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold tracking-tight text-white">Direct Sales & SFA PWA</span>
            <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-gray-300">v4.2 Demo</span>
          </div>
          <p class="text-[10px] text-gray-400">Phnom Penh & Kandal · Multi-Stop Fleet GIS</p>
        </div>
      </div>

      <!-- Interactive Tab Controls -->
      <div class="flex items-center bg-black/30 p-0.5 rounded-lg border border-white/5 text-[11px]">
        <button
          type="button"
          @click="activeTab = 'map'"
          class="px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5"
          :class="activeTab === 'map' ? 'bg-sky-600 text-white font-semibold shadow-sm' : 'text-gray-400 hover:text-white'"
        >
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          <span>GIS Route Map</span>
        </button>
        <button
          type="button"
          @click="activeTab = 'orders'"
          class="px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5"
          :class="activeTab === 'orders' ? 'bg-sky-600 text-white font-semibold shadow-sm' : 'text-gray-400 hover:text-white'"
        >
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Orders (1,420)</span>
        </button>
        <button
          type="button"
          @click="activeTab = 'kpi'"
          class="px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5"
          :class="activeTab === 'kpi' ? 'bg-sky-600 text-white font-semibold shadow-sm' : 'text-gray-400 hover:text-white'"
        >
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span>Territory KPI</span>
        </button>
      </div>
    </div>

    <!-- Interactive View Canvas Area -->
    <div class="relative w-full aspect-[16/10] sm:aspect-[16/9.5] min-h-[300px] overflow-hidden bg-[#070e20]">
      <!-- 1. TAB: GIS ROUTE MAP (DEFAULT) -->
      <div v-show="activeTab === 'map'" class="absolute inset-0">
        <!-- SVG Vector GIS Map Canvas -->
        <svg class="w-full h-full" viewBox="0 0 700 420" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <!-- Map Grid Pattern -->
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
            </pattern>
            <!-- Route Glow Filters -->
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <!-- River Gradient -->
            <linearGradient id="river-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0e3054" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#0a2542" stop-opacity="0.85" />
            </linearGradient>
          </defs>

          <!-- Background Canvas & City Grid -->
          <rect width="100%" height="100%" fill="#070e20" />
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          <!-- Stylized Tonle Sap & Mekong River Convergence -->
          <path
            d="M 680 -20 Q 560 120, 520 200 T 480 440 L 580 440 Q 600 240, 720 80 Z"
            fill="url(#river-grad)"
          />
          <path
            d="M 520 200 Q 420 180, 240 160 L 230 185 Q 430 205, 490 225 Z"
            fill="url(#river-grad)"
          />

          <!-- City Block Zones (Districts: Toul Kork, Sen Sok, Daun Penh, Chamkarmon) -->
          <rect x="90" y="80" width="160" height="110" rx="12" fill="rgba(56, 189, 248, 0.03)" stroke="rgba(56, 189, 248, 0.12)" stroke-width="1" stroke-dasharray="4 4" />
          <text x="102" y="100" fill="#64748b" font-size="10" font-family="monospace" letter-spacing="1">ZONE 1: TOUL KORK</text>

          <rect x="290" y="70" width="180" height="140" rx="12" fill="rgba(168, 85, 247, 0.03)" stroke="rgba(168, 85, 247, 0.12)" stroke-width="1" stroke-dasharray="4 4" />
          <text x="302" y="90" fill="#64748b" font-size="10" font-family="monospace" letter-spacing="1">ZONE 2: DAUN PENH</text>

          <rect x="260" y="240" width="200" height="140" rx="12" fill="rgba(16, 185, 129, 0.03)" stroke="rgba(16, 185, 129, 0.12)" stroke-width="1" stroke-dasharray="4 4" />
          <text x="272" y="260" fill="#64748b" font-size="10" font-family="monospace" letter-spacing="1">ZONE 3: BKK1 / CHAMKARMON</text>

          <!-- Secondary Arterial Roads -->
          <path d="M 40 180 L 660 180" stroke="rgba(255,255,255,0.05)" stroke-width="3" />
          <path d="M 270 20 L 270 400" stroke="rgba(255,255,255,0.05)" stroke-width="3" />
          <path d="M 60 320 L 640 280" stroke="rgba(255,255,255,0.04)" stroke-width="2" />
          <path d="M 170 30 L 390 390" stroke="rgba(255,255,255,0.04)" stroke-width="2" />

          <!-- ROUTE B: Secondary Corridor (Toul Kork Express - Emerald) -->
          <path
            d="M 120 340 L 160 250 L 190 140 L 120 120"
            stroke="#10b981"
            stroke-width="3"
            stroke-dasharray="6 4"
            fill="none"
            opacity="0.6"
          />

          <!-- ROUTE A: Primary Active Corridor (Central & BKK Corridor - Animated Cyan) -->
          <path
            id="active-delivery-route"
            d="M 120 340 L 210 320 L 270 220 L 370 160 L 410 290"
            stroke="#38bdf8"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            filter="url(#glow-cyan)"
            class="anim-route-dash"
          />

          <!-- WAYPOINTS / STORES ON MAP -->

          <!-- 0. Depot / Central Warehouse (Start) -->
          <g transform="translate(120, 340)">
            <circle r="16" fill="rgba(245, 158, 11, 0.15)" class="anim-ping" />
            <circle r="8" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
            <text x="14" y="4" fill="#fbbf24" font-size="11" font-weight="bold">HQ Depot</text>
          </g>

          <!-- 1. Store 1: Sovannaphum Mart (Toul Kork) - Delivered -->
          <g transform="translate(210, 320)" class="cursor-pointer" @click="selectedStore = 'Sovannaphum Mart'">
            <circle r="6" fill="#10b981" stroke="#ffffff" stroke-width="2" />
            <text x="-35" y="-12" fill="#34d399" font-size="10" font-weight="600">✓ Stop 1: Delivered</text>
          </g>

          <!-- 2. Store 2: Lucky Express (Daun Penh) - Delivered -->
          <g transform="translate(270, 220)" class="cursor-pointer" @click="selectedStore = 'Lucky Express'">
            <circle r="6" fill="#10b981" stroke="#ffffff" stroke-width="2" />
            <text x="12" y="-4" fill="#34d399" font-size="10" font-weight="600">✓ Stop 2: Delivered</text>
          </g>

          <!-- 3. Store 3: Phsar Thmey Depot - Delivered -->
          <g transform="translate(370, 160)" class="cursor-pointer" @click="selectedStore = 'Phsar Thmey Retail Depot'">
            <circle r="6" fill="#10b981" stroke="#ffffff" stroke-width="2" />
            <text x="12" y="-4" fill="#34d399" font-size="10" font-weight="600">✓ Stop 3: Delivered</text>
          </g>

          <!-- 4. Store 4: Angkor Supermarket (BKK1) - IN TRANSIT ACTIVE TARGET -->
          <g transform="translate(410, 290)" class="cursor-pointer" @click="selectedStore = 'Angkor Supermarket'">
            <circle r="18" fill="rgba(56, 189, 248, 0.25)" class="anim-ping-fast" />
            <circle r="8" fill="#38bdf8" stroke="#ffffff" stroke-width="2.5" />
            <text x="14" y="2" fill="#38bdf8" font-size="11" font-weight="bold">Stop 4: In Transit</text>
            <text x="14" y="16" fill="#94a3b8" font-size="9">ETA 12 mins · $812.00</text>
          </g>

          <!-- Animated Moving Courier Vehicle along the Route -->
          <g class="anim-van-motion">
            <circle r="11" fill="rgba(56, 189, 248, 0.35)" />
            <circle r="6" fill="#ffffff" />
            <polygon points="0,-4 5,4 -5,4" fill="#0284c7" />
          </g>
        </svg>

        <!-- Floating Live Dispatch Card (Top Right HUD) -->
        <div class="absolute top-3 right-3 w-64 bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl text-xs space-y-2">
          <div class="flex items-center justify-between pb-1.5 border-b border-white/10">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span class="font-bold text-white text-[11px]">Active Route: Route A</span>
            </div>
            <span class="font-mono text-[10px] text-sky-300 bg-sky-500/20 px-1.5 py-0.5 rounded">PLAN #101</span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span class="text-[10px] text-gray-400 block">Assigned Driver</span>
              <span class="font-semibold text-white truncate block">Dara Pich</span>
            </div>
            <div>
              <span class="text-[10px] text-gray-400 block">Fleet Unit</span>
              <span class="font-mono text-gray-200">Van #PP-5819</span>
            </div>
          </div>

          <!-- Route Progress Bar -->
          <div>
            <div class="flex items-center justify-between text-[10px] text-gray-300 mb-1">
              <span>Drop Completion</span>
              <span class="font-bold text-emerald-400">75% (3/4 Stores)</span>
            </div>
            <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full w-3/4"></div>
            </div>
          </div>

          <div class="pt-1 flex items-center justify-between text-[10px] text-gray-400 border-t border-white/5">
            <span>Aggregated Drop Value:</span>
            <span class="font-mono font-bold text-white">$1,774.50</span>
          </div>
        </div>

        <!-- Floating Interactive Target Store Tooltip (Bottom Left) -->
        <div class="absolute bottom-3 left-3 bg-[#0f172a]/95 backdrop-blur-md border border-sky-500/30 rounded-lg p-2.5 shadow-xl max-w-[280px]">
          <div class="flex items-center gap-1.5 text-sky-400 text-[10px] font-semibold uppercase tracking-wider mb-1">
            <span>📍 Active Waypoint Target</span>
          </div>
          <div class="text-xs font-bold text-white mb-0.5">{{ selectedStore }}</div>
          <p class="text-[10px] text-gray-300 leading-snug">
            30 Cartons (Confectionery & Drinks) · Credit Payment · Geotagged drop verification required on arrival.
          </p>
        </div>
      </div>

      <!-- 2. TAB: LIVE ORDERS STREAM -->
      <div v-show="activeTab === 'orders'" class="absolute inset-0 p-4 overflow-y-auto bg-[#070e20] text-xs">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h4 class="font-bold text-white text-sm">Real-Time Dispatch Queue</h4>
            <p class="text-[11px] text-gray-400">Synchronized with in-memory mock REST API backend</p>
          </div>
          <span class="font-mono text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            ● 1,420 Active Demo Orders
          </span>
        </div>

        <div class="space-y-2">
          <div
            v-for="order in mockOrders"
            :key="order.id"
            class="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors flex items-center justify-between gap-3"
          >
            <div class="flex items-center gap-3">
              <span class="font-mono text-[11px] font-bold text-sky-400">{{ order.customId }}</span>
              <div>
                <div class="font-semibold text-white text-xs">{{ order.shop }}</div>
                <div class="text-[10px] text-gray-400">{{ order.address }} · {{ order.items }} items</div>
              </div>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <span class="font-mono font-bold text-white text-xs">{{ order.amount }}</span>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
                :class="{
                  'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30': order.status === 'delivered',
                  'bg-sky-500/20 text-sky-300 border border-sky-500/30': order.status === 'in_transit',
                  'bg-amber-500/20 text-amber-300 border border-amber-500/30': order.status === 'assigned',
                  'bg-purple-500/20 text-purple-300 border border-purple-500/30': order.status === 'pending'
                }"
              >
                {{ order.status.replace('_', ' ') }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. TAB: TERRITORY KPI ANALYTICS -->
      <div v-show="activeTab === 'kpi'" class="absolute inset-0 p-4 bg-[#070e20] text-xs space-y-3.5 overflow-y-auto">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-bold text-white text-sm">ASM Performance Intelligence</h4>
            <p class="text-[11px] text-gray-400">Territory KPI hit rate, drop-size aggregation & growth metrics</p>
          </div>
          <span class="text-[10px] font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
            Campaign: Q1 FMCG Push
          </span>
        </div>

        <!-- 3 KPI Cards -->
        <div class="grid grid-cols-3 gap-2.5">
          <div class="bg-white/[0.04] p-3 rounded-lg border border-white/5">
            <span class="text-[10px] text-gray-400 block mb-0.5">Total Sales Revenue</span>
            <span class="text-base font-bold font-mono text-emerald-400">$184,500</span>
            <span class="text-[10px] text-emerald-400 block mt-0.5">▲ +13.89% Growth</span>
          </div>
          <div class="bg-white/[0.04] p-3 rounded-lg border border-white/5">
            <span class="text-[10px] text-gray-400 block mb-0.5">Productive Call Rate</span>
            <span class="text-base font-bold font-mono text-sky-400">92.4%</span>
            <span class="text-[10px] text-gray-400 block mt-0.5">142 of 154 Outlets</span>
          </div>
          <div class="bg-white/[0.04] p-3 rounded-lg border border-white/5">
            <span class="text-[10px] text-gray-400 block mb-0.5">Avg Drop Size</span>
            <span class="text-base font-bold font-mono text-indigo-300">$129.90</span>
            <span class="text-[10px] text-gray-400 block mt-0.5">28 SKUs Active</span>
          </div>
        </div>

        <!-- Territory Leaderboard Bar -->
        <div class="bg-white/[0.03] p-3 rounded-lg border border-white/5 space-y-2">
          <div class="flex items-center justify-between text-[11px]">
            <span class="font-semibold text-gray-200">District Sales Performance</span>
            <span class="text-[10px] text-gray-400">Target vs Actual</span>
          </div>

          <div class="space-y-1.5">
            <div>
              <div class="flex justify-between text-[10px] text-gray-300 mb-0.5">
                <span>Toul Kork District (Sokha Meng)</span>
                <span class="font-mono font-semibold text-emerald-400">$64,200 / $60k (107%)</span>
              </div>
              <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-[10px] text-gray-300 mb-0.5">
                <span>BKK1 & Chamkarmon (Bona Sam)</span>
                <span class="font-mono font-semibold text-sky-400">$51,800 / $50k (103%)</span>
              </div>
              <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-sky-500 rounded-full w-[94%]"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-[10px] text-gray-300 mb-0.5">
                <span>Sen Sok & Daun Penh (Vireak Chan)</span>
                <span class="font-mono font-semibold text-amber-400">$48,500 / $50k (97%)</span>
              </div>
              <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-amber-500 rounded-full w-[88%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Demo Action Bar / Dock -->
    <div class="px-4 py-2.5 bg-[#0b1428] border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="text-[11px] text-gray-300 font-medium">
          Simulated REST Backend · Auth roles: <span class="text-white font-semibold">Super Admin · ASM · Salesman · Courier</span>
        </span>
      </div>

      <a
        :href="demoUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs px-4 py-1.5 rounded-lg shadow-md hover:shadow-sky-500/25 transition-all duration-200 active:scale-98 group"
      >
        <span>Launch Full Interactive PWA</span>
        <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    demoUrl?: string
  }>(),
  {
    demoUrl: 'http://localhost:3001',
  }
)

const activeTab = ref<'map' | 'orders' | 'kpi'>('map')
const selectedStore = ref('Angkor Supermarket (BKK1)')

const mockOrders = [
  {
    id: 501,
    customId: 'ORD-2026-001',
    shop: 'Sovannaphum Mart - Toul Kork',
    address: 'St 289, Boeung Kak 1',
    items: 17,
    amount: '$342.50',
    status: 'delivered',
  },
  {
    id: 502,
    customId: 'ORD-2026-002',
    shop: 'Angkor Supermarket - BKK1',
    address: 'St 63 corner St 294, BKK1',
    items: 30,
    amount: '$812.00',
    status: 'in_transit',
  },
  {
    id: 503,
    customId: 'ORD-2026-003',
    shop: 'Lucky Express - Daun Penh',
    address: 'Preah Norodom Blvd, Daun Penh',
    items: 12,
    amount: '$620.00',
    status: 'assigned',
  },
  {
    id: 504,
    customId: 'ORD-2026-004',
    shop: 'Phsar Thmey Retail Depot',
    address: 'St 128 (Kampuchea Krom)',
    items: 45,
    amount: '$1,250.00',
    status: 'pending',
  },
]
</script>

<style scoped>
/* Dash animation for active route */
@keyframes route-dash {
  to {
    stroke-dashoffset: -40;
  }
}
.anim-route-dash {
  stroke-dasharray: 8 6;
  animation: route-dash 1.8s linear infinite;
}

/* Pulsing markers */
@keyframes ping-slow {
  0% {
    transform: scale(0.85);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.2;
  }
  100% {
    transform: scale(0.85);
    opacity: 0.9;
  }
}
.anim-ping {
  animation: ping-slow 2.4s ease-in-out infinite;
  transform-origin: center;
}

@keyframes ping-fast {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  50% {
    transform: scale(1.6);
    opacity: 0.1;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
}
.anim-ping-fast {
  animation: ping-fast 1.6s ease-in-out infinite;
  transform-origin: center;
}

/* Moving courier van icon along route */
@keyframes van-move {
  0% {
    transform: translate(270px, 220px);
  }
  50% {
    transform: translate(340px, 190px);
  }
  100% {
    transform: translate(410px, 290px);
  }
}
.anim-van-motion {
  animation: van-move 7s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
}
</style>
