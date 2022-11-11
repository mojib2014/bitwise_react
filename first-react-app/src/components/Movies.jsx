import React, { useState, useEffect } from 'react';
import { getMoviesByName } from '../utils';
import MovieCard from './movieCard';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);
  const [movieName, setMovieName] = useState('Black Hawk');

  async function getMovies() {
    try {
      const res = await getMoviesByName(movieName);
      const { Search } = await res.json();
      console.log(Search);
      setMovies(Search);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = () => {
    if (movieName !== '') getMovies();
  };

  useEffect(() => {
    getMovies();
  }, [movieName]);

  console.log('our movies: ', movies);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>+</button>
      <input
        type="search"
        name="movieName"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <div className="movies row">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
          />
        ))}
      </div>
    </>
  );
}
