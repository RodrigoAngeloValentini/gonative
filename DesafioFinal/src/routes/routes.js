import React from 'react';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Register from 'pages/register';
import Identification from 'pages/identification';
import Login from 'pages/login';
import Home from 'pages/home';
import Profile from 'pages/profile';

import { colors, fonts } from 'styles';
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
    initialRouteName: 'Identification',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.purple,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontSize: fonts.big,
        fontWeight: 'normal',
      },
    },
  },
);

export const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Identification: { screen: Identification },
    Register: { screen: Register },
    Login: { screen: Login },
    Profile: { screen: Profile },
  },
  {
    contentComponent: props => <Menu {...props} />,
    drawerWidth: 300,
  },
);
