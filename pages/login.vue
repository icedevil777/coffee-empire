<template>
    <div class="login-main">
        <div class="login-form">
            <h2 style="margin-top: 0px;">Sing in</h2>
            <p style="margin-bottom: 10px;">Welcome to <a style="color: #c11e44; ">Web site</a></p>
            <span>username</span>
            <input placeholder="username" type="text" />
            <span>password</span>
            <input placeholder="password" type="password" />
            <button class="login-btn">Sing in</button>
        </div>
    </div>
</template>

<script lang="ts"></script>

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

.login-btn {
    background-color: $red;
    color: white;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    padding: 1px;
    height: 30px !important;
}

.login-btn:hover {
    opacity: 85%;
}
</style>
