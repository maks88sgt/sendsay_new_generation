import {PersistState} from 'redux-persist/es/types';
import {AuthStore} from '@redux/auth/Auth.store';

const initialState = {};

export type AppPersistState = {
    auth: AuthStore;
    _persist: PersistState;
};


type AppPersistMigrtionsType = {
    // @ts-ignore
    [key in persistMigrations]: (state: AppPersistState) => AppPersistState;
};


export const persistMigrations: AppPersistMigrtionsType = {
  1: (state: AppPersistState) => {
    return {
      ...state,
      ...initialState,
    };
  },
};