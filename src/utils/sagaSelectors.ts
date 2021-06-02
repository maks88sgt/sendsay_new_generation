import {State} from '../config/State';
import {HistoryItemType} from "../redux/history/History.store";

export const getCredentials = (state: State) => {
  return {
    password: state.auth.password,
    login: state.auth.login,
    sublogin: state.auth.sublogin,
  };
};

export const getSessionKey = (state: State): string | null => state.auth.sessionKey;

export const getCurrentHistory = (state: State): HistoryItemType[] => state.history.current;
