import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
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
      <NetflixTrending onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixToprated onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixAction onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixComedy onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixHorror onSelect={(movie) => setSelectedMovie(movie)} />
      <NetflixRomance onSelect={(movie) => setSelectedMovie(movie)} />
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
