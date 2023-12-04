import { useEffect, useState } from "react";
import dummy from "../../assets/dummy-avatar.png";
import { fetchSearchPersonAsync } from "../../store/SearchPersonSlice";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import Pagination from "./Pagination";

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

  if (loading) {
    return <div>Loading person details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (person.length === 0) {
    return <div>No person results found</div>;
  }

  return (
    <div>
      {person.map((cast) => (
        <div key={cast.id} className="Results-Con">
          <div>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                className="img-size"
              />
            ) : (
              <img src={dummy} alt="Placeholder" className="img-size" />
            )}
          </div>
          <div>
            <h3>{cast.name || cast.original_name}</h3>
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

export default SearchResultPerson;
