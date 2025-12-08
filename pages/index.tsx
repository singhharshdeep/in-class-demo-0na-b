import React, { useContext, useState } from "react";
import MovieCard, {
  FavoritesButton,
  MovieDetails,
  MovieRating,
  MovieRelease,
  MovieTitle,
  Poster,
} from "../components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";

export default function Home() {
  const { movies, favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  function searchMovies(searchTerm: string) {
    const moviesToKeep = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(moviesToKeep);
  }

  return (
    <div className="bg-gray-600">
      <input
        className="mt-4 p-4 text-white border-white border w-2xl"
        onChange={(event) => searchMovies(event.target.value)}
        placeholder="Search Movies"
      />
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie}>
              <Poster poster_path={movie.poster_path} title={movie.title} />
              <MovieDetails>
                <MovieTitle title={movie.title} />
                <MovieRating rating={movie.vote_average} />
                <MovieRelease release_date={movie.release_date} />
                <FavoritesButton
                  movie={movie}
                  addToFavorites={addToFavorites}
                  isFavorite={favoriteMovies.includes(movie)}
                  removeFromFavorites={removeFromFavorites}
                />
              </MovieDetails>
            </MovieCard>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-xl">No movies found</p>
      )}
    </div>
  );
}
