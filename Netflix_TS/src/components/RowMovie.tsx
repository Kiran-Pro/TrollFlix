import "./Row.css";
import { Movie } from "../types/movie";
import MovieDetailsPoster from "./MovieDetailsPoster";

interface Props {
  movie: Movie;
}

function RowMovie({ movie }: Props) {
  return (
    <div className="row_movie">
      <br />
      <br />
      <div>
        <MovieDetailsPoster movie={movie} />
      </div>
      <div>
        <h1 className="title">
          {movie.name || movie.original_name || movie.title}
        </h1>
        <i>
          <h4>{movie.tagline}</h4>
        </i>
        <br />
        <span>
          {" "}
          Release Date: {movie.release_date || movie.first_air_date}{" "}
        </span>
        <br />
        <br />
        <span>Runtime: {movie.runtime || movie.number_of_seasons}</span>
        <br />
        <br />
        <span>
          Overview :<br />
          <br /> <span>{movie.overview}</span>
        </span>
        <br />
        <br />
        <span>IMDB: {movie.vote_average}</span>
        <br />
        <br />
        <span>Status: {movie.status}</span>
        <br />
        <br />
        <span>Budget: {movie.budget}$</span>
      </div>
    </div>
  );
}

export default RowMovie;
