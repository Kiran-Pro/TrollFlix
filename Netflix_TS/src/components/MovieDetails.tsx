import React from "react";
import MoviePoster from "./MoviePoster";
import "./MovieDetails.css";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
  onClose: VoidFunction;
}

function MovieDetails({ movie, onClose }: Props) {
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
      </div>
    </div>
  );
}

export default MovieDetails;
