import "./MoviePoster.css";
import { Movie } from "../types/movie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  movie: Movie;
}

function MovieDetailsPoster({ movie }: Prop) {
  return (
    <img
      className="movie_details_poster"
      src={`${baseUrl}${movie.poster_path}`}
      alt={movie.name}
    />
  );
}

export default MovieDetailsPoster;
