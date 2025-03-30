<script setup lang="ts">
const { fetch: refreshSession } = useUserSession();
const credentials = reactive({
  email: 'david.jones@creds.com',
  password: '8u3&s-1uda',
});

const isError = ref(false);
const formRef = ref<HTMLFormElement>();

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials,
  })
    .then(async () => {
      await refreshSession();
      await navigateTo('/');
    })
    .catch(() => {
      isError.value = true;
      formRef.value?.classList.add('shake-animation');
      setTimeout(() => {
        formRef.value?.classList.remove('shake-animation');
        isError.value = false;
      }, 1000);
    });
}
</script>

<template>
  <div class="login-page">
    <form ref="formRef" @submit.prevent="login" class="login-form">
      <h3 class="login-form__title">Sign in</h3>
      <p class="login-form__subtitle">Welcome to test project</p>
      <div class="login-form__div">
        <label class="login-form__label">Email <label :class="{ 'login-form__error-message_red': isError }" class="login-form__error-message">Bad credentials</label></label>
        <input class="login-form__el" placeholder="Email" v-model="credentials.email" type="email" />
      </div>
      <div class="login-form__div">
        <label class="login-form__label">Password</label>
        <input class="login-form__el" placeholder="Password" v-model="credentials.password" type="password" />
      </div>
      <button class="login-form__el login-form__btn" type="submit">Sing in</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
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

  @include roboto;

  &__title {
    @include playfair;
  }

  &__div {
    .login-form__el {
      background-color: $main;
      height: 40px;
      border: solid $light 1px;
      padding: 0 12px 0 10px;
      border-radius: 5px;
      display: block;
      width: 100%;
      box-sizing: border-box;

      &:focus {
        border-color: $red;
      }
    }
  }

  &__error-message {
    color: $main;
    float: right;
  }

  &__error-message_red {
    color: $red !important;

    @include raleway;
  }

  &__btn {
    margin-top: 20px;
    border: none !important;
    cursor: pointer;
    background-color: $red;
    color: white;
    border-radius: 10px;
    height: 40px;

    &:hover {
      opacity: 85%;
    }
  }
}
</style>
