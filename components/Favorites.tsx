import MovieCard, { FavoritesButton, MovieDetails, MovieRating, MovieRelease, MovieTitle, Poster } from "@/components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";
import React, { useContext } from "react";

const Favorites = () => {
  const { favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);

  return (
    <>
      <div className="text-2xl mt-4">Favorites</div>

      {favoriteMovies.length > 0 ? (
        <div className="grid grid-cols-3">
          {favoriteMovies.map((movie) => (
            <MovieCard movie={movie}>
              <Poster poster_path={movie.poster_path} title={movie.title} />
              <MovieDetails>
                <MovieTitle title={movie.title} />
                <MovieRating rating={movie.vote_average} />
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
        <p className="mt-4">No favorites found</p>
      )}
    </>
  );
};

export default Favorites;
