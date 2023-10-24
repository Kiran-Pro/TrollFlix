import "../components/MoviePoster.css";
import { ICastDetails } from "../types/castDetails";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  castDetails: ICastDetails;
}

function MovieDetailsPoster({ castDetails }: Prop) {
  return (
    <img
      className="movie_details_poster"
      src={`${baseUrl}${castDetails.profile_path}`}
      alt={castDetails.name}
    />
  );
}

export default MovieDetailsPoster;
