import Immutable from 'seamless-immutable';

export const Types = {
  NOTIFICATION_SHOW: 'notification/NOTIFICATION_SHOW',
  NOTIFICATION_HIDE: 'notification/NOTIFICATION_HIDE',
};

const initialState = Immutable({
  show: false,
  msg: '',
  error: false,
});

export default function notification(state = initialState, action) {
  switch (action.type) {
    case Types.NOTIFICATION_SHOW:
      console.log(action.payload);
      return {
        ...state,
        show: true,
        msg: action.payload.msg,
        error: action.payload.error,
      };
    case Types.NOTIFICATION_HIDE:
      return {
        ...state,
        show: false,
        msg: '',
        error: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  showNofitication: (msg, error) => ({
    type: Types.NOTIFICATION_SHOW,
    payload: {
      msg,
      error,
    },
  }),

  hideNotification: () => ({
    type: Types.NOTIFICATION_HIDE,
  }),
};
