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
  <header class="header">
    <h1 class="header__el">Header</h1>
  </header>
  <main class="main">
    <div class="main__container">
      <h2>Welcome {{ user.name }}</h2>
      <button @click="logout">Logout</button>
    </div>

    <div style="color: white">index page {{ store.users }}</div>
  </main>

  <footer class="footer">
    <h1 class="footer__el">Footer</h1>
  </footer>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');

.main {
  height: $main-h;
}

.header,
footer {
  width: 100%;
  background-color: $main;
  height: $header-h;
}

.header__el,
.footer__el {
  color: $white;
  padding: 20px 20px;
}
</style>
