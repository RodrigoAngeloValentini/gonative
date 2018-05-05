import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProductActions } from 'store/ducks/product';

export function* getProduct(action) {
  const { productId } = action.payload;

  try {
    const response = yield call(api.get, `/products/${productId}`);

    yield put(ProductActions.getProductSuccess(response.data));
  } catch (error) {
    yield put(ProductActions.getProductFailure(error.message));
  }
}
