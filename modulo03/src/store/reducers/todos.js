const initialState = [
  { id: 0, text: 'Fazer café', completed: false },
  { id: 1, text: 'Estudar GoNative', completed: false },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          completed: false,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
