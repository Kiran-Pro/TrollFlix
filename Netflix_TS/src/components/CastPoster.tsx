import "./MoviePoster.css";
import { Cast } from "../types/cast";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  cast: Cast;
}

function MoviePoster({ cast }: Prop) {
  return (
    <img
      className="movie_poster"
      src={`${baseUrl}${cast.profile_path}`}
      alt={cast.name}
    />
  );
}

export default MoviePoster;
