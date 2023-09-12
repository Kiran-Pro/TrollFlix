import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { useDispatch } from "react-redux";
import { fetchNetlixOriginsAsync } from "./store/netflixOriginsSlice";
import { AppDispatch } from "./store";
import NetflixOriginals from "./containers/NetflixOriginals";
import { Movie } from "./types/movie";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const closeMovieBox = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeMovieBox);
    return () => {
      window.removeEventListener("scroll", closeMovieBox);
    };
  }, []);

  return (
    <div className="app">
      <Nav />
      <Banner />

      <NetflixOriginals onSelect={(movie) => setSelectedMovie(movie)} />
      {/*<Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        onSelect={(movie) => setSelectedMovie(movie)}
      />
      <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchRomanticMovies}
        onSelect={(movie) => setSelectedMovie(movie)}
  />*/}

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
