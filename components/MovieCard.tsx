import { Movie } from "../types";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div
      style={{
        border: "1px solid white",
        width: 300,
        height: 400,
        marginTop: 16,
      }}
    >
      <img
        style={{
          height: 300,
          width: 300,
        }}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>{movie.title}</div>
      <div>{movie.release_date}</div>
      <div>Rating: {movie.vote_average}/10</div>
    </div>
  );
}
