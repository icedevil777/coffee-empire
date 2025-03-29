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
  <div class="login-page">
    <form @submit.prevent="login" class="login-form">
      <h3>Sign in</h3>
      <p class="text-3">Welcome to test project</p>

      <div class="login-form__div">
        <label class="login-form__label text-1">Email <label class="login-form__error-massage" :class="{ 'login-form__error-massage-red': isError }">Bad credentials</label></label>
        <input class="login-form__el text-1" placeholder="Email" v-model="credentials.email" type="email" />
      </div>

      <div class="login-form__div">
        <label class="login-form__label text-1">Password</label>
        <input class="login-form__el text-1" placeholder="Password" v-model="credentials.password" type="password" />
      </div>

      <button type="submit" class="login-form__el login-form__btn text-2">Sing in</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');

.login-page {
  display: flex;
  width: 100%;
  height: 90vh;
  justify-items: center;
}

.login-form {
  background-color: $main;
  margin: auto;
  border-radius: 16px;
  padding: 40px 30px;
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 25px;
}

.login-form__el {
  background-color: $main;
  height: 40px;
  border: solid $light 1px;
  padding: 0 12px 0 10px;
  border-radius: 5px;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.login-form__el:focus {
  border-color: $red;
}

.login-form__btn {
  margin-top: 20px;
  border: none !important;
  cursor: pointer;
  background-color: $red;
  color: white;
  border-radius: 10px;
}

input::placeholder {
  color: $light;
}

.login-form__btn:hover {
  opacity: 85%;
}

.login-form__error-massage {
  color: $main;
  float: right;
}

.login-form__error-massage-red {
  color: $red;
}
</style>
