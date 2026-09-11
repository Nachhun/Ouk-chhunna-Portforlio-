<template>
  <section id="contact" class="bg-cream border-t border-border py-16 sm:py-24 lg:py-36">
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <!-- Left -->
        <div class="lg:col-span-5">
          <FadeUp>
            <SectionLabel number="08" label="Contact" />
          </FadeUp>
          <FadeUp :delay="1">
            <h2 class="font-display font-700 text-4xl lg:text-5xl text-ink leading-tight tracking-tight mt-4">
              Let's Work<br />Together.
            </h2>
            <p class="font-body text-sm text-ink-secondary leading-relaxed mt-5 max-w-sm">
              Open to full-time roles, freelance projects, and creative collaborations.
              Based in Cambodia — available remotely worldwide.
            </p>
          </FadeUp>

          <!-- Contact info -->
          <FadeUp :delay="2">
            <div class="mt-10 space-y-4">
              <a
                href="mailto:oukchhunna@gmail.com"
                class="flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border border-border flex items-center justify-center shrink-0 group-hover:border-ink group-hover:bg-ink transition-all duration-300">
                  <svg class="w-4 h-4 text-ink-secondary group-hover:text-cream transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-0.5">Email</p>
                  <p class="font-body text-sm text-ink animated-link">oukchhunna@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/oukchhunna"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border border-border flex items-center justify-center shrink-0 group-hover:border-ink group-hover:bg-ink transition-all duration-300">
                  <svg class="w-4 h-4 text-ink-secondary group-hover:text-cream transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-0.5">LinkedIn</p>
                  <p class="font-body text-sm text-ink animated-link">linkedin.com/in/oukchhunna</p>
                </div>
              </a>

              <a
                href="https://github.com/oukchhunna"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 group"
              >
                <div class="w-10 h-10 border border-border flex items-center justify-center shrink-0 group-hover:border-ink group-hover:bg-ink transition-all duration-300">
                  <svg class="w-4 h-4 text-ink-secondary group-hover:text-cream transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-0.5">GitHub</p>
                  <p class="font-body text-sm text-ink animated-link">github.com/oukchhunna</p>
                </div>
              </a>
            </div>
          </FadeUp>
        </div>

        <!-- Right: contact form -->
        <div class="lg:col-span-7">
          <FadeUp :delay="2">
            <form
              id="contact-form"
              class="space-y-6"
              @submit.prevent="handleSubmit"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-2" for="name">
                    Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-ink transition-colors duration-200"
                  />
                </div>
                <div>
                  <label class="block font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-2" for="email">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    class="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-ink transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label class="block font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-2" for="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="Project inquiry / Collaboration / Other"
                  class="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-ink transition-colors duration-200"
                />
              </div>

              <div>
                <label class="block font-body text-xs tracking-[0.1em] uppercase text-ink-muted mb-2" for="message">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or what you'd like to work on..."
                  class="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-ink transition-colors duration-200 resize-none"
                />
              </div>

              <div class="flex items-center justify-between gap-4 pt-2">
                <p v-if="submitted" class="font-body text-xs text-green-600">
                  ✓ Message sent — I'll be in touch soon.
                </p>
                <p v-if="error" class="font-body text-xs text-red-500">
                  Something went wrong. Please email me directly.
                </p>
                <button
                  id="submit-btn"
                  type="submit"
                  :disabled="loading"
                  class="ml-auto inline-flex items-center gap-2 bg-ink text-cream font-body text-xs tracking-[0.1em] uppercase px-8 py-4 hover:bg-ink/80 disabled:opacity-50 transition-all duration-300 group"
                >
                  <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
                  <svg
                    v-if="!loading"
                    class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const submitted = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = false
  try {
    // Open email client as fallback (replace with actual form service like Formspree)
    const mailtoLink = `mailto:oukchhunna@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
