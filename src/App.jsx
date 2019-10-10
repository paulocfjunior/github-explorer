import "./styles/components/App.scss";
import React, { useState } from "react";
import RepositorySearch from "./components/RepositorySearch";
import SearchBox from "./components/SearchBox";
import UserSearch from "./components/UserSearch";
import debounce from "./util/debounce";

function App() {
  const sampleSearch = "Github";
  const [query, setQuery] = useState(sampleSearch);

  function handleChange(e) {
    const terms = e.target.value || sampleSearch;
    debounce(() => {
      setQuery(terms);
    }, 200);
  }

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} hintText={query} />
      <div className="search-results">
        <UserSearch query={query} />
        <RepositorySearch query={query} />
      </div>
    </div>
  );
}

export default App;
