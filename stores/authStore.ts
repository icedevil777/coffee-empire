export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    authenticate() {
      this.isAuthenticated = true;
    },
  },
});
