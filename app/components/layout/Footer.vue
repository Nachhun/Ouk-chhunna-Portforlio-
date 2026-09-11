<template>
  <footer class="bg-cream border-t border-border">
    <!-- Statement -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <p class="font-display font-800 text-5xl lg:text-7xl xl:text-8xl text-ink leading-none tracking-tight mb-16">
        Let's Build<br />Something Useful.
      </p>

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-border pt-12">
        <!-- Identity -->
        <div>
          <p class="font-display font-700 text-base tracking-[0.08em] uppercase text-ink mb-2">
            Ouk Chhunna
          </p>
          <p class="font-body text-sm text-ink-secondary leading-relaxed max-w-sm">
            Full-Stack Software Developer · AI · Business Systems · Digital Creative
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col gap-3">
          <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-1">Connect</p>
          <div class="flex flex-wrap gap-6">
            <a
              href="tel:0965900986"
              class="font-body text-sm text-ink-secondary hover:text-ink animated-link transition-colors"
            >
              Phone: 096 590 0986
            </a>
            <a
              href="mailto:chhunnaouk168@gmail.com"
              class="font-body text-sm text-ink-secondary hover:text-ink animated-link transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/chhunna-ouk-1a195237a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              class="font-body text-sm text-ink-secondary hover:text-ink animated-link transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/oukchhunna"
              target="_blank"
              rel="noopener noreferrer"
              class="font-body text-sm text-ink-secondary hover:text-ink animated-link transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8 border-t border-border">
        <p class="font-body text-xs text-ink-muted">
          © {{ new Date().getFullYear() }} Ouk Chhunna. All rights reserved.
        </p>
        <p class="font-body text-xs text-ink-muted">
          Cambodia · Available for opportunities
        </p>
      </div>
    </div>
  </footer>
</template>
