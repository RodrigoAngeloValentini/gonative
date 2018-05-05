import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from 'pages/home';
import Issues from 'pages/issues';

const Routes = StackNavigator(
  {
    Home: { screen: Home },
    Issues: { screen: Issues },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Routes;
