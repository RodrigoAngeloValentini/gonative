/* React */
import React from 'react';

/* Navigation */
import { StackNavigator, DrawerNavigator } from 'react-navigation';

/* Components */
import Footer from 'navigation/components/footer';
import Header from 'navigation/components/header';
import Bugger from 'navigation/components/bugger';

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

const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Stack,
    },
  },
  {
    contentComponent: props => <Bugger {...props} />,
    drawerWidth: 300,
  },
);

export default Stack;
