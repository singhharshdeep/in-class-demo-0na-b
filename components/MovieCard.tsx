import { useContext } from "react";
import { Movie } from "../types";
import { AuthContext } from "@/context/AuthContext";

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
  // function handleClick() {
  //   alert(movie.overview);
  // }

  const { isLoggedIn } = useContext(AuthContext);

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
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{
          height: 300,
          width: 300,
        }}
      />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <div>Rating: {movie.vote_average}</div>
      {isLoggedIn &&
        <button
          style={{
            zIndex: 100,
          }}
          onClick={() => {
            isFavorite ? removeFromFavorites(movie) : addToFavorites(movie);
          }}
        >
          {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
        </button>
      }
    </div>
  );
}
