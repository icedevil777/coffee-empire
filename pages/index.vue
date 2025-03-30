<script setup lang="ts">
const { user, clear: cleanSession } = useUserSession();

definePageMeta({
  middleware: ['authenticated'],
});

async function logout() {
  await cleanSession();
  await navigateTo('/login');
}

const queryParams = ref({
  id: '',
  status: '',
  search: '',
});

const { data, error, execute, refresh } = await useFetch('/api/users', { query: queryParams });


</script>

<template>
  <header class="header">
    <h1 class="header__el logo">Header</h1>
    <div class="header__el">
      <a class="header__username footer__el_my-tg">{{ user.name }}</a>
      <button class="header__logout" @click="logout">Log out</button>
    </div>
  </header>
  <main class="main container">
    <div class="grid-content">
      <div class="filter">
        <div class="filter__div">
          <label class="filter__label">Search</label>
          <input v-model="queryParams.search" class="filter__search" placeholder="Name, email, surname ..." />
        </div>
        <div class="filter__div">
          <label class="filter__label" for="filter__select">Status</label>
          <select v-model="queryParams.status" class="filter__select" id="filter__select">
            <option value="">All</option>
            <option value="confirmed">Confirmed</option>
            <option value="payed">Payed</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div class="filter__div">
          <label class="filter__label" for="filter__select">Id</label>
          <select v-model="queryParams.id" class="filter__select" id="filter__select">
            <option value="">All</option>
            <option v-for="(i, key) in data.users" :value="key + 1">{{ key + 1 }}</option>
          </select>
        </div>
        <div class="filter__div">
          <label class="filter__label filter__label_hide">1</label>
          <button class="filter__clean" @click="() => refresh()" type="submit">Clean</button>
        </div>
      </div>

      <div class="line"></div>

      <div class="grid-el">
        <div class="grid-el__sub">Id</div>
        <div class="grid-el__sub">Name</div>
        <div class="grid-el__sub">Surname</div>
        <div class="grid-el__sub">Email</div>
        <div class="grid-el__sub">Status</div>
        <div class="grid-el__sub">Created</div>
      </div>
      <div v-if="data.users" class="grid-el" v-for="user in data.users">
        <div class="grid-el__sub">{{ user.id }}</div>
        <div class="grid-el__sub">{{ user.name }}</div>
        <div class="grid-el__sub">{{ user.surname }}</div>
        <div class="grid-el__sub">{{ user.credentials.username }}</div>
        <div class="grid-el__sub">{{ user.status }}</div>
        <div class="grid-el__sub">{{ user.created }}</div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <h1 class="footer__el logo">Footer</h1>
    <a href="https://telegram.im/icedevil777" class="footer__el footer__el_my-tg">Григорий Гуляев</a>
  </footer>
</template>

<style scoped lang="scss">
.main {
  height: $main-h;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.grid-content {
  padding: 30px;
  border-radius: 30px;
  background-color: $main;
  color: $white;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  gap: 15px;
  @include roboto;
}

.grid-el {
  display: grid;
  grid-template-columns: 50px repeat(2, 1fr) 300px repeat(2, 1fr);
  border-bottom: solid $light 1px;
  // height: 30px;
}

.logo {
  @include playfair;
}

.line {
  border-top: solid $white 1px;
  margin-bottom: 5px;
}

.filter {
  background-color: $main;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__search {
    @include input-mix;

    &:focus {
      border-color: $red;
    }
  }

  &__div {
    display: flex;
    flex-direction: column;
    min-width: 200px;
  }

  &__select {
    @include input-mix;
    cursor: pointer;

    &:focus {
      border-color: $red;
    }
  }

  &__label_hide {
    color: $main;
  }

  &__clean {
    @include input-mix;
    @include btn-mix;

    &:hover {
      opacity: 85%;
    }
  }
}
</style>
