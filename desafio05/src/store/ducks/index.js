import { combineReducers } from 'redux';

import nav from 'navigation/reducer';
import albums from './albums';
import search from './search';
import player from './player';

export default combineReducers({
  nav,
  albums,
  search,
  player,
});
