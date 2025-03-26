// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/stylelint-module'],
  stylelint: {
    lintOnStart: false,
    // fixOnStart: true,
  },
});
