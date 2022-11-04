import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    visibilityFilter: 'SHOW ALL',
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((t) => t.id !== payload.id);
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    showAll: (state, { payload }) => {
      state.visibilityFilter = payload.filter;
    },
    showActive: (state, { payload }) => {
      state.visibilityFilter = payload.filter;
    },
    showCompleted: (state, { payload }) => {
      state.visibilityFilter = payload.filter;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  showAll,
  showActive,
  showCompleted,
  toggleTodo,
} = todosSlice.actions;
export const todosSelector = (state) => state.todos.todos;

export default todosSlice.reducer;
