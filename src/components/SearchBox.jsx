import "../styles/components/SearchBox.scss";
import React from "react";

function SearchBox({ handleChange, hintText }) {
  return (
    <div className="SearchBox">
      <input
        onChange={handleChange}
        placeholder="Search users, repos, orgs"
        tabIndex={0}
      />
      <i className="fas fa-search" />
      <span className="search-hint">
        Currently showing results for `{hintText}`
      </span>
    </div>
  );
}

export default SearchBox;
