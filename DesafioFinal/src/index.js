import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from 'redux/store';

import Routes from 'navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
