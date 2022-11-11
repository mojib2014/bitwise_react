import {} from './services/movies';

export function getMoviesByName(name) {
  return fetch(`http://www.omdbapi.com/?apikey=9f69d263&s=${name}`);
}

export function getMoviesById() {
  return fetch('http://www.omdbapi.com/?apikey=9f69d263&i=tt0100669');
}
