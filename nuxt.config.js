export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Niek Hagen - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/http', '@nuxtjs/svg'],

  http: {
    proxy: true,
    mode: 'no-cors',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
