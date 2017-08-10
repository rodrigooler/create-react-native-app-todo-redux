// Action type TODO_ADD
export const todoAdd = todo => ({
  type: 'TODO_ADD',
  todo,
});

// Action type TODO_REMOVE
export const todoRemove = idx => ({
  type: 'TODO_REMOVE',
  idx,
});
