import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSelector, increment, decrement } from './counterSlice';

export default function Counter() {
  const value = useSelector(counterSelector);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
