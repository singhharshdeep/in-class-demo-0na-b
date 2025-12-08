import { ReactNode, useContext } from "react";
import { MovieResponse } from "../types";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

type MovieCardProps = {
  movie: MovieResponse;
  children: ReactNode;
};

export function Poster({
  poster_path,
  title,
}: {
  poster_path: string;
  title: string;
}) {
  return (
    <img
      src={poster_path}
      alt={title}
      className="rounded-t-2xl w-[300px] h-[300px]"
    />
  );
}

export function MovieTitle({ title }: { title: string }) {
  return <div>{title}</div>;
}

export function MovieRelease({ release_date }: { release_date: string }) {
  return <div>{release_date}</div>;
}

export function MovieRating({ rating }: { rating: string }) {
  return <div>Rating: {rating}</div>;
}

export function FavoritesButton({
  movie,
  isFavorite,
  removeFromFavorites,
  addToFavorites,
}: {
  movie: MovieResponse;
  isFavorite: boolean;
  removeFromFavorites: (movie: MovieResponse) => void;
  addToFavorites: (movie: MovieResponse) => void;
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

export function MovieDetails({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center text-xl">{children}</div>;
}

export default function MovieCard({ movie, children }: MovieCardProps) {
  const router = useRouter();
  function handleClick() {
    router.push(`/movies/${movie.imdbID}`);
  }
  return (
    <div
      className="transition hover:scale-105 border border-white mt-4 w-[300px] h-[450px] rounded-2xl"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
