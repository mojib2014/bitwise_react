import './movieCard.css';
import { Button } from '../common/button';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

/**
  name: props 
  {}
  props { title: 'Black hawk', type: '', posterUrl: '', name: 'Mojib'}
 */

export default function MovieCard({
  title,
  type,
  posterUrl,
  movieId,
  handleGetMovieById,
  setOpen,
}) {
  const handleClick = () => {
    handleGetMovieById(movieId);
    setOpen(true);
  };
  const user = useContext(UserContext);
  return (
    <div className="movie-card col">
      <h1>{user.name}</h1>
      <img src={posterUrl} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
      </div>

      <Button
        primary={true}
        onClick={handleClick}
        className="btn btn-danger fs-1"
      >
        Movie
      </Button>
    </div>
  );
}

MovieCard.defaultProps = {
  title: '',
};
