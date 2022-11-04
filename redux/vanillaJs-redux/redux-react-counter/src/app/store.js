import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';
import { pokemonApiSlice } from '../features/pokemon/pokemon-api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApiSlice.middleware);
  },
});
