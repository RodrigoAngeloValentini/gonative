import Immutable from 'seamless-immutable';
import { isSameDate } from 'helpers/dateFunctions';

export const Types = {
  TODO_MODAL_OPEN: 'todo/TODO_MODAL_OPEN',
  TODO_MODAL_CLOSE: 'todo/TODO_MODAL_CLOSE',
  TODO_LIST_REQUEST: 'todo/TODO_LIST_REQUEST',
  TODO_LIST_SUCCESS: 'todo/TODO_LIST_SUCCESS',
  TODO_LIST_ERROR: 'todo/TODO_LIST_ERROR',
  TODO_NEW_REQUEST: 'todo/TODO_NEW_REQUEST',
  TODO_NEW_SUCCESS: 'todo/TODO_NEW_SUCCESS',
  TODO_NEW_ERROR: 'todo/TODO_NEW_ERROR',
  TODO_REMOVE_REQUEST: 'todo/TODO_REMOVE_REQUEST',
  TODO_REMOVE_SUCCESS: 'todo/TODO_REMOVE_SUCCESS',
  TODO_REMOVE_ERROR: 'todo/TODO_REMOVE_ERROR',
};

const initialState = Immutable({
  modalVisible: false,
  refreshing: false,
  list: [],
});

export default function todo(state = initialState, action) {
  switch (action.type) {
    case Types.TODO_MODAL_OPEN:
      return {
        ...state,
        modalVisible: true,
      };
    case Types.TODO_MODAL_CLOSE:
      return {
        ...state,
        modalVisible: false,
      };
    case Types.TODO_LIST_REQUEST:
      return {
        ...state,
        refreshing: true,
      };
    case Types.TODO_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        refreshing: false,
      };
    case Types.TODO_LIST_ERROR:
      return {
        ...state,
        refreshing: false,
      };
    case Types.TODO_NEW_REQUEST:
      return {
        ...state,
      };
    case Types.TODO_NEW_SUCCESS:
      if (isSameDate(action.payload.dateActive, action.payload.data.datetime)) {
        return {
          ...state,
          list: [...state.list, { ...action.payload.data }],
          modalVisible: false,
        };
      }
      return {
        ...state,
        modalVisible: false,
      };
    case Types.TODO_NEW_ERROR:
      return {
        ...state,
        modalVisible: false,
      };
    case Types.TODO_REMOVE_REQUEST:
      return {
        ...state,
        refreshing: true,
      };
    case Types.TODO_REMOVE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.id),
        refreshing: false,
      };
    case Types.TODO_REMOVE_ERROR:
      return {
        ...state,
        refreshing: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  todoModalOpen: () => ({
    type: Types.TODO_MODAL_OPEN,
  }),

  todoModalClose: () => ({
    type: Types.TODO_MODAL_CLOSE,
  }),

  todoListRequest: () => ({
    type: Types.TODO_LIST_REQUEST,
  }),

  todoListSuccess: list => ({
    type: Types.TODO_LIST_SUCCESS,
    payload: {
      list,
    },
  }),

  todoListError: () => ({
    type: Types.TODO_LIST_ERROR,
  }),

  todoNewRequest: (datetime, title, description) => ({
    type: Types.TODO_NEW_REQUEST,
    payload: {
      datetime,
      title,
      description,
    },
  }),

  todoNewSuccess: (dateActive, data) => ({
    type: Types.TODO_NEW_SUCCESS,
    payload: {
      dateActive,
      data,
    },
  }),

  todoNewError: () => ({
    type: Types.TODO_NEW_ERROR,
  }),

  todoRemoveRequest: id => ({
    type: Types.TODO_REMOVE_REQUEST,
    payload: {
      id,
    },
  }),

  todoRemoveSuccess: id => ({
    type: Types.TODO_REMOVE_SUCCESS,
    payload: {
      id,
    },
  }),

  todoRemoveError: () => ({
    type: Types.TODO_REMOVE_ERROR,
  }),
};
