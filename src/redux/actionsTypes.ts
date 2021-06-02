import {AuthStore} from "./auth/Auth.store";

export type AuthActionsType<T> = {
    type: string;
    payload?: T;
}

export type ConsoleActionsType<T> = {
    type: string;
    payload?: T;
}

export type HistoryActionsType<T> = {
    type: string;
    payload?: T;
}