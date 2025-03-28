var md5 = require('md5');

export const getPassphrase = (password: string) => {
  console.log('password', password, md5(password));
  return md5(password);
};
