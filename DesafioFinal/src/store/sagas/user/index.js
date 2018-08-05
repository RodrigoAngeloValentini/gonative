import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as LoadingActions } from 'store/ducks/loading';
import { Creators as NotificationActions } from 'store/ducks/notification';
import { Creators as UserActions } from 'store/ducks/user';

export function* userPhoneVerify(action) {
  yield put(LoadingActions.startLoading());

  const { phone } = action.payload;

  try {
    const response = yield call(api.get, `/user/phone-verify/${phone}`);

    if (response.data.status) {
      yield put(NotificationActions.showNofitication('Usuário encontrado', false));

      yield put(UserActions.phoneVerifySuccess(phone));
    } else {
      yield put(NotificationActions.showNofitication('Usuário não encontrado', true));

      yield put(UserActions.phoneVerifyError());
    }
  } catch (error) {
    yield put(NotificationActions.showNofitication('Erro ao buscar', true));
  }

  yield put(LoadingActions.endLoading());
}
