// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  css: [
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '/node_modules/@icon/icofont/icofont.css',
    '@/assets/scss/app.scss'
  ]
});
