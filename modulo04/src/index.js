import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Routes from 'navigation';
import Player from 'components/Player';

import 'config/ReactotronConfig';

import store from 'store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>
);

export default App;
