import Imutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'product/GET_REQUEST',
  GET_SUCCESS: 'product/GET_SUCCESS',
  GET_FAILURE: 'product/GET_FAILURE',
};

const initialState = Imutable({
  product: null,
  loading: false,
  error: null,
});

export default function product(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        product: action.payload.data,
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
  getProductRequest: productId => ({
    type: Types.GET_REQUEST,
    payload: {
      productId,
    },
  }),

  getProductSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getProductFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};
