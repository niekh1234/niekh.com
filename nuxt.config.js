export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'nl',
    },
    title: 'Niek Hagen - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/dotenv', '@nuxtjs/google-analytics'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/http', '@nuxtjs/svg'],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  http: {
    proxy: true,
    mode: 'no-cors',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
