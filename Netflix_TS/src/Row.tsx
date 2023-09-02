import { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function MoviePopup({ movie, onClose }) {
    return (
      <div className="popup">
        <div className="popup_content">
          <h3>{movie?.title || movie?.name || movie?.original_name}</h3>
          <p>{movie?.overview}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  const closeMovieBox = () => {
    setSelectedMovie(null);
  };
  useEffect(() => {
    window.addEventListener("scroll", closeMovieBox);
    return () => {
      window.removeEventListener("scroll", closeMovieBox);
    };
  }, []);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={"row_posterLarge"}
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
        {/* {!selectedMovie && <div className="movie_box"></div>} */}

        {selectedMovie && (
          <div className="movie_box">
            <img
              className="movie_poster"
              src={`${baseUrl}${selectedMovie.poster_path}`}
              alt={selectedMovie.name}
            />
            <div className="movie_info">
              <h3>
                {selectedMovie.title ||
                  selectedMovie?.name ||
                  selectedMovie?.original_name}
              </h3>
              <br />
              <p>{selectedMovie.overview}</p>
              <br />
              <button
                className="banner_button"
                onClick={() => setSelectedMovie(null)}
              >
                Close
              </button>
              {"                        "}
              <span>
                <span className="imdb">IMDB</span> :{" "}
                {selectedMovie.vote_average}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Row;
