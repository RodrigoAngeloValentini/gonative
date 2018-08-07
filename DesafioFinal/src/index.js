import 'config/ReactotronConfig';

import React from 'react';
import { View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import { colors } from 'styles';

import Notification from 'components/notification';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple} />
      <Notification />
      <Routes />
    </View>
  </Provider>
);

export default App;
