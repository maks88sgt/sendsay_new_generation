import {AuthStore} from './Auth.store';
import {AuthActions} from './Auth.actions';
import {AuthActionsType} from "../actionsTypes";

export const authReducer = (state = new AuthStore(), action: AuthActionsType<any>) => {
  switch (action.type) {
    case AuthActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};