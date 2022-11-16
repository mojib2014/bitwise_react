export function getMoviesByName(name) {
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`
  );
}

export function getMoviesById() {
  return fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=tt0100669`
  );
}
