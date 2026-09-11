// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    '~/components',
  ],

  app: {
    head: {
      title: 'Ouk Chhunna — Full-Stack Developer · AI · Business Systems · Digital Creative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Ouk Chhunna is a Full-Stack Software Developer specializing in Business Systems, AI & Data Analytics, and Digital Content Creation. Based in Cambodia.',
        },
        { name: 'author', content: 'Ouk Chhunna' },
        { property: 'og:title', content: 'Ouk Chhunna — Portfolio' },
        {
          property: 'og:description',
          content: 'Full-Stack Developer · AI · Business Systems · Digital Creative',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
