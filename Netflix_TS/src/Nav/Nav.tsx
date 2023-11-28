import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeLink from "../HomeLink/HomeLink";
import avatar from "../assets/avatar.png";
import search from "../assets/search2.png";
import "./Nav.css";

function Nav() {
  const [show] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      navigate(`/search?query=${searchValue}`);
    }
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <HomeLink />
      <div className="alignSearch">
        <button className="searchButton" onClick={toggleSearchInput}>
          <img className="searchButtonIn" src={search} alt="search" />
        </button>
        {showSearchInput && (
          <input
            type="text"
            placeholder="Search"
            className="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        )}
        <img className="logo2" src={avatar} alt="avatar logo" />
        {showSearchInput && (
          <button className="submitSearchButton" onClick={handleSearch}>
            Search
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
