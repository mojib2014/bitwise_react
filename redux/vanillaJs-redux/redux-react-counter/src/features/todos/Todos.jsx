import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterLink from '../../components/FilterLink';
import {
  addTodo,
  removeTodo,
  showActive,
  showAll,
  showCompleted,
  todosSelector,
  toggleTodo,
} from './todosSlice';

let nextTodoId = 1;

export default function Todos() {
  const [text, setText] = useState('');
  const todos = useSelector(todosSelector);
  const filter = useSelector((state) => state.todos.visibilityFilter);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nextTodoId++,
      text,
      completed: false,
    };

    dispatch(addTodo(newTodo));
  };

  const getVisibleTodos = (filter) => {
    switch (filter) {
      case 'SHOW ALL':
        return todos;
      case 'SHOW ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'SHOW COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        throw new Error('Invalid filter ', filter);
    }
  };

  const filteredTodos = getVisibleTodos(filter);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo({ id: todo.id }))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}{' '}
            <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      Show:{' '}
      <FilterLink onClick={() => dispatch(showAll({ filter: 'SHOW ALL' }))}>
        Show All
      </FilterLink>{' '}
      <FilterLink
        onClick={() => dispatch(showActive({ filter: 'SHOW ACTIVE' }))}
      >
        Show Active
      </FilterLink>{' '}
      <FilterLink
        onClick={() => dispatch(showCompleted({ filter: 'SHOW COMPLETED' }))}
      >
        Show Completed
      </FilterLink>
    </div>
  );
}
