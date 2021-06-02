export class ConsoleStore {
    request: null | string;
    response: null | string;
    isFetching: boolean;
    requestSuccess: boolean;

    constructor() {
      this.request = null;
      this.response = null;
      this.isFetching = false;
      this.requestSuccess = false;
    }
}