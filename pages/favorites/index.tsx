import MovieCard from "@/components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";
import React, { useContext } from "react";

const Favorites = () => {
  const { favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);

  return (
    <>
      <div className="text-2xl mt-4">Favorites</div>

      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <MovieCard
            movie={movie}
            addToFavorites={addToFavorites}
            isFavorite={true}
            removeFromFavorites={removeFromFavorites}
          />
        ))
      ) : (
        <p className="mt-4">No favorites found</p>
      )}
    </>
  );
};

export default Favorites;
