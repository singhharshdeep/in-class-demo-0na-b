import { Movie } from "@/types";
import { createContext, ReactNode, useState } from "react";

type MoviesContextData = {
  movies: Movie[];
  favoriteMovies: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
};

export const MoviesContext = createContext<MoviesContextData>({
  movies: [],
  favoriteMovies: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {}
});

type MoviesProviderProps = {
  children: ReactNode;
};

export function MoviesProvider({ children }: MoviesProviderProps) {
  const movies: Movie[] = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      overview:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      release_date: "1994-09-23",
      vote_average: 9.3,
    },
    {
      id: 2,
      title: "The Godfather",
      overview:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-24",
      vote_average: 9.2,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      overview:
        "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      release_date: "1994-10-14",
      vote_average: 8.9,
    },
    {
      id: 4,
      title: "The Dark Knight",
      overview:
        "When the menace known as the Joker wreaks havoc on Gotham, Batman must face one of the greatest psychological tests.",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-18",
      vote_average: 9.0,
    },
    {
      id: 5,
      title: "Forrest Gump",
      overview:
        "The presidencies of Kennedy and Johnson are shown through the eyes of an Alabama man with an IQ of 75.",
      poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      release_date: "1994-07-06",
      vote_average: 8.8,
    },
    {
      id: 6,
      title: "Inception",
      overview:
        "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
      poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      release_date: "2010-07-16",
      vote_average: 8.8,
    },
  ];
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  function addToFavorites(movie: Movie) {
    setFavoriteMovies([...favoriteMovies, movie]);
  }

  function removeFromFavorites(movie: Movie) {
    setFavoriteMovies(
      favoriteMovies.filter((favoriteMovie) => favoriteMovie.id !== movie.id)
    );
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        favoriteMovies: favoriteMovies,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
