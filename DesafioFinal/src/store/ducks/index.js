import { combineReducers } from 'redux';

import loading from './loading';
import notification from './notification';
import user from './user';

export default combineReducers({
  loading,
  user,
  notification,
});
