import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SearchResults from "../../components/SearchResults";
import { QueryContext } from "../../providers/QueryProvider";
import SearchBar from "./SearchBar";

const ResultsPage = (props) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  // const [query, setQuery] = useState(props.match.params.query);
  const [loading, setLoading] = useState(true);
  const { query, setQuery } = useContext(QueryContext);
//   useEffect(() => {
//     getResults(query);
//   }, [query]);
  const getResults = (query) => {
    Axios.get(`/api/search_streaks/?query=${query}`)
      .then((res) => {
        setResults(res.data);
        console.log("Results", res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <SearchBar getResults={getResults}/>
      <SearchResults results={results} query={query} />
    </>
  );
};
export default ResultsPage;