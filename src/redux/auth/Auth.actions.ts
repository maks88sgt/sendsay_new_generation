import {AuthStore} from './Auth.store';
import {AuthActionsType} from "../actionsTypes";

export class AuthActions {
    static PREFIX = 'AUTH_';

    static UPDATE_STORE = `${AuthActions.PREFIX}UPDATE_STORE`;
    static TRY_LOGIN = `${AuthActions.PREFIX}TRY_LOGIN`;
    static LOGOUT = `${AuthActions.PREFIX}LOGOUT`;

    static updateStore = (partialStore: Partial<AuthStore>): AuthActionsType<Partial<AuthStore>> => {
      return {
        type: AuthActions.UPDATE_STORE,
        payload: partialStore,
      };
    }

    static tryLogIn = (loginData: Partial<AuthStore>): AuthActionsType<Partial<AuthStore>> => {
      return {
        type: AuthActions.TRY_LOGIN,
        payload: loginData,
      };
    }

    static logOut = (): AuthActionsType<Partial<AuthStore>> => {
      return {
        type: AuthActions.LOGOUT,
      };
    }
}