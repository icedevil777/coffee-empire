import { useAuthStore } from '~/stores/authStore'

const store = useAuthStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (store.isAuthenticated === false) {
    console.log('store.isAuthenticated', store.isAuthenticated)
    return navigateTo('/login');
  }
});
