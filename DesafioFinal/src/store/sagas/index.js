import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';
import { Types as TodoTypes } from '../ducks/todo';

import { userPhoneVerify, userRegister, userAuth } from './user';
import { getTodoByDate, newTodo, deleteTodo } from './todo';

export default function* root() {
  return yield all([
    takeLatest(UserTypes.USER_PHONE_VERIFY, userPhoneVerify),
    takeLatest(UserTypes.USER_REGISTER_REQUEST, userRegister),
    takeLatest(UserTypes.USER_AUTH_REQUEST, userAuth),

    takeLatest(TodoTypes.TODO_LIST_REQUEST, getTodoByDate),
    takeLatest(TodoTypes.TODO_NEW_REQUEST, newTodo),
    takeLatest(TodoTypes.TODO_REMOVE_REQUEST, deleteTodo),
  ]);
}
