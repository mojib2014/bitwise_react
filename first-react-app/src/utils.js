import {} from './services/movies';

export async function getMoviesByName() {
  const res = await fetch(
    'http://www.omdbapi.com/?apikey=9f69d263&t=spiderman'
  );
  const movies = await res.json();
  console.log(movies);
}
// getMoviesByName();

export async function getMoviesById() {
  const res = await fetch(
    'http://www.omdbapi.com/?apikey=9f69d263&i=tt0100669'
  );
  const movies = await res.json();
  console.log(movies);
}

// getMoviesById();
