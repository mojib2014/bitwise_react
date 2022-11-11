import MovieDetails from './components/movieDetails';
import Greeting from './components/Greeting';
import Movies from './components/Movies';
import Clock from './components/Clock';
import './App.css';

const Message = (props) => (
  <div>
    {props.msg}, {props.name}
  </div>
);

function App() {
  return (
    <div className="App">
      <Clock />
      <Greeting />
      <Movies />
      <MovieDetails />

      <Message msg="Hello John!" />
      <Message msg="Hello Smith!" />
    </div>
  );
}

// const PropsTypes = {
//   string(props, propName, componentName) {
//     if (typeof props[propName] !== 'string') {
//       return new Error(
//         `Hey ${propName} must be a string you passed ${typeof props.msg} in component ${componentName}.`
//       );
//     }
//   },
//   number(props, propName, componentName) {
//     if (typeof props[propName] !== 'number')
//       return new Error(
//         `Hey expecting number you passed ${typeof props[propName]}`
//       );
//   },
// };

// Message.propTypes = {
//   msg: PropsTypes.string,
//   name: PropsTypes.number,
// };

export default App;
