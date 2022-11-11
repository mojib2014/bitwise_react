import React, { useState, useEffect } from 'react';
import MovieCard from './movieCard';

export default function MovieDetails() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="movie-details row">
      <div className="col">{<MovieCard />}</div>
      <div className="col"></div>
    </div>
  );
}
