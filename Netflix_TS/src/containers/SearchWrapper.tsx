import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { fetchSearchMovieAsync } from "../store/SearchMovieSlice";
import { fetchSearchTvAsync } from "../store/SearchTvSlice";
import { fetchSearchPersonAsync } from "../store/SearchPersonSlice";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./SearchWrapper.css";
import dummy from "../assets/dummy-avatar.png";

function SearchWrapper() {
  const dispatch = useAppDispatch();

  const {
    error: movieError,
    loading: movieLoading,
    movies,
    pages: moviePages,
  } = useAppSelector((state) => state.SearchMovieSlice);

  const {
    error: tvError,
    loading: tvLoading,
    tv,
    pages: tvPages,
  } = useAppSelector((state) => state.SearchTvSlice);

  const {
    error: personError,
    loading: personLoading,
    person,
    pages: personPages,
  } = useAppSelector((state) => state.SearchPersonSlice);

  const [activeTab, setActiveTab] = useState("movies");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("query");

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchSearchMovieAsync({ searchValue, page }));
      dispatch(fetchSearchTvAsync({ searchValue, page }));
      dispatch(fetchSearchPersonAsync({ searchValue, page }));
    }
  }, [dispatch, searchValue, page]);

  const handleNextPage = () => {
    let totalPages = 0;

    if (activeTab === "movies") {
      totalPages = moviePages;
    } else if (activeTab === "tv") {
      totalPages = tvPages;
    } else if (activeTab === "person") {
      totalPages = personPages;
    }

    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderMovieResults = () => {
    if (movieLoading) {
      return <div>Loading movies...</div>;
    } else if (movieError) {
      return <div>{movieError}</div>;
    } else {
      return (
        <div>
          {movies && movies.length > 0 ? (
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
            </div>
          ) : (
            <div>No movie results found</div>
          )}
        </div>
      );
    }
  };

  const renderTvResults = () => {
    if (tvLoading) {
      return <div>Loading TV shows...</div>;
    } else if (tvError) {
      return <div>{tvError}</div>;
    } else {
      return (
        <div>
          {tv && tv.length > 0 ? (
            <div>
              {tv.map((show) => (
                <div key={show.id} className="Results-Con">
                  {show.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      alt={show.title}
                      className="img-size"
                    />
                  ) : (
                    <img src={dummy} alt="Placeholder" className="img-size" />
                  )}
                  <div>
                    <h3>{show.name}</h3>
                    <p>{show.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No TV show results found</div>
          )}
        </div>
      );
    }
  };

  const renderPersonResults = () => {
    if (personLoading) {
      return <div>Loading persons...</div>;
    } else if (personError) {
      return <div>{personError}</div>;
    } else {
      return (
        <div>
          {person ? (
            <div>
              {person.map((cast) => (
                <div key={cast.id} className="Results-Con">
                  {cast.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.name || cast.original_name}
                      className="img-size"
                    />
                  ) : (
                    <img src={dummy} alt="Placeholder" className="img-size" />
                  )}
                  <div>
                    <h3>{cast.name || cast.original_name}</h3>
                    <p>Popularity: {cast.popularity}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No person results found</div>
          )}
        </div>
      );
    }
  };

  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <div>
        <h2>Search Results for "{searchValue}"</h2>
        <br />
        <div>
          <button onClick={() => setActiveTab("movies")}>Movies</button>
          <button onClick={() => setActiveTab("tv")}>TV Shows</button>
          <button onClick={() => setActiveTab("person")}>Persons</button>
        </div>
        <br />
        <div>
          {activeTab === "movies" && renderMovieResults()}
          {activeTab === "tv" && renderTvResults()}
          {activeTab === "person" && renderPersonResults()}
        </div>
      </div>
      <br />
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous Page
        </button>{" "}
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default SearchWrapper;
