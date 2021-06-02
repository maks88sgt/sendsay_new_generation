import {AuthStore} from '../redux/auth/Auth.store';
import {ConsoleStore} from '../redux/console/Console.store';
import {HistoryStore} from '../redux/history/History.store';

export class State {
    auth: AuthStore;
    console: ConsoleStore;
    history: HistoryStore;

    constructor() {
      this.auth = new AuthStore();
      this.console = new ConsoleStore();
      this.history = new HistoryStore();
    }
}