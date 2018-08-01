import Immutable from 'seamless-immutable';

export const Types = {
  LOADING_START: 'loading/LOADING_START',
  LOADING_END: 'loading/LOADING_END',
};

const initialState = Immutable({
  loading: false,
});

export default function loading(state = initialState, action) {
  switch (action.type) {
    case Types.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case Types.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  startLoading: () => ({
    type: Types.LOADING_START,
  }),

  endLoading: () => ({
    type: Types.LOADING_END,
  }),
};
