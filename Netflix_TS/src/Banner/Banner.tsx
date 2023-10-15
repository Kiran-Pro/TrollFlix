import { useEffect, useMemo, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";
import { API_KEY } from "../constants/api";
import { Movie } from "../types/movie";

function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals, {
          params: {
            api_key: API_KEY,
            with_networks: 213,
          },
        });

        const results = request.data.results;

        if (results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const headerStyles = useMemo(() => {
    if (movie === null || !movie.backdrop_path) {
      return {};
    }

    return {
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    };
  }, [movie]);

  if (error) {
    return (
      <header className="banner">
        <div className="banner_contents">
          <h1 className="banner_title">Oops! Something went wrong.</h1>
        </div>
        <div className="banner-fadebottom"></div>
      </header>
    );
  }

  if (movie === null) {
    return null;
  }

  return (
    <header className="banner" style={headerStyles}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        {movie.overview !== undefined && (
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        )}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      </div>
      <div className="banner-fadebottom"></div>
    </header>
  );
}

export default Banner;
