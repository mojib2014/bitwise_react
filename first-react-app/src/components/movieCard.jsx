import './movieCard.css';

/**
  name: props 
  {}
  props { title: 'Black hawk', type: '', posterUrl: '', name: 'Mojib'}
 */

export default function MovieCard({ title, type, posterUrl }) {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
      </div>

      <button>Movie</button>
    </div>
  );
}

MovieCard.defaultProps = {
  title: '',
};
