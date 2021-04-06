import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'BioViz Studio: %s',
    title: 'create beautiful molecular videos, simply and quickly',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `BioViz Studio helps you, as a biologist/scientist,
tell your story and stand out from the crowd by creating beautiful,
scientifically accurate molecular videos: faster, cheaper, and with
gorgeous results you’ll be proud to show. It's perfect for structural
biologists, computational chemists, & drug design startups.`,
      },
      { name: 'og:url', content: 'https://www.bioviz-studio.com' },
      {
        name: 'og:title',
        content:
          'BioViz Studio: create beautiful molecular videos, simply and quickly',
      },
      {
        name: 'og:description',
        content: `BioViz Studio helps you, as a biologist/scientist,
tell your story and stand out from the crowd by creating beautiful,
scientifically accurate molecular videos: faster, cheaper, and with
gorgeous results you’ll be proud to show. It's perfect for structural
biologists, computational chemists, & drug design startups.`,
      },
      {
        name: 'og:image',
        content:
          'https://www.bioviz-studio.com/images/full/sars-cov2-virion-orange-on-blue-sm.jpg',
      },
      { name: 'fb:app_id', content: '1557456717794898' },
      { name: 'twitter:site', content: '@darkstarsystems' },
      { name: 'twitter:creator', content: '@goberbrunner' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/bioviz-studio-favicon.png' },
    ],
    script: [],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['assets/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/composition-api'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm', // Google Tag Manager
  ],

  sitemap: {
    hostname: 'https://www.bioviz-studio.com',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#46a5ff',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  ignore: ['**/*.test.*', '**/.#*'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  gtm: {
    id: process.env.GTM_ID || 'GTM-TDW7F3J',
    pageTracking: true,
    scriptDefer: true,
    // debug: true,
    enabled: true, // send events even in "nuxt dev" mode
    scriptUrl: 'https://www.googletagmanager.com/gtag/js',
  },
}
