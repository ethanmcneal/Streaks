import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";
// import ContributingProject from "../pages/profile/ContributingProject";
import { AuthContext } from "../providers/AuthProvider";
// import {
//   ResultsCard,
//   ResultsContent,
//   ResultsDescription,
//   ResultsImage,
//   ResultsTitle,
//   SearchCreateButton,
// } from "../styles/LandingPageStyle";
// import ProjectFormModal from "./ProjectFormModal";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";
const SearchResults = ({ results }) => {
  const { user } = useContext(AuthContext);
  const { query, setQuery } = useContext(QueryContext);
//   const renderProjectFormModal = () => {
//     if (user) {
//       return (
//         <div style={spacingStyle}>
//           <h3>{query}</h3>
//           <ProjectFormModal query={query} />
//         </div>
//       );
//     } else {
//       return (
//         <div style={spacingStyle}>
//           <h3>{query}</h3>
//           <Link to={"/register"}>
//             <SearchCreateButton color="green">
//               Create New Project
//             </SearchCreateButton>
//           </Link>
//         </div>
//       );
//     }
//   };
  const renderResults = () => {
    if (results) {
      return results?.map((r) => {
        return (
          <div style={{ marginRight: 30 }}>
              <h1>here</h1>
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
            {/* {renderProjectFormModal()} */}
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