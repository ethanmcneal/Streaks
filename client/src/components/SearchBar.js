import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QueryContext} from "../providers/QueryProvider";
import { Search } from "semantic-ui-react";

const SearchBar = () => {


  const {results, setResults, getResults} = useContext(QueryContext)
  const [query, setQuery] = useState(null);
  let history = useHistory();
  const handleChange = (e) => {         //<-- searchbar string before submit
    let keyword = e.target.value;
    setQuery(keyword);                  //<-- query => keyword
    getResults(keyword) 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(query);    
    setResults("");               
    history.push(`/results`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search"
          onSearchChange={handleChange}
          value={query}
          showNoResults={false}
        />
        
      </form>
    </>
  );
};
export default SearchBar;