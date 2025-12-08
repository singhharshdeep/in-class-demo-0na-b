import { useContext } from "react";
import { Movie } from "../types";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

type MovieCardProps = {
  movie: Movie;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
  isFavorite?: boolean;
};

export function Poster({ poster_path, title }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      alt={title}
      className="rounded-t-2xl w-[300px] h-[300px]"
    />
  );
}

export function MovieTitle({ title }) {
  return <div>{title}</div>;
}

export function MovieRelease({ release_date }) {
  return <div>{release_date}</div>;
}

export function MovieRating({ rating }) {
  return <div>Rating: {rating}</div>;
}

export function FavoritesButton({
  movie,
  isFavorite,
  removeFromFavorites,
  addToFavorites,
}) {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <button
      className="hover:bg-gray-400 border border-white p-3 rounded-4xl"
      onClick={(e) => {
        e.stopPropagation();
        isFavorite ? removeFromFavorites(movie) : addToFavorites(movie);
      }}
    >
      {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
    </button>
  ) : null;
}

export function MovieDetails({ children }) {
  return <div className="flex flex-col items-center text-xl">{children}</div>;
}

export default function MovieCard({ movie, children }: MovieCardProps) {
  const router = useRouter();
  function handleClick() {
    router.push(`/movies/${movie.id}`);
  }
  return (
    <div
      className="transition hover:scale-105 border border-white mt-4 w-[300px] h-[450px] rounded-2xl"
      onClick={handleClick}
    >
<<<<<<< Updated upstream
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="rounded-t-2xl w-[300px] h-[300px]"
      />
      <div className="flex flex-col items-center text-xl">
        <div>{movie.title}</div>
        <div>{movie.release_date}</div>
        <div>Rating: {movie.vote_average}</div>
        {isLoggedIn ? (
          <button
            className="hover:bg-gray-400 border border-white p-3 rounded-4xl"
            onClick={(e) => {
              e.stopPropagation();
              isFavorite ? removeFromFavorites(movie) : addToFavorites(movie);
            }}
          >
            {isFavorite ? "Remove From Favorites" : "Add To Favorite"}
          </button>
        ) : null}
      </div>
=======
      {children}
>>>>>>> Stashed changes
    </div>
  );
}
