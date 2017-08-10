const initialState = [];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [action.todo, ...state];

    default:
      return state;
  }
};

export default todo;
