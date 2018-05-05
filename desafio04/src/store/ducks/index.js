import { combineReducers } from 'redux';

import nav from 'navigation/reducer';
import categories from './categories';
import products from './products';
import product from './product';

export default combineReducers({
  nav,
  categories,
  products,
  product,
});
