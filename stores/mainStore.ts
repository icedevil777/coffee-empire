import usersData from './users.json';
import { defineStore } from 'pinia';
import md5 from 'md5';

const users: Array<User> = usersData;

export const useMainStore = defineStore('mainStore', {
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
