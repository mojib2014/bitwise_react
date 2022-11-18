import MovieCard from './movieCard';

function Movies({ movies, setSearchTerm, handleGetMovieById, setOpen }) {
  console.log('our movies: ', movies);

  return (
    <>
      <input type="search" name="searchTerm" onChange={setSearchTerm} />
      <div className="movies row">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            type={movie.Type}
            posterUrl={movie.Poster}
            movieId={movie.imdbID}
            handleGetMovieById={handleGetMovieById}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
}

export default Movies;
