import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import SearchResultMovies from "../components/SearchResults/SearchResultMovies";
import SearchResultPerson from "../components/SearchResults/SearchResultPerson";
import SearchResultTv from "../components/SearchResults/SearchResultTv";
import { SearchTabValue } from "../types/search";
import "./SearchWrapper.css";

function SearchWrapper() {
  const [activeTab, setActiveTab] = useState<SearchTabValue>("movies");
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("query");

  return (
    <div className="search-wrapper">
      <Nav />
      {searchValue && (
        <div className="search-content">
          <h2 className="search-heading">
            Search Results for{" "}
            <span className="query-text">"{searchValue}"</span>
          </h2>

          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "movies" ? "active" : ""}`}
              onClick={() => setActiveTab("movies")}
            >
              Movies
            </button>
            <button
              className={`tab-btn ${activeTab === "tv" ? "active" : ""}`}
              onClick={() => setActiveTab("tv")}
            >
              TV Shows
            </button>
            <button
              className={`tab-btn ${activeTab === "person" ? "active" : ""}`}
              onClick={() => setActiveTab("person")}
            >
              Persons
            </button>
          </div>

          <div className="search-results">
            {activeTab === "movies" && (
              <SearchResultMovies searchValue={searchValue} />
            )}
            {activeTab === "tv" && <SearchResultTv searchValue={searchValue} />}
            {activeTab === "person" && (
              <SearchResultPerson searchValue={searchValue} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchWrapper;
