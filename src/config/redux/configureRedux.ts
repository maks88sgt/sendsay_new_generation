import {AnyAction, configureStore, Reducer} from "@reduxjs/toolkit";
import {
  combineReducers,
} from 'redux';
import {
  persistReducer, persistStore,
} from 'redux-persist';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {authReducer} from '@redux/auth/Auth.reducer';
import {consoleReducer} from '@redux/console/Console.reducer';
import {historyReducer} from '@redux/history/History.reducer';
import {persistConfig} from "@config/persist/persistConfig";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../../sagas/rootSaga";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  console: consoleReducer,
  history: historyReducer,
});

export function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer as Reducer<unknown, AnyAction>),
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware).concat(routerMiddleware(history));
    },
  });

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return {store, persistor};
}