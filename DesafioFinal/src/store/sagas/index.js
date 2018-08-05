import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from '../ducks/user';

import { userPhoneVerify } from './user';

export default function* root() {
  return yield all([takeLatest(UserTypes.USER_PHONE_VERIFY, userPhoneVerify)]);
}
