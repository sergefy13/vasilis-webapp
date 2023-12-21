// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: false },
  app:{
    rootId: "app"
  }
})
