import MovieCard from './movieCard';

function Movies({ movies, setSearchTerm }) {
  console.log('our movies: ', movies);

  return (
    <>
      <input
        type="search"
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
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

export default Movies;
