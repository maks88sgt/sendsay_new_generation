import {ConsoleStore} from './Console.store';
import {ConsoleActions} from './Console.actions';
import {ConsoleActionsType} from "../actionsTypes";

export const consoleReducer = (state = new ConsoleStore(), action: ConsoleActionsType<any>) => {
  switch (action.type) {
    case ConsoleActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};