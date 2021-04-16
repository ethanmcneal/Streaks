import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QueryContext} from "../providers/QueryProvider";
import { Search } from "semantic-ui-react";

const SearchBar = () => {


  const {getResults} = useContext(QueryContext)

  const [query, setQuery] = useState(null);
  let history = useHistory();
  const handleChange = (e) => {         //<-- searchbar string before submit
    let keyword = e.target.value;
    console.log(keyword)
    setQuery(keyword);                  //<-- query => keyword
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(query)                   //<-- 
    history.push(`/results`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search
          type="text"
          placeholder="Search streaks"
          onSearchChange={handleChange}
          value={query}
        />
        
      </form>
    </>
  );
};
export default SearchBar;