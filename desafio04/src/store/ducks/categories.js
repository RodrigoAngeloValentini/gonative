import Imutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  GET_FAILURE: 'categories/GET_FAILURE',
  SET_CATEGORY_ACTIVE: 'categories/SET_CATEGORY_ACTIVE',
};

const initialState = Imutable({
  categories: [],
  categoryActiveId: 1,
  loading: false,
  error: null,
});

export default function categories(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.SET_CATEGORY_ACTIVE:
      return { ...state, categoryActiveId: action.payload.id };
    default:
      return state;
  }
}

export const Creators = {
  getCategoriesRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getCategoriesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),

  setCategoryActive: id => ({
    type: Types.SET_CATEGORY_ACTIVE,
    payload: {
      id,
    },
  }),
};
