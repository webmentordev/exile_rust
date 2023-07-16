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
      title: "Exile Rust Server",
      link: [
        {
          rel: "shortcut icon",
          href: "/logo.webp"
        }
      ]
    }
  }
})
