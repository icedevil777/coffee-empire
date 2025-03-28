import usersData from './users.json';
import { defineStore } from 'pinia';
import md5 from 'md5';

interface Credentials {
  username: string;
  passphrase: string;
}

interface User {
  name: string;
  surname: string;
  credentials: Credentials;
  active: boolean;
  created: string;
  _comment: string;
}

const users: Array<User> = usersData;

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    users: users,
  }),
  actions: {
    isAuthenticated(email: string, password: string = ''): boolean {
      return this.users.some((user) => {
        const match = user.credentials.username === email && user.credentials.passphrase === md5(password);
        return match;
      });
    },
  },
});
