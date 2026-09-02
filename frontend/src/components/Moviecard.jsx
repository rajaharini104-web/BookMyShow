import { Link } from "react-router-dom";

function MovieCard({ id, title, image, genre, language }) {
  return (
    <Link to={`/movie/${id}`} className="movie-link">
      <div className="movie-card">
        <div className="poster-container">
          <img src={image} alt={title} />
          <div className="rating">⭐ 8.5/10</div>
        </div>

        <h3>{title}</h3>

        <p>{genre}</p>

        <small>{language}</small>
      </div>
    </Link>
  );
}

export default MovieCard;