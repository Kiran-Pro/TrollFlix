import "../components/MoviePoster.css";
import { ICastCredits } from "../types/CastCredits";
import "./Credits.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

interface Prop {
  castCredits: ICastCredits;
}

function CastCreditPoster({ castCredits }: Prop) {
  if (!castCredits.poster_path) {
    return null;
  }

  return (
    <img
      className="row2_movie"
      src={`${baseUrl}${castCredits.poster_path}`}
      alt={castCredits.title}
    />
  );
}

export default CastCreditPoster;
