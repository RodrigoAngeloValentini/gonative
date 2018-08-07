import { combineReducers } from 'redux';

import loading from './loading';
import notification from './notification';
import user from './user';
import todo from './todo';
import calendar from './calendar';

export default combineReducers({
  loading,
  user,
  notification,
  todo,
  calendar,
});
