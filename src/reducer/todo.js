const initialState = [
  { todoValue: 'TEST 0' },
  { todoValue: 'TEST 1' },
  { todoValue: 'TEST 2' },
  { todoValue: 'TEST 3' },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [action.todo, ...state];
    case 'TODO_REMOVE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
};

export default todo;
