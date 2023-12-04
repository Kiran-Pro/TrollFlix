import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import dummy from "../../assets/dummy-avatar.png";
import Pagination from "./Pagination";
import { fetchSearchTvAsync } from "../../store/SearchTvSlice";

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

  if (loading) {
    return <div>Loading tv searies...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (tv.length === 0) {
    return <div>No tv series results found</div>;
  }

  return (
    <div>
      {tv.map((tvShow) => (
        <div key={tvShow.id} className="Results-Con">
          <div>
            {tvShow.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                alt={tvShow.title}
                className="img-size"
              />
            ) : (
              <img src={dummy} alt="Placeholder" className="img-size" />
            )}
          </div>
          <div>
            <h3>{tvShow.title || tvShow.original_name}</h3>
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

export default SearchResultTv;
