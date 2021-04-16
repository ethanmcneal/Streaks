import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { QueryContext} from "../providers/QueryProvider";
import { Search } from "semantic-ui-react";
const SearchBar = () => {

  const [loading, setLoading] = useState(true);
  const {getResults} = useContext(QueryContext)
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  let history = useHistory();
  const handleChange = (e) => {
    let keyword = e.target.value;
    console.log(keyword)
    setQuery(keyword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(query)
    history.push(`/results`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search streaks"
          onSearchChange={  handleChange}
          value={query}
        />
        
      </form>
    </>
  );
};
export default SearchBar;