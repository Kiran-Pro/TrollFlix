import "./App.css";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import { useCallback, useEffect, useState } from "react";
import MovieDetails from "./MovieDetails/MovieDetails";
import NetflixOriginals from "./containers/NetflixOriginals";
import { Movie } from "./types/movie";
import NetflixTrending from "./containers/NetflixTrending";
import NetflixToprated from "./containers/NetflixToprated";
import NetflixAction from "./containers/NetflixAction";
import NetflixComedy from "./containers/NetflixComedy";
import NetflixHorror from "./containers/NetflixHorror";
import NetflixRomance from "./containers/NetflixRomance";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const closeMovieBox = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", closeMovieBox);
    return () => {
      window.removeEventListener("scroll", closeMovieBox);
    };
  }, [closeMovieBox]);

  return (
    <div className="app">
      <Nav />
      <Banner />

      <NetflixOriginals onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixTrending onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixToprated onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixAction onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixComedy onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixHorror onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixRomance onSelect={(movie) => setSelectedMovie(movie)} />

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={closeMovieBox} />
      )}
    </div>
  );
}

export default App;
