import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";
const SearchResults = ({ results }) => {
  const { user } = useContext(AuthContext);
  const { query, setQuery } = useContext(QueryContext);
  const renderResults = () => {
    if (results) {
      return results?.map((r) => {
        return (
          <div style={{ marginRight: 30 }}>
              <h1>here</h1>
          </div>
        );
      });
    } else {
      return <h3 style={{ marginTop: 40 }}>No Results</h3>;
    }
  };
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Flex>{renderResults()}</Flex>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
const spacingStyle = {
  marginTop: "20px",
};
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default SearchResults;