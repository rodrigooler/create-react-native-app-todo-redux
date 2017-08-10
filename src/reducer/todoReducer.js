const initialState = {
  todos: [
    { todoValue: 'TESTE' },
    { todoValue: 'TESTE' },
    { todoValue: 'TESTE' },
  ],
};

const todo = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'TODO_ADD':
      return [action.todo, ...state];

    default:
      return state;
  }
};

export default todo;
