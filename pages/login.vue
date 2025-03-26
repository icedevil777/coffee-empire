<template>
    <div class="login-main">
        <div class="login-form">
            <h2>Sing in</h2>
            <p style="margin-bottom: 10px;">Welcome to <span style="color: #c11e44;">web site</span></p>
            <p>username</p>
            <input placeholder="username" type="text" />
            <p>password</p>
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
  padding: 40px; 
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.login-btn{
    background-color: $red;
    color: white;
    border-radius: 24px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    padding: 5px;
}
</style>
