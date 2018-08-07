import Immutable from 'seamless-immutable';
import { momentNow } from 'helpers/dateFunctions';

export const Types = {
  CALENDAR_MINI_SHOW: 'calendar/CALENDAR_MINI_SHOW',
  CALENDAR_MINI_HIDE: 'calendar/CALENDAR_MINI_HIDE',
  CALENDAR_CHANGE_DATE: 'calendar/CALENDAR_CHANGE_DATE',
};

const initialState = Immutable({
  date: momentNow(),
  showMini: false,
});

export default function calendar(state = initialState, action) {
  switch (action.type) {
    case Types.CALENDAR_MINI_SHOW:
      return {
        ...state,
        showMini: true,
      };
    case Types.CALENDAR_MINI_HIDE:
      return {
        ...state,
        showMini: false,
      };
    case Types.CALENDAR_CHANGE_DATE:
      return {
        ...state,
        date: action.payload.date,
      };
    default:
      return state;
  }
}

export const Creators = {
  showMiniCalendar: () => ({
    type: Types.CALENDAR_MINI_SHOW,
  }),

  hideMiniCalendar: () => ({
    type: Types.CALENDAR_MINI_HIDE,
  }),

  changeDateCalendar: date => ({
    type: Types.CALENDAR_CHANGE_DATE,
    payload: {
      date,
    },
  }),
};
