export class AuthStore {
    isLoading: boolean;
    sessionKey: null | string;
    login: null | string;
    sublogin: null | string;
    password: null | string;
    loginError: null | string;

    constructor() {
      this.isLoading = false;
      this.sessionKey = null;
      this.login = null;
      this.sublogin = null;
      this.password = null;
      this.loginError = null;
    }
}