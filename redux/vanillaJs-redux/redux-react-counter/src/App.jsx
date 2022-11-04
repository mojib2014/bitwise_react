import './App.css';
import Counter from './features/counter/Counter';
import Pokemon from './features/pokemon/Pokemon';
import Todos from './features/todos/Todos';

function App() {
  return (
    <div className="App">
      <Counter />
      <Todos />
      <Pokemon />
    </div>
  );
}

export default App;
