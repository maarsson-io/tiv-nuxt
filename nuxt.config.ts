// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'sv'
      },
      title: 'Trygg i Vittsjö',
      titleTemplate: '%s | Trygg i Vittsjö',
      meta: [
        { charset: 'utf-8' },
        { hid: 'Trygg i Vittsjö', name: 'Trygg i Vittsjö', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Trygg i Vittsj&ouml;' },
        { name: 'application-name', content: 'Trygg i Vittsj&ouml;' },
        { name: 'msapplication-TileColor', content: '#a41214' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml?v=2.1' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'shortcut', href: '/favicon/favicon.ico?v=2.1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png?v=2.1' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png?v=2.1' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png?v=2.1' },
        { rel: 'manifest', href: '/favicon/site.webmanifest?v=2.1' },
        { rel: 'mask-icon', color: '#a41214', href: '/favicon/safari-pinned-tab.svg?v=2.1' },
      ],
      noscript: [
        { innerHTML: 'This website requires JavaScript.' }
      ]
    },
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  css: [
    '/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '/node_modules/@icon/icofont/icofont.css',
    '@/assets/scss/app.scss'
  ]
});
