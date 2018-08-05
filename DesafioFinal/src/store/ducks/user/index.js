import Immutable from 'seamless-immutable';

export const Types = {
  USER_PHONE_VERIFY: 'user/USER_PHONE_VERIFY',
  USER_PHONE_VERIFY_SUCCESS: 'user/USER_PHONE_VERIFY_SUCCESS',
  USER_PHONE_VERIFY_ERROR: 'user/USER_PHONE_VERIFY_ERROR',

  USER_AUTH_REQUEST: 'user/USER_AUTH_REQUEST',
  USER_AUTH_SUCCESS: 'user/USER_AUTH_SUCCESS',
  USER_AUTH_ERROR: 'user/USER_AUTH_ERROR',

  USER_REGISTER_REQUEST: 'user/USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS: 'user/USER_REGISTER_SUCCESS',
  USER_REGISTER_ERROR: 'user/USER_REGISTER_ERROR',

  USER_UPDATE_REQUEST: 'user/USER_UPDATE_REQUEST',
  USER_UPDATE_SUCCESS: 'user/USER_UPDATE_SUCCESS',
  USER_UPDATE_ERROR: 'user/USER_UPDATE_ERROR',
};

const initialState = Immutable({
  id: null,
  name: '',
  phone: '',
  token: '',
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.USER_UPDATE_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const Creators = {
  phoneVerifyRequest: phone => ({
    type: Types.USER_PHONE_VERIFY,
    payload: {
      phone,
    },
  }),

  phoneVerifySuccess: phone => ({
    type: Types.USER_PHONE_VERIFY_SUCCESS,
    payload: {
      phone,
    },
  }),

  phoneVerifyError: error => ({
    type: Types.USER_PHONE_VERIFY_ERROR,
    payload: {
      error,
    },
  }),
};
