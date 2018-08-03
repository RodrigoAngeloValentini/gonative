import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Register from 'pages/register';
import Identification from 'pages/identification';
import Login from 'pages/login';
import Home from 'pages/home';
import Profile from 'pages/profile';

import Header from './components/header';
import Menu from './components/menu';

export const Stack = createStackNavigator(
  {
    Register: { screen: Register },
    Identification: { screen: Identification },
    Login: { screen: Login },
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: props => <Header {...props} defaultTitle="SCHEDULER" />,
    },
  },
);

export const Drawer = createDrawerNavigator(
  {
    Register: { screen: Register },
    Identification: { screen: Identification },
    Login: { screen: Login },
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    contentComponent: props => <Menu {...props} />,
    drawerWidth: 300,
  },
);
