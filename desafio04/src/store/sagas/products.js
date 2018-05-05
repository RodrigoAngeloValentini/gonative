import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts(action) {
  const { categoryId } = action.payload;

  try {
    const response = yield call(api.get, `/category_products/${categoryId}`);

    yield put(ProductsActions.getProductsSuccess(response.data.products));
  } catch (error) {
    yield put(ProductsActions.getProductsFailure(error.message));
  }
}
