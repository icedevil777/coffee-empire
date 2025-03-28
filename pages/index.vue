<template>
  <div style="color: white">index page {{ store.users }}</div>
</template>

<script setup lang="ts">
const store = useAuthStore();

definePageMeta({
  middleware: 'authenticated',
});

const { loggedIn, session, user, clear, fetch } = useUserSession();

console.log('loggedIn', loggedIn);
console.log('session', session);
console.log('user', user);
console.log('clear', clear);
console.log('fetch', fetch);
</script>
