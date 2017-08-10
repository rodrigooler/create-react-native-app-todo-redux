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

    default:
      return state;
  }
};

export default todo;
