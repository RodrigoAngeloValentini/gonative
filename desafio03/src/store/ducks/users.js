import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'users/GET_REQUEST',
  GET_SUCCESS: 'users/GET_SUCCESS',
  GET_FAILURE: 'users/GET_FAILURE',
  OPEN_MODAL: 'users/OPEN_MODAL',
  CLOSE_MODAL: 'users/CLOSE_MODAL',
};

const initialState = Immutable({
  data: [],
  loading: false,
  modalVisible: false,
  erro: null,
});

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: null,
        modalVisible: false,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.OPEN_MODAL:
      return { ...state, modalVisible: true };
    case Types.CLOSE_MODAL:
      return { ...state, modalVisible: false };
    default:
      return state;
  }
}

export const Creators = {
  openModal: () => ({
    type: Types.OPEN_MODAL,
  }),

  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),

  getUserRequest: (search, coordinate) => ({
    type: Types.GET_REQUEST,
    payload: {
      search,
      coordinate,
    },
  }),

  getUserSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),

  getUserFailure: error => ({
    type: Types.GET_FAILURE,
    payload: {
      error,
    },
  }),
};
