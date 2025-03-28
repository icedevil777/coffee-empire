<script setup lang="ts">
const store = useAuthStore();

definePageMeta({
  middleware: ['authenticated'],
});

async function logout() {
  await clearSession();
  await navigateTo('/login');
}

const { user, clear: clearSession } = useUserSession();
</script>

<template>
  <div>
    <h2>Welcome {{ user.name }}</h2>
    <button @click="logout">Logout</button>
  </div>

  <div style="color: white">index page {{ store.users }}</div>
</template>
