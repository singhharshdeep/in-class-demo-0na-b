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
      className="transition hover:scale-105 border border-white mt-4 w-[300px] h-[450px] rounded-2xl"
      // onClick={handleClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-2xl w-[300px] h-[300px]"
      />
      <div className="flex flex-col items-center text-xl">
        <div>{movie.title}</div>
        <div>{movie.release_date}</div>
        <div>Rating: {movie.vote_average}</div>
        {isLoggedIn && (
          <button
            className="hover:bg-gray-400 border border-white p-3 rounded-4xl"
            onClick={() => {
              isFavorite ? removeFromFavorites(movie) : addToFavorites(movie);
            }}
          >
            {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
          </button>
        )}
      </div>
    </div>
  );
}
