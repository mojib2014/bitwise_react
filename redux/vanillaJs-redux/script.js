// predictable state container

// 1 store // redux store
// 2 action // { type: string }
// action
const actionCreator = () => {
  return {
    type: 'INCREMENT',
  };
};
// 3 reducer // function(state, action)=> state

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    // calling your reducer
    state = reducer(state, action);
    // notify all listerners that the state has changed
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return { getState, dispatch, subscribe };
};

const store = Redux.createStore(counter);

console.log(store.getState());
store.dispatch(actionCreator());
console.log(store.getState());
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());

function render() {
  document.getElementById('root').innerText = store.getState();
}

render();
const unsubs = store.subscribe(render);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });

unsubs();
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
