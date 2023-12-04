import { useEffect, useState } from "react";
import { fetchSearchMovieAsync } from "../../store/SearchMovieSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import dummy from "../../assets/dummy-avatar.png";
import Pagination from "./Pagination";

interface Props {
  searchValue: string;
}

function SearchResultMovies({ searchValue }: Props) {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { error, loading, movies, pages } = useAppSelector(
    (state) => state.SearchMovieSlice
  );

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchMovieAsync({ searchValue, page }));
    }
  }, [dispatch, searchValue, page]);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (movies.length === 0) {
    return <div>No movie results found</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="Results-Con">
          <div>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-size"
              />
            ) : (
              <img src={dummy} alt="Placeholder" className="img-size" />
            )}
          </div>
          <div>
            <h3>{movie.title}</h3>
          </div>
        </div>
      ))}
      <Pagination
        page={page}
        onChange={(page) => setPage(page)}
        totalPages={pages}
      />
    </div>
  );
}

export default SearchResultMovies;
