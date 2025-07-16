import { useEffect, useState } from "react";
import { fetchSearchMovieAsync } from "../../store/SearchMovieSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import dummy from "../../assets/dummy-avatar.png";
import Pagination from "./Pagination";
import "./SearchResultMovies.css";

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

  if (loading) return <div className="status-msg">Loading movies...</div>;
  if (error) return <div className="status-msg error-msg">{error}</div>;
  if (movies.length === 0)
    return <div className="status-msg">No movie results found</div>;

  return (
    <div className="search-results-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : dummy
              }
              alt={movie.title}
              className="movie-img"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>
      <div className="pagination-wrapper">
        <Pagination
          page={page}
          onChange={(page) => setPage(page)}
          totalPages={pages}
        />
      </div>
    </div>
  );
}

export default SearchResultMovies;
