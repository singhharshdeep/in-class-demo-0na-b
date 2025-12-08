import { Movie, MovieResponse } from "@/types";
import { createContext, ReactNode, useState } from "react";

type MoviesContextData = {
  favoriteMovies: MovieResponse[];
  addToFavorites: (movie: MovieResponse) => void;
  removeFromFavorites: (movie: MovieResponse) => void;
};

export const MoviesContext = createContext<MoviesContextData>({
  favoriteMovies: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {}
});

type MoviesProviderProps = {
  children: ReactNode;
};

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieResponse[]>([]);

  function addToFavorites(movie: MovieResponse) {
    setFavoriteMovies([...favoriteMovies, movie]);
  }

  function removeFromFavorites(movie: MovieResponse) {
    setFavoriteMovies(
      favoriteMovies.filter((favoriteMovie) => favoriteMovie.imdbID !== movie.imdbID)
    );
  }

  return (
    <MoviesContext.Provider
      value={{
        favoriteMovies: favoriteMovies,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
