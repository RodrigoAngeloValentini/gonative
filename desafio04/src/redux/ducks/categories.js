import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  categoriesRequest: null,
  categoriesSuccess: ['data'],
  categoriesFailure: null,
  categoriesAtive: ['id'],
});
export { Types };
export default Creators;

export const INITIAL_STATE = {
  loading: false,
  error: false,
  ativeCategory: 0,
  data: [],
};

export const request = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
  error: false,
});

export const failure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const ative = (state, action) => ({
  ...state,
  ativeCategory: action.id,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_REQUEST]: request,
  [Types.CATEGORIES_SUCCESS]: success,
  [Types.CATEGORIES_FAILURE]: failure,
  [Types.CATEGORIES_ATIVE]: ative,
});
