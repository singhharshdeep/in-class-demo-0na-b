import { MoviesContext } from "@/context/MoviesContext";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function MovieDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { movies } = useContext(MoviesContext);

  const foundMovie = movies.find((movie) => movie.id.toString() === id);

  return foundMovie ? (
    <div className="flex mt-4">
      <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/w300${foundMovie.poster_path}`} />
      <div className="flex flex-col ml-4">
        <h1 className="text-7xl mb-4">{foundMovie.title}</h1>
        <p className="text-3xl">{foundMovie.overview}</p>
        <p className="mt-4 text-3xl">Release Date: {foundMovie.release_date}</p>
        <p className="mt-4 text-3xl">Rating: {foundMovie.vote_average}/10</p>
      </div>
    </div>
  ) : (
    <div className="text-7xl">Movie not found</div>
  );
}
