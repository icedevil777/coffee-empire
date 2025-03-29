// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/stylelint-module', '@pinia/nuxt', 'nuxt-auth-utils'],
  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  // piniaPluginPersistedstate: {
  //   storage: 'cookies',
  //   cookieOptions: {
  //     sameSite: 'lax',
  //   },
  //   debug: true,
  // },
});
