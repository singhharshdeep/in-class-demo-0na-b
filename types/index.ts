export type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export type User = {
    email: string;
    name: string;
    password: string;
}