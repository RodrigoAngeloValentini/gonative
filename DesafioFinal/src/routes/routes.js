import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Register from 'pages/register';
import Identification from 'pages/identification';
import Login from 'pages/login';
import Home from 'pages/home';

import Header from './components/header';

const Stack = createStackNavigator(
  {
    Register: { screen: Register },
    Identification: { screen: Identification },
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="SCHEDULER" />,
    },
  },
);

export default Stack;
