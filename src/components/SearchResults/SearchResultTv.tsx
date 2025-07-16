import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import dummy from "../../assets/dummy-avatar.png";
import Pagination from "./Pagination";
import { fetchSearchTvAsync } from "../../store/SearchTvSlice";
import "./SearchResultTv.css";

interface Props {
  searchValue: string;
}

function SearchResultTv({ searchValue }: Props) {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { error, loading, tv, pages } = useAppSelector(
    (state) => state.SearchTvSlice
  );

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchTvAsync({ searchValue, page }));
    }
  }, [dispatch, searchValue, page]);

  if (loading) return <div className="status-msg">Loading TV series...</div>;
  if (error) return <div className="status-msg error-msg">{error}</div>;
  if (tv.length === 0)
    return <div className="status-msg">No TV series found</div>;

  return (
    <div className="search-results-container">
      <div className="tv-grid">
        {tv.map((tvShow) => (
          <div key={tvShow.id} className="tv-card">
            <img
              src={
                tvShow.poster_path
                  ? `https://image.tmdb.org/t/p/w500${tvShow.poster_path}`
                  : dummy
              }
              alt={tvShow.name || tvShow.original_name}
              className="tv-img"
            />
            <h3 className="tv-title">{tvShow.name || tvShow.original_name}</h3>
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

export default SearchResultTv;
