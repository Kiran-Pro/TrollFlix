import { useEffect, useState } from "react";
import dummy from "../../assets/dummy-avatar.png";
import { fetchSearchPersonAsync } from "../../store/SearchPersonSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import Pagination from "./Pagination";
import "./SearchResultPerson.css";

interface Props {
  searchValue: string;
}

function SearchResultPerson({ searchValue }: Props) {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { error, loading, person, pages } = useAppSelector(
    (state) => state.SearchPersonSlice
  );

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchPersonAsync({ searchValue, page }));
    }
  }, [dispatch, searchValue, page]);

  if (loading)
    return <div className="status-msg">Loading person details...</div>;
  if (error) return <div className="status-msg error-msg">{error}</div>;
  if (person.length === 0)
    return <div className="status-msg">No person results found</div>;

  return (
    <div className="search-results-container">
      <div className="person-grid">
        {person.map((cast) => (
          <div key={cast.id} className="person-card">
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : dummy
              }
              alt={cast.name || cast.original_name}
              className="person-img"
            />
            <h3 className="person-name">{cast.name || cast.original_name}</h3>
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

export default SearchResultPerson;
