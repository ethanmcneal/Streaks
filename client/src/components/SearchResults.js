import React, { useContext} from "react";
import {Grid} from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";
const SearchResults = () => {
  const { user } = useContext(AuthContext);
  const {  results } = useContext(QueryContext);
  const renderResults = () => {
    if (results.length > 0) {
      return results.map((r) => {
        return (
          <div style={{ marginRight: 30 }}>
              <h1>{r.name}</h1>
              <h1>{r.punishment}</h1>
            {/* <ContributingProject key={r.id} project_id={r.id} /> */}
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