export const todoAdd = todo => ({
  type: 'TODO_ADD',
  todo,
});

export const todoRemove = index => ({
  type: 'TODO_REMOVE',
  index,
});
