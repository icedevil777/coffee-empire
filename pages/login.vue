<script setup lang="ts">
const { loggedIn, user, fetch: refreshSession } = useUserSession();
const credentials = reactive({
  email: 'david.jones@creds.com',
  password: '8u3&s-1uda',
});

const isError = ref(false);

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials,
  })
    .then(async () => {
      await refreshSession();
      await navigateTo('/');
    })
    .catch(() => (isError.value = true));
}
</script>

<template>
  <div class="login-main">
    <form @submit.prevent="login" class="login-form">
      <h2 style="margin-top: 0px">Sing in</h2>
      <p>Welcome to <a style="color: #c11e44">Web site </a></p>
      <span class="login-form__error-massage" :class="{ 'login-form__error-massage-red': isError }">Bad credentials!</span>
      <span>email</span>
      <input v-model="credentials.email" placeholder="email" type="email" />
      <span>password</span>
      <input v-model="credentials.password" placeholder="password" type="password" />
      <button type="submit" class="login-form__btn login-form__btn-red">Sing in</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');

.login-main {
  display: flex;
  width: 100%;
  height: 90vh;
  justify-items: center;
}

.login-form {
  background-color: $secondary;
  margin: auto;
  border-radius: 16px;
  padding: 50px 40px;
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 12px;
}

.login-form__btn {
  margin-top: 30px;
  border: none;
  cursor: pointer;
  padding: 1px;
  height: 34px !important;
}

.login-form__btn-red {
  background-color: $red;
  color: white;
}

.login-form__btn:hover {
  opacity: 85%;
}

.login-form__error-massage {
  color: $secondary;
  align-self: flex-start;
}

.login-form__error-massage-red {
  color: $red;
}
</style>
