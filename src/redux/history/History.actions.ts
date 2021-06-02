import {HistoryItemType, HistoryStore} from './History.store';
import {HistoryActionsType} from "../actionsTypes";

export class HistoryActions {
    static PREFIX = 'HISTORY_';

    static UPDATE_STORE = `${HistoryActions.PREFIX}UPDATE_STORE`;
    static SAVE_REQUEST_HISTORY_ITEM = `${HistoryActions.PREFIX}SAVE_REQUEST_HISTORY_ITEM`;
    static DELETE_REQUEST_HISTORY_ITEM = `${HistoryActions.PREFIX}DELETE_REQUEST_HISTORY_ITEM`;
    static CLEAR_REQUEST_HISTORY_ITEM = `${HistoryActions.PREFIX}CLEAR_REQUEST_HISTORY_ITEM`;
    static CALL_REQUEST_HISTORY_ITEM = `${HistoryActions.PREFIX}CALL_REQUEST_HISTORY_ITEM`;

    static updateStore = (partialStore: Partial<HistoryStore>): HistoryActionsType<Partial<HistoryStore>> => {
      return {
        type: HistoryActions.UPDATE_STORE,
        payload: partialStore,
      };
    }

    static saveRequestHistoryItem = (historyItem: Omit<HistoryItemType, 'name'>): HistoryActionsType<Omit<HistoryItemType, 'name'>> => {
      return {
        type: HistoryActions.SAVE_REQUEST_HISTORY_ITEM,
        payload: historyItem,
      };
    }

    static deleteRequestHistoryItem = (historyItem: string): HistoryActionsType<string> => {
      return {
        type: HistoryActions.DELETE_REQUEST_HISTORY_ITEM,
        payload: historyItem,
      };
    }

    static clearRequestHistory = (): HistoryActionsType<any> => {
      return {
        type: HistoryActions.CLEAR_REQUEST_HISTORY_ITEM,
      };
    }

    static callRequestHistoryItem = (request: string): HistoryActionsType<string> => {
        return {
            type: HistoryActions.CALL_REQUEST_HISTORY_ITEM,
            payload: request,
        };
    }
}