import axios from "axios";
import React, { useEffect, useState } from "react";
export const QueryContext = React.createContext();
export const QueryConsumer = QueryContext.Consumer;
const QueryProvider = (props) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  // const [query, setQuery] = useState(props.match.params.query);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);
    useEffect(() => {
    getResults(query);
  }, [query]);
const getResults = (query) => {
  axios.get(`/api/search_streaks/?query=${query}`)
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
    <QueryContext.Provider
      value={{
        getResults:getResults,
        results:results,
        query:query,
        setQuery:setQuery,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};
export default QueryProvider;