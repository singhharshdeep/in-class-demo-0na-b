import { Movie } from "../types";

type MovieCardProps = {
  movie: Movie;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  isFavorite?: boolean;
};

export default function MovieCard({
  movie,
  addToFavorites,
  removeFromFavorites,
  isFavorite = false,
}: MovieCardProps) {
  function handleClick() {
    alert(movie.overview);
  }

  return (
    <div
      style={{
        border: "1px solid white",
        width: 300,
        height: 400,
        marginTop: 16,
      }}
      // onClick={handleClick}
    >
      <img
        style={{
          height: 300,
          width: 300,
        }}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <div>Rating: {movie.vote_average}/10</div>
      <button
        onClick={() =>
          isFavorite ? removeFromFavorites(movie) : addToFavorites(movie)
        }
      >
        {isFavorite ? "Remove From Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
