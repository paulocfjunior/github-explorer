import "./styles/components/App.scss";
import React, { useState } from "react";
import RepositorySearch from "./components/RepositorySearch";
import SearchBox from "./components/SearchBox";
import UserSearch from "./components/UserSearch";
import debounce from "./util/debounce";

function App() {
  const [query, setQuery] = useState("github");

  function handleChange(e) {
    const terms = e.target.value;
    debounce(() => setQuery(terms), 200);
  }

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} />
      <div className="search-results">
        <UserSearch query={query} />
        <RepositorySearch query={query} />
      </div>
    </div>
  );
}

export default App;
