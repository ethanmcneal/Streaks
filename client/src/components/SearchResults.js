import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Card, CardGroup, Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";
import { QueryContext } from "../providers/QueryProvider";
import trophy from '../images/trophyIcon.png'
import skull from '../images/risk-skull.png' 


const SearchResults = () => {
  const { user } = useContext(AuthContext);
  const { query, setQuery, results } = useContext(QueryContext);
  const [userStreakId, setUserStreakId] = useState(null);

  useEffect(() => {
    getStreaks()
  },[])

  const getStreaks = async() => {
    try{
      // debugger
      let res = await axios.get(`/api/users_streaks/${user.id}`)
      // console.log(res.data)
      setUserStreakId([...new Set(res.data.map(us => us.streak_id))])
    } catch(err){
      alert("Error in axios call in getStreaks in SearchResults")
    }
  }

  const addToUserStreaks = async(id) => {
    try {
        let resh = await axios.post(`/api/user_streaks/`, {status: 'upcoming', user_id: user.id, streak_id: id})
        console.log(resh)
        // history.push('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

  const renderResults = () => {
    if (results.length > 0) {
      console.log(results);
      return results.map((r) => {
        const prettyDate = new Date(r.created_at)
        return (
          <>
          <div className='streak-card'>
            <div className='streak-card-upper'>
                <Link className='link' to={`streaks/${r.id}`}>
                  <h3 style={{margin: '1em 0 0 1em'}}>{r.name}</h3>
                </Link>
                  <br/>
                <p style={{color: 'rgb(141 129 140)', textAlign: 'left', margin: '0 0 1em 1em'}}>{r.description}</p>
                {/* <h3>The challenge: {r.description}</h3> */}

                <div style={{display: 'flex', margin: '1em'}}>
                <img src={trophy} style={{width: '25px', height: '25px'}}/>
                <p>{r.reward}</p>
                </div>

                <div style={{display: 'flex', margin: '1em'}}>               
                <img src={skull} style={{width: '25px', height: '25px'}}/>
                <p>{r.punishment}</p>
                </div>
              </div>
                            
              {/* <h4>Status: {r.open ? 'open' : 'closed'}</h4>
              <h4>Created At: {prettyDate.toLocaleDateString()}</h4> */}

              <div className='streak-card-footer'>
                {r.open ? '' : <p style={{margin: '3em'}}>In Progress</p>}
                {userStreakId != (r.id) && r.open == true ? <Button style={{margin: '2em 3em', width: '200px'}} variant='light' className="button-orange" onClick={()=>addToUserStreaks(r.id)}>Start Streak</Button> : ''}
              </div> 

              {/* {usersStreakIds.includes(streak.id) == false ? <Button onClick={()=>addToUserStreaks(streak.id)}>Start Streak!</Button> : ''} */}
            {/* <ContributingProject key={r.id} project_id={r.id} /> */}
            {/* </div> */}
            
          </div>
          </>
        );
      });
    } else {
      return <h3 style={{ marginTop: 40 }}>No Results</h3>;
    }
  };
  return (
    <div>
     <h1 style={{margin: '3em 0 0 3em', color: 'white'}}>Search Results</h1>
     <br />
     <br />
     
      <CardGroup>
        <div className='streak-container' style={{margin:'2em'}}>
          {results && renderResults()}
        </div>
      </CardGroup>
      
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

        




// FORMER CODE, UGLY AS SIN (slightly changed, remove divs to work)

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Card, CardGroup, Grid, Segment } from "semantic-ui-react";
// import { AuthContext } from "../providers/AuthProvider";
// import styled from "styled-components";
// import { QueryContext } from "../providers/QueryProvider";


// const SearchResults = () => {
//   const { user } = useContext(AuthContext);
//   const { query, setQuery, results } = useContext(QueryContext);
//   const renderResults = () => {
//     if (results.length > 0) {
//       return results.map((r) => {
//         const prettyDate = new Date(r.created_at)
//         return (
//           <>
          
            
//               <Card>
//                 <Link to={`streaks/${r.id}`}>
//                   <h2>Streak: {r.name}</h2>
//                 </Link>
//                 <h3>The challenge: {r.description}</h3>
//                 <h4>Reward: {r.reward}</h4>
//                 <h4>Punishment: {r.punishment}</h4>
            
//               <h4>Status: {r.open ? 'open' : 'closed'}</h4>
//               <h4>Created At: {prettyDate.toLocaleDateString()}</h4>
//             </Card>
            
          
//           </>
//         );
//       });
//     } else {
//       return <h3 style={{ marginTop: 40 }}>No Results</h3>;
//     }
//   };
//   return (

//     <>
//      <h1>Search Results:</h1>
//       <CardGroup>
//           {results && renderResults()}
//       </CardGroup>
//     </>
//   );
// };
// const spacingStyle = {
//   marginTop: "20px",
// };
// const Flex = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;
// export default SearchResults;