import React from "react";
import Navbar from "../components/Navbar"; // This gives us access to the Navbar component
import MovieCard from "../components/MovieCard";
import { Movie } from "@/types";

export default function Home() {
  // return React.createElement(
  //   "div",
  //   { id: "container" },
  //   React.createElement("p", null, "Week 2")
  // );

  const appName = "MovieCatalog";

  const movie: Movie = {
    title: "Forrest Gump",
    overview:
      "The presidencies of Kennedy and Johnson are shown through the eyes of an Alabama man with an IQ of 75.",
    poster_path:
      "https://originalvintagemovieposters.com/wp-content/uploads/2016/08/Forrest-Gump-5048.jpg",
    release_date: "1994-07-06",
    vote_average: 8.8,
  };

  return (
    <div>
      <Navbar name={appName} version={1} />
      <MovieCard movie={movie} />
    </div>
  );
}
