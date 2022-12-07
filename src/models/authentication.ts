export class Credentials {
  username: string = '';
  password: string = '';

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class Tokens {
  access: string = '';
  refresh: string = '';
}
