// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-14',

  modules: [
    '@nuxt/content'
  ],

  router: {
    trailingSlash: false
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'sv'
      },
      title: 'Trygg i Vittsjö',
      titleTemplate: '%s | Trygg i Vittsjö',
      meta: [
        { charset: 'utf-8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'Trygg i Vittsjö' },
        { name: 'application-name', content: 'Trygg i Vittsjö' },
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
    // https://content.nuxt.com/docs/getting-started/configuration
    database: {
      // Each server process builds its own copy from the bundled content on its
      // first request. A shared database file breaks when several PM2 cluster
      // processes initialize it at the same time after a deploy.
      type: 'sqlite',
      filename: ':memory:'
    },
    renderer: {
      // Headings in the Markdown texts contain links; anchors would nest them.
      anchorLinks: false
    },
    experimental: {
      // Node's built-in SQLite instead of the native better-sqlite3 module.
      sqliteConnector: 'native'
    }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@icon/icofont/icofont.css',
    '@fontsource/roboto',
    '@fontsource/exo/500.css',
    '@fontsource/exo/700.css',
    '~/assets/scss/app.scss'
  ],

  build: {
    transpile: ['vue-waypoint'],
  }

});
