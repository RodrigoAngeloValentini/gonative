import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as UserActions } from 'store/ducks/users';

export function* getUser(action) {
  try {
    const { search, coordinate } = action.payload;

    const response = yield call(api.get, search);

    console.log(response.data);
    // eslint-disable-next-line
    const { id, name, avatar_url, bio } = response.data;

    const result = {
      id,
      coordinate,
      name,
      avatar_url,
      bio,
    };

    yield put(UserActions.getUserSuccess(result));
  } catch (error) {
    yield put(UserActions.getUserFailure('Erro ao buscar usuário'));
  }
}
