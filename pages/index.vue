<script setup lang="ts">
const { user, clear: clearSession } = useUserSession();

definePageMeta({
  middleware: ['authenticated'],
});

async function logout() {
  await clearSession();
  await navigateTo('/login');
}

const { data } = await useFetch('/api/users');
</script>

<template>
  <header class="header">
    <h1 class="header__el">Header</h1>
    <div class="header__el">
      <a class="header__username footer__el_my-tg">{{ user.name }}</a>
      <button class="header__logout" @click="logout">Log out</button>
    </div>
  </header>
  <main class="main">
    <div class="container grid-content">
      <div class="grid-el">
        <div class="grid-el__sub">Name</div>
        <div class="grid-el__sub">Surname name</div>
        <div class="grid-el__sub">Email</div>
      </div>
      <div class="grid-el" v-for="user in data.users">
        <div class="grid-el__sub">{{ user.name }}</div>
        <div class="grid-el__sub">{{ user.surname }}</div>
        <div class="grid-el__sub">{{ user.credentials.username }}</div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <h1 class="footer__el">Footer</h1>
    <a href="https://telegram.im/icedevil777" class="footer__el footer__el_my-tg">Григорий Гуляев</a>
  </footer>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');

.main {
  height: $main-h;
  display: flex;
  align-items: center;
}

.header,
footer {
  width: 100%;
  background-color: $main;
  height: $header-h;
  padding: 0 40px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__username {
    margin-right: 50px;
  }
  .header__logout {
    background-color: $red;
    width: 100px;
    height: 30px;
    border-radius: 8px;
  }
}

.header__el,
.footer__el {
  color: $white;
  // @include playfair;
}

.footer__el_my-tg {
  cursor: pointer;
  &:hover {
    color: $red;
  }
}

.grid-content {
  padding: 30px;
  border-radius: 30px;
  background-color: $main;
  color: $white;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 30px;
}

.grid-el {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: solid $light 1px;
  height: 30px;
}
</style>
