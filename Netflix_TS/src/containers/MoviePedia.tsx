import "../Row/Row.css";
import RowMovie from "../Row/RowMovie";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

function MovieList({ movie }: Props) {
  return (
    <>
      <div>
        <RowMovie movie={movie} />
        <br />
      </div>
    </>
  );
}

export default MovieList;
