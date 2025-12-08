import React, { useContext, useState } from "react";
import MovieCard, {
  FavoritesButton,
  MovieDetails,
  MovieRelease,
  MovieTitle,
  Poster,
} from "../components/MovieCard";
import { MoviesContext } from "@/context/MoviesContext";
import { API_KEY, BASE_URL } from "@/utils/constants";
import axios from 'axios';
import { MovieResponse } from "@/types";

export default function Home() {
  const { favoriteMovies, addToFavorites, removeFromFavorites } =
    useContext(MoviesContext);

  const [filteredMovies, setFilteredMovies] = useState<MovieResponse[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function searchMovies(searchTerm: string) {
    if (searchTerm.length > 3) {
      setIsLoading(true);
      // Search the API
      try {
        const jsonResponse = await axios.get(BASE_URL + "?s=" + searchTerm + "&apikey=" + API_KEY);
        if (jsonResponse.data.Response === "True") {
          // Get the search results
          setFilteredMovies(jsonResponse.data.Search);
          setErrorMessage(null);
        } else {
          // Show an error
          setErrorMessage("Couldn't find the movie");
          setFilteredMovies([]);
        }  
      } catch (e) {
        setErrorMessage("Couldn't find the movie");
        setFilteredMovies([]);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="bg-gray-600">
      <input
        className="mt-4 p-4 text-white border-white border w-2xl"
        onChange={(event) => searchMovies(event.target.value)}
        placeholder="Search Movies"
      />
      {isLoading && <p>Searching for movies...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-3">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie}>
              <Poster poster_path={movie.Poster} title={movie.Title} />
              <MovieDetails>
                <MovieTitle title={movie.Title} />
                {/* <MovieRating rating={movie.vote_average} /> */}
                <MovieRelease release_date={movie.Year} />
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
        <p className="flex justify-center mt-4 text-xl text-gray-400">Search for a movie to get started</p>
      )}
    </div>
  );
}
