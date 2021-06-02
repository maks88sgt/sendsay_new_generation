import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import {
  createMigrate, persistReducer, persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {authReducer} from '@redux/auth/Auth.reducer';
import {persistMigrations} from './persistMigrations';
import {persistTransform} from './persistTransform';
import {rootSaga} from '../sagas/rootSaga';
import {consoleReducer} from '@redux/console/Console.reducer';
import {MigrationManifest} from 'redux-persist/es/types';
import {historyReducer} from '@redux/history/History.reducer';

function getComposer() {
  // @ts-ignore
  const devtoolsComposer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
  if (devtoolsComposer) {
    return devtoolsComposer({trace: true, traceLimit: 25});
  }

  return compose;
}

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
export function makeMiddleware(history) {
  const middleware = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  );
  return middleware;
}

export function configureRedux() {
  const composer = getComposer();
  const history = createBrowserHistory();
  const reducers = makeReducers(history);

  const enhancer = composer(makeMiddleware(history));

  const store = createStore(reducers, enhancer);

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return {
    store,
    persistor,
    history,
  };
}

// @ts-ignore
function makeReducers(history) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    console: consoleReducer,
    history: historyReducer,
  });

  return persistReducer<any>(
    {
      key: 'root',
      storage,
      version: 1,
      blacklist: ['router'],
      transforms: [persistTransform],
      stateReconciler: autoMergeLevel2,
      migrate: createMigrate(persistMigrations as unknown as MigrationManifest),
    },
    rootReducer
  );
}


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .prepend(
              // correctly typed middlewares can just be used
              additionalMiddleware,
              // you can also type middlewares manually
              untypedMiddleware as Middleware<
                  (action: Action<'specialAction'>) => number,
                  RootState
                  >
          )
          // prepend and concat calls can be chained
          .concat(logger),
})
