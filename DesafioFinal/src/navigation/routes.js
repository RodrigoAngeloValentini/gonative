import React from 'react';

import { createStackNavigator } from 'react-navigation';

import Register from 'pages/register';
import Header from './components/header';

const Stack = createStackNavigator(
  {
    Register: { screen: Register },
  },
  {
    initialRouteName: 'Register',
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="SCHEDULER" />,
    },
  },
);

export default Stack;
