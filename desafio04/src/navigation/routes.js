import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from 'styles';

import Home from 'pages/home';
import HomeDetail from 'pages/homeDetail';
import Cart from 'pages/cart';

const stackNavigatorOptions = {
  headerStyle: {
    backgroundColor: colors.white,
    height: 54,
  },
  headerTintColor: colors.red,
  headerBackTitle: null,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
};

const homeNav = StackNavigator(
  {
    Home: { screen: Home },
    HomeDetail: { screen: HomeDetail },
  },
  {
    navigationOptions: stackNavigatorOptions,
  },
);

const cartNav = StackNavigator(
  {
    Cart: { screen: Cart },
  },
  {
    navigationOptions: stackNavigatorOptions,
  },
);

const Routes = TabNavigator(
  {
    Home: {
      screen: homeNav,
    },
    Cart: {
      screen: cartNav,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Cart') {
          iconName = 'ios-cart';
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.gray,
      style: {
        backgroundColor: colors.white,
      },
      showIcon: true,
      showLabel: false,
      tabStyle: {
        height: 54,
      },
      indicatorStyle: {
        backgroundColor: colors.red,
      },
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default Routes;
