import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import { colors } from 'styles';

import firebase from 'firebase';
import Routes from './routes';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyAbHnv8Yst8VWEeqr8HxvmYZEVpfIhj708',
  authDomain: 'gonative-scheduler.firebaseapp.com',
  databaseURL: 'https://gonative-scheduler.firebaseio.com',
  projectId: 'gonative-scheduler',
  storageBucket: 'gonative-scheduler.appspot.com',
  messagingSenderId: '425014196490',
};

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <StatusBar barStyle="light-content" backgroundColor={colors.purple} />
          <Routes />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
