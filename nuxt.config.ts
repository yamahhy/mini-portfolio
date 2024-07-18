import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['~/assets/css/styles.css', 'remixicon/fonts/remixicon.css'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: []
  },
  compatibilityDate: '2024-07-17'
});
