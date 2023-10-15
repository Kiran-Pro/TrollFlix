import "./Row.css";
import { Movie } from "../types/movie";
import MovieDetailsPoster from "../MovieDetails/MovieDetailsPoster";

interface Props {
  movie: Movie;
}

function RowMovie({ movie }: Props) {
  return (
    <div
      className="row_movie"
      style={{
        backgroundSize: "100% auto",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backdropFilter: "blur(8px)",
      }}
    >
      <br />
      <br />
      <div>
        <MovieDetailsPoster movie={movie} />
      </div>
      <div className="bg_movie">
        <h1 className="title">
          {movie.name || movie.original_name || movie.title}
        </h1>
        <i>
          <h4>~{movie.tagline}</h4>
        </i>
        <br />
        <div>
          <b>Release Date:</b> {movie.release_date || movie.first_air_date}{" "}
        </div>
        <br />
        <div>
          <b>Runtime:</b> {movie.runtime || movie.number_of_seasons}
        </div>
        <br />
        <div>
          <b>Overview :</b>
          <br /> <div>{movie.overview}</div>
        </div>
        <br />
        <div>
          <span className="imdb">IMDB</span> : {movie.vote_average}
        </div>
        <br />
        <div>
          <b>Status:</b> {movie.status}
        </div>
        <br />
        <div>
          <b>Budget:</b> {movie.budget}$
        </div>
        <br />
        <div>
          <b>Language:</b> {movie.original_language}
        </div>
        <br />
      </div>
    </div>
  );
}

export default RowMovie;
