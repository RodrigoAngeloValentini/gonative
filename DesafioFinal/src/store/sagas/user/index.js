import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators as LoadingActions } from 'store/ducks/loading';
import { Creators as NotificationActions } from 'store/ducks/notification';
import { Creators as UserActions } from 'store/ducks/user';

const getUser = state => state.user;

const getHeaders = (jwtToken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwtToken}`,
  };
  return headers;
};

export function* userPhoneVerify(action) {
  yield put(LoadingActions.startLoading());

  const { phone } = action.payload;

  const response = yield call(api.get, `/user/phone-verify/${phone}`);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao buscar usuário', true));

      yield put(UserActions.phoneVerifyError());
      break;
    default:
      if (response.data.status) {
        yield put(UserActions.phoneVerifySuccess(phone, true));
      } else {
        yield put(NotificationActions.showNofitication('Usuário não encontrado', true));

        yield put(UserActions.phoneVerifySuccess(phone, false));
      }
  }

  yield put(LoadingActions.endLoading());
}

export function* userRegister(action) {
  yield put(LoadingActions.startLoading());

  const { phone, name, password } = action.payload;

  if (phone.length !== 11) {
    yield put(NotificationActions.showNofitication('Número inválido', true));

    yield put(UserActions.userRegisterError());

    return;
  }

  const data = {
    phone,
    name,
    password,
  };

  const response = yield call(api.post, '/user', data);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao cadastrar', true));

      yield put(UserActions.userRegisterError());
      break;
    case 422:
      yield put(NotificationActions.showNofitication(response.data.error[0].message, true));

      yield put(UserActions.userRegisterError());
      break;
    default:
      if (response.data.phone) {
        yield put(NotificationActions.showNofitication('Cadastro Efetuado', false));

        yield put(UserActions.userRegisterSuccess(response.data.phone));
      } else {
        yield put(NotificationActions.showNofitication('Erro ao cadastrar', true));

        yield put(UserActions.userRegisterError());
      }
  }

  yield put(LoadingActions.endLoading());
}

export function* userAuth(action) {
  yield put(LoadingActions.startLoading());

  const { phone, password } = action.payload;

  const data = {
    phone,
    password,
  };

  const response = yield call(api.post, '/auth/authenticate', data);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao autenticar', true));

      yield put(UserActions.userAuthError());
      break;
    case 422:
      yield put(NotificationActions.showNofitication(response.data.error[0].message, true));

      yield put(UserActions.userAuthError());
      break;
    case 401:
      yield put(NotificationActions.showNofitication('Login inválido', true));

      yield put(UserActions.userAuthError());
      break;
    default:
      if (response.data.token) {
        yield put(NotificationActions.showNofitication('Login OK', false));

        const { token, refreshToken, name } = response.data;

        yield put(UserActions.userAuthSuccess(token, refreshToken, name, phone));
      } else {
        yield put(NotificationActions.showNofitication('Erro ao autenticar', true));

        yield put(UserActions.userAuthError());
      }
  }

  yield put(LoadingActions.endLoading());
}

export function* userUpdate(action) {
  yield put(LoadingActions.startLoading());

  const { name, password, passwordConfirmation } = action.payload;

  const user = yield select(getUser);

  const headers = getHeaders(user.token);
  api.setHeaders({
    ...headers,
  });

  const data = {
    name,
    password,
    passwordConfirmation,
  };

  const response = yield call(api.put, '/user', data);

  switch (response.status) {
    case 500:
      yield put(NotificationActions.showNofitication('Erro ao atualizar', true));

      yield put(UserActions.userUpdateError());
      break;
    case 401:
      yield put(NotificationActions.showNofitication('Não foi possível atualizar', true));

      yield put(UserActions.userUpdateError());
      break;
    case 422:
      yield put(NotificationActions.showNofitication(response.data.error[0].message, true));

      yield put(UserActions.userUpdateError());
      break;
    default:
      if (response.ok) {
        yield put(NotificationActions.showNofitication('Atualizado com successo', false));

        console.log(response.data);

        yield put(UserActions.userUpdateSuccess(response.data.name));
      } else {
        yield put(NotificationActions.showNofitication('Erro ao atualizar', true));

        yield put(UserActions.userUpdateError());
      }
  }

  yield put(LoadingActions.endLoading());
}
