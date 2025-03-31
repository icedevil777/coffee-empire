import md5 from 'md5';

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

export function filterById(id: number, users: Array<User>): Array<User> {
  return users.filter((user) => user.id === id);
}

export function filterByStatus(status: string, users: Array<User>): Array<User> {
  return users.filter((user) => user.status === status);
}
