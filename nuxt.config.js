export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/drink-aleatorio/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Drink Aleatório',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descubra um drink totalmente aleatório para alegrar o seu dia. As receitas não possuem modo de preparo, então, teste até ficar bom!' },
      { hid: 'keywords', name: 'keywords', content: 'drink aleatório, receita de drinks, drinks alcoólicos' },
      { hid: 'ogTitle', name: 'og:title', content: 'Drink Aleatório' },
      { hid: 'ogDescription', name: 'og:description', content: 'Descubra um drink totalmente aleatório para alegrar o seu dia. As receitas não possuem modo de preparo, então, teste até ficar bom!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  },

  //Runtime configuration: https://nuxtjs.org/docs/directory-structure/nuxt-config#runtimeconfig
  publicRuntimeConfig: {
    homeUrl: 'https://mathdks.github.io/drink-aleatorio/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
