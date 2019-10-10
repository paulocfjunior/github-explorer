import "./styles/components/App.scss";
import React, { useState } from "react";

import { useSearchPageToggler } from "./util/animation";
import PageSwitcher from "./components/PageSwitcher";
import RepositorySearch from "./components/RepositorySearch";
import SearchBox from "./components/SearchBox";
import UserSearch from "./components/UserSearch";
import debounce from "./util/debounce";

function App() {
  const sampleSearch = "Github";
  const [query, setQuery] = useState(sampleSearch);
  const { isVisible, scrollAndToggle } = useSearchPageToggler();

  function handleChange(e) {
    const terms = e.target.value || sampleSearch;
    debounce(() => {
      setQuery(terms);
    }, 500);
  }

  return (
    <div className="App">
      <SearchBox handleChange={handleChange} hintText={query} />
      <div className="search-results">
        <UserSearch query={query} isVisible={isVisible.users} />
        <RepositorySearch query={query} isVisible={isVisible.repos} />
      </div>
      <div className="mobile-navigation">
        <PageSwitcher
          label="Users"
          icon="fas fa-user-friends"
          active={isVisible.users}
          handleClick={() => scrollAndToggle({ type: "SHOW_USERS" })}
        />
        <PageSwitcher
          label="Repos"
          icon="fas fa-folder"
          active={isVisible.repos}
          handleClick={() => scrollAndToggle({ type: "SHOW_REPOS" })}
        />
      </div>
    </div>
  );
}

export default App;
