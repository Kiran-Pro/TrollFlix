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
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      {searchValue !== null && (
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
