export type MovieResponse = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MovieSearchResponse = {
  Search: MovieResponse[];
};

export type Rating = {
  Source: string;
  Value: string;
};

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
};

export type User = {
  email: string;
  name: string;
  password: string;
};
