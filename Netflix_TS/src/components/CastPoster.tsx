import "./MoviePoster.css";
import { Cast } from "../types/cast";
import dummyAvatar from "../assets/dummy-avatar.png";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  cast: Cast;
}

function MoviePoster({ cast }: Prop) {
  const imgSrc = cast.profile_path
    ? `${baseUrl}${cast.profile_path}`
    : dummyAvatar;
  return <img className="cast_poster" src={imgSrc} alt={cast.name} />;
}

export default MoviePoster;
