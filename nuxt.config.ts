import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: 'Nuxt 3 Starter',
      titleTemplate: '%s - Nuxt 3 Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: ['nuxt-windicss'],

  css: ['~/assets/scss/vendor.scss', '~/assets/scss/app.scss'],

  build: {
    transpile: ['@headlessui/vue', '@heroicons/vue'],
  },

  // auto import components
  components: true,

  // vite plugin
  vite: {},

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
