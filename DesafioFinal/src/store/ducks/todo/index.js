import Immutable from 'seamless-immutable';

export const Types = {
  TODO_MODAL_OPEN: 'todo/TODO_MODAL_OPEN',
  TODO_MODAL_CLOSE: 'todo/TODO_MODAL_CLOSE',
};

const initialState = Immutable({
  modalVisible: false,
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
};
