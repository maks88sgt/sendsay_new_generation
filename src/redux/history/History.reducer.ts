import {HistoryStore} from './History.store';
import {HistoryActions} from './History.actions';
import {HistoryActionsType} from "../actionsTypes";

export const historyReducer = (state = new HistoryStore(), action: HistoryActionsType<any>) => {
  switch (action.type) {
    case HistoryActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};