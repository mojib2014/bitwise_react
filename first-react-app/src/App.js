import { useState, useEffect } from 'react';
import MovieDetails from './components/movieDetails';
import Greeting from './components/Greeting';
import Movies from './components/Movies';
import Clock from './components/Clock';
import { getMoviesByName, getMovieById } from './utils';
import './App.css';
import Box from './components/Box';
import Form from './components/Form';
import Modal from './components/Modal';

const Message = (props) => (
  <div>
    {props.msg}, {props.name}
  </div>
);

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [searchTerm, setSearchTerm] = useState('Black Hawk');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  async function getMovies() {
    setIsLoading(true);
    try {
      const res = await getMoviesByName(searchTerm);
      const { Search } = await res.json();
      console.log(Search);
      setMovies(Search);
      setIsLoading(false);
    } catch (err) {
      console.log('errorrrrrrr', err.message);
      setIsLoading(false);
      setError(err.message);
    }
  }

  const handleGetMovieById = async (movieId) => {
    const res = await getMovieById(movieId);
    const movie = await res.json();
    setMovie(movie);
  };

  const handleSubmit = () => {
    if (searchTerm !== '') getMovies();
  };

  useEffect(() => {
    getMovies();
    document.querySelector('input').addEventListener('click', () => {});
    return () => {};
  }, [searchTerm]);

  return (
    <div className="App">
      {open && (
        <Modal>
          <MovieDetails movie={movie} />
        </Modal>
      )}
      <Form />
      <Box className="large" children="Box Large" />
      <Box className="medium">Box Medium</Box>
      <Box className="small">Box Small</Box>
      <Clock date={new Date().toLocaleTimeString()} />
      <Greeting />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Sorry something went wrong, {error}</h1>
      ) : (
        <Movies
          handleGetMovieById={handleGetMovieById}
          movies={movies}
          setSearchTerm={setSearchTerm}
          setOpen={setOpen}
        />
      )}
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
