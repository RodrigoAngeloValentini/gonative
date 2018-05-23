import { createStackNavigator } from 'react-navigation';

import Identification from './pages/identification';
import Login from './pages/login';

const Routes = createStackNavigator(
  {
    Identification: { screen: Identification },
    Login: { screen: Login },
  },
  {
    initialRouteName: 'Identification',
  },
);

export default Routes;
