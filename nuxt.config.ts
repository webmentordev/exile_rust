// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Exlie Rust — Official Website",
      meta: [
        {
          name: "description",
          content: "Welcome to Exile Rust official website. Get all Exile servers connection information here."
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/logo.webp"
        }
      ]
    }
  }
})