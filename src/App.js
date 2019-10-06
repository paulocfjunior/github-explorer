import React, {useState} from 'react';
import {Query} from 'react-apollo';
import UserSearch from './graphql/queries/UserSearch';
import debounce from "./util/debounce";

function App() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    const terms = e.target.value;
    debounce(() => {
      setQuery(terms);
    }, 200);
  }

  return (
    <div className="App">
      <input onChange={handleChange} placeholder="Search" />
      <Query query={UserSearch} variables={{query, first: 10}}>
        {(({data, loading}) => (
          loading ? "Loading" : <pre>{JSON.stringify(data, 2, 2)}</pre>
        ))}
      </Query>
    </div>
  );
}

export default App;
