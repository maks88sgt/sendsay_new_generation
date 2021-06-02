import {ConsoleStore} from './Console.store';
import {ConsoleActionsType} from "../actionsTypes";

export class ConsoleActions {
    static PREFIX = 'CONSOLE_';

    static UPDATE_STORE = `${ConsoleActions.PREFIX}UPDATE_STORE`;
    static SEND_REQUEST = `${ConsoleActions.PREFIX}SEND_REQUEST`;

    static updateStore = (partialStore: Partial<ConsoleStore>): ConsoleActionsType<Partial<ConsoleStore>> => {
      return {
        type: ConsoleActions.UPDATE_STORE,
        payload: partialStore,
      };
    }

    static sendRequest = (request: string): ConsoleActionsType<string> => {
      return {
        type: ConsoleActions.SEND_REQUEST,
        payload: request,
      };
    }
}