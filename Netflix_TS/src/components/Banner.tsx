import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";
import { API_KEY } from "../constants/api";

function Banner() {
  const [movie, setMovie]: any = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals, {
        params: {
          api_key: API_KEY,
          with_networks: 213,
        },
      });
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
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
