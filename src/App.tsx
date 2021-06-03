import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';

import {configureAppStore} from '@config/redux/configureRedux';
import {AppRouterContainer} from '@components/appRouter/AppRouter.container';

const {
  store, persistor,
} = configureAppStore();


function App(): JSX.Element {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AppRouterContainer/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  );
}

export default App;
