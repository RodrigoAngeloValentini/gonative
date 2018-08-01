import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Register from 'pages/register';
import Identification from 'pages/identification';
import Login from 'pages/login';

import Header from './components/header';

const Stack = createStackNavigator(
  {
    Register: { screen: Register },
    Identification: { screen: Identification },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="SCHEDULER" />,
    },
  },
);

export default Stack;
