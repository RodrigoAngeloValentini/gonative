import Imutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  GET_FAILURE: 'products/GET_FAILURE',
};

const initialState = Imutable({
  products: [],
  loading: false,
  error: null,
});

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: categoryId => ({
    type: Types.GET_REQUEST,
    payload: {
      categoryId,
    },
  }),

  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getProductsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};
