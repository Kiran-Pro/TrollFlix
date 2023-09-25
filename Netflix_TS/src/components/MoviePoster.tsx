import "./MoviePoster.css";
import { Movie } from "../types/movie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  movie: Movie;
  size: "default" | "large";
}

function MoviePoster({ movie, size }: Prop) {
  return (
    <img
      className={size === "large" ? "movie_poster_large" : "movie_poster"}
      src={`${baseUrl}${movie.poster_path}`}
      alt={movie.name}
    />
  );
}

export default MoviePoster;
