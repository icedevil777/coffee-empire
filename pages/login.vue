<script setup lang="ts">
// const { data } = await useFetch('/api/login')
// const username = defineModel('username')
const username = defineModel({ default: 'david.jones@creds.com' });
const password = defineModel('password');

async function handleFormSubmit() {
  try {
    const res = await $fetch('/api/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value,
      },
    });
    console.log('res', res);
  } catch (e) {
    console.log('error e', e);
  }
}
</script>

<template>
  <div class="login-main">
    <div class="login-form">
      <h2 style="margin-top: 0px">Sing in</h2>
      <p style="margin-bottom: 10px">Welcome to <a style="color: #c11e44">Web site </a></p>
      <span>username</span>
      <input v-model="username" placeholder="username" type="text" />
      <span>password</span>
      <input v-model="password" placeholder="password" type="password" />
      <button @click="handleFormSubmit()" class="login-form__btn login-form__btn-red">Sing in</button>
    </div>
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
  gap: 10px;
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
</style>
