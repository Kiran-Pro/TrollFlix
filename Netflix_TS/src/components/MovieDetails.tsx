import MoviePoster from "./MoviePoster";
import "./MovieDetails.css";
import { Movie } from "../types/movie";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: Movie;
  onClose: VoidFunction;
}

function getNavigationUrlByMovie(movie: Movie) {
  if (movie.mediaType === "tv-series") {
    return `/tv-series/cast/${movie.id}`;
  } else {
    return `/movie/cast/${movie.id}`;
  }
}

function MovieDetails({ movie, onClose }: Props) {
  const navigate = useNavigate();
  return (
    <div className="movie_box">
      <MoviePoster movie={movie} size="default" />
      <div className="movie_info">
        <h3>{movie.title || movie?.name || movie?.original_name}</h3>
        <br />
        <p>{movie.overview}</p>
        <br />
        <button className="banner_button" onClick={onClose}>
          Close
        </button>
        {"                        "}
        <span>
          <span className="imdb">IMDB</span> : {movie.vote_average}
        </span>
        {"                                                      "}
        <button
          onClick={() => {
            const url = getNavigationUrlByMovie(movie);
            navigate(url);
          }}
          className="banner_button"
        >
          Cast
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
