import { MoviesContext } from "@/context/MoviesContext";
import { Movie } from "@/types";
import { API_KEY, BASE_URL } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function MovieDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [fetchedMovie, setFetchedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchMovie() {
      const jsonResponse = await axios.get(
        BASE_URL + "?i=" + id + "&apikey=" + API_KEY
      );
      if (jsonResponse.data.Response === "True") {
        setFetchedMovie(jsonResponse.data);
        document.title = jsonResponse.data.Title;
      }
    }

    fetchMovie();
  }, [id]);

  return fetchedMovie ? (
    <div className="flex mt-4">
      <img
        className="rounded-2xl"
        src={fetchedMovie.Poster}
      />
      <div className="flex flex-col ml-4">
        <h1 className="text-7xl mb-4">{fetchedMovie.Title}</h1>
        <p className="text-3xl">{fetchedMovie.Plot}</p>
        <p className="mt-4 text-3xl">Release Date: {fetchedMovie.Year}</p>
      </div>
    </div>
  ) : (
    <div className="text-7xl">Movie not found</div>
  );
}
