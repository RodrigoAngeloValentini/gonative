import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';

import Map from 'components/Map';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Map />
  </Provider>
);

export default App;
