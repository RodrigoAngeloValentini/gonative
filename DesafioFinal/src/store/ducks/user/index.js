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
  userExist: null,
  userRegister: null,
  userAuth: null,
  id: null,
  name: '',
  phone: '',
  token: '',
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.USER_PHONE_VERIFY:
      return {
        ...state,
        ...initialState,
      };
    case Types.USER_PHONE_VERIFY_SUCCESS:
      return {
        ...state,
        userExist: action.payload.status,
        phone: action.payload.phone,
      };
    case Types.USER_PHONE_VERIFY_ERROR:
      return {
        ...state,
        userExist: false,
        phone: '',
      };
    case Types.USER_REGISTER_REQUEST:
      return {
        ...state,
        ...initialState,
      };
    case Types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userRegister: true,
        phone: action.payload.phone,
      };
    case Types.USER_REGISTER_ERROR:
      return {
        ...state,
        userRegister: false,
      };
    case Types.USER_AUTH_REQUEST:
      return {
        ...state,
        ...initialState,
      };
    case Types.USER_AUTH_SUCCESS:
      return {
        ...state,
        userAuth: true,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        name: action.payload.name,
        phone: action.payload.phone,
      };
    case Types.USER_AUTH_ERROR:
      return {
        ...state,
        userAuth: false,
      };
    case Types.USER_UPDATE_SUCCESS:
      console.log(action);
      return {
        ...state,
        name: action.payload.name,
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

  phoneVerifySuccess: (phone, status) => ({
    type: Types.USER_PHONE_VERIFY_SUCCESS,
    payload: {
      phone,
      status,
    },
  }),

  phoneVerifyError: error => ({
    type: Types.USER_PHONE_VERIFY_ERROR,
    payload: {
      error,
    },
  }),

  userRegisterRequest: (phone, name, password) => ({
    type: Types.USER_REGISTER_REQUEST,
    payload: {
      phone,
      name,
      password,
    },
  }),

  userRegisterSuccess: phone => ({
    type: Types.USER_REGISTER_SUCCESS,
    payload: {
      phone,
    },
  }),

  userRegisterError: error => ({
    type: Types.USER_REGISTER_ERROR,
    payload: {
      error,
    },
  }),

  userAuthRequest: (phone, password) => ({
    type: Types.USER_AUTH_REQUEST,
    payload: {
      phone,
      password,
    },
  }),

  userAuthSuccess: (token, refreshToken, name, phone) => ({
    type: Types.USER_AUTH_SUCCESS,
    payload: {
      token,
      refreshToken,
      name,
      phone,
    },
  }),

  userAuthError: () => ({
    type: Types.USER_AUTH_ERROR,
  }),

  userUpdateRequest: (name, password, passwordConfirmation) => ({
    type: Types.USER_UPDATE_REQUEST,
    payload: {
      name,
      password,
      passwordConfirmation,
    },
  }),

  userUpdateSuccess: name => ({
    type: Types.USER_UPDATE_SUCCESS,
    payload: {
      name,
    },
  }),

  userUpdateError: () => ({
    type: Types.USER_UPDATE_ERROR,
  }),
};
