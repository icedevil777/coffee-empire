export { User, Query };

declare global {
  interface Credentials {
    username: string;
    passphrase: string;
  }

  interface User {
    id: number;
    name: string;
    surname: string;
    credentials: Credentials;
    status: 'active' | 'payed' | 'confirmed' | string;
    created: string;
    _comment: string;
  }

  interface Query {
    success: boolean;
    data?: {
      id?: string | undefined;
      status?: string | undefined;
      search?: string | undefined;
    };
    error?: any;
  }
}
