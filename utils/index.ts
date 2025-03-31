import md5 from 'md5';
// var md5 = require('md5');

export const getPassphrase = (password: string) => {
  console.log('password', password, md5(password));
  return md5(password);
};

export function searchUsers(searchTerm: string, users: Array<User>) {
  const term = searchTerm.toLowerCase();

  return users.filter((user) => {
    return user.name.toLowerCase().includes(term) || user.surname.toLowerCase().includes(term);
  });
}
