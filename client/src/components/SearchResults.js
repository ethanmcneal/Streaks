import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardGroup, Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";


const SearchResults = () => {
  const { user } = useContext(AuthContext);
  const { query, setQuery, results } = useContext(QueryContext);

  const renderResults = () => {
    if (results.length > 0) {
      return results.map((r) => {
        return (
          // <div style={{ marginRight: 30 }}>
          <>
            <Card>
              <Link to={`streaks/${r.id}`}>
                <h2>Streak: {r.name}</h2>
              </Link>
              <h3>The challenge: {r.description}</h3>
              <h4>Reward: {r.reward}</h4>
              <h4>Punishment: {r.punishment}</h4>
              <h4>Status: {r.open ? 'open' : 'closed'}</h4>
              <h4>Created At: {r.created_at}</h4>
            {/* <ContributingProject key={r.id} project_id={r.id} /> */}
            {/* </div> */}
            </Card>
          </>
        );
      });
    } else {
      return <h3 style={{ marginTop: 40 }}>No Results</h3>;
    }
  };
  return (
    // <div>
    //   <Grid>
    //     <Grid.Row>
    //       <Grid.Column width={12}>
    //         <Flex>{renderResults()}</Flex>
    //       </Grid.Column>
    //       <Grid.Column width={4}></Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </div>
    
    <>
     <h1>Search Results:</h1>
      <CardGroup>
          {results && renderResults()}
      </CardGroup>
    </>
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

        