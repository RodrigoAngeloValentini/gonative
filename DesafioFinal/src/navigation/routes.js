/* React */
import React from 'react';

/* Navigation */
import { StackNavigator } from 'react-navigation';

/* Components */
import Header from 'navigation/components/header';

import Identification from 'pages/identification';
import Login from 'pages/login';
import Register from 'pages/register';
import Dashboard from 'pages/dashboard';
import Calendar from 'pages/calendar';

const Stack = StackNavigator(
  {
    Identification: { screen: Identification },
    Login: { screen: Login },
    Register: { screen: Register },
    Dashboard: { screen: Dashboard },
    Calendar: { screen: Calendar },
  },
  {
    initialRouteName: 'Identification',
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="SCHEDULER" />,
    },
  },
);

export default Stack;
