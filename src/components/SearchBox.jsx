import "../styles/components/SearchBox.scss";
import React from "react";

function SearchBox({ handleChange }) {
  return (
    <div className="SearchBox">
      <input
        onChange={handleChange}
        placeholder="Search for users, repos, orgs..."
        tabIndex={0}
      />
      <i className="fas fa-search" />
    </div>
  );
}

export default SearchBox;
