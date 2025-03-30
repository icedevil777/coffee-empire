<script setup lang="ts">
const { user, clear: clearSession } = useUserSession();

definePageMeta({
  middleware: ['authenticated'],
});

async function logout() {
  await clearSession();
  await navigateTo('/login');
}


const { data } = await useFetch('/api/users')

</script>

<template>
  <header class="header">
    <h1 class="header__el">Header</h1>
    <div class="header__el">
      <a class="header__username footer__el_my-tg ">{{ user.name }}</a>
      <button class="header__logout" @click="logout">Log out</button>
    </div>

  </header>
  <main class="main">
    <div class="container">
      <div class="content">
        <h2 class="content__title">User List</h2>
        <div class="content__row">{{ data.users[0] }}</div>
        <div class="content__row">{{ data.users[1] }}</div>
        <div class="content__row">{{ data.users[2] }}</div>
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
}

.footer__el_my-tg {
  cursor: pointer;
  &:hover {
    color: $red;
  }
}

.content {
  display: grid;
}
</style>
