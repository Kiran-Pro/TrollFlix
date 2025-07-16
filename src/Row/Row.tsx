import "./Row.css";
import MoviePoster from "../MovieDetails/MoviePoster";
import { Movie } from "../types/movie";

interface Props {
  title: string;
  movies: Movie[];
  loading: boolean;
  error?: string;
  onSelect: (movie: Movie) => void;
}

function Row({ title, movies, loading, onSelect, error }: Props) {
  return (
    <div className="row">
      <h2>{title}</h2>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="row_posters">
          {movies.map((movie) => (
            <div key={movie.id} onClick={() => onSelect(movie)}>
              <MoviePoster movie={movie} size="large" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Row;
