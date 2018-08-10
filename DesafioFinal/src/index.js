import 'config/ReactotronConfig';

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';

import { colors } from 'styles';

import Notification from 'components/notification';
import Routes from './routes';
import store from './store';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor={colors.purple} />
          <Notification />
          <Routes />
        </View>
      </Provider>
    );
  }
}

export default App;
