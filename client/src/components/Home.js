import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import CardContainer from '../style_components/CardContainer'

const Home = () =>{

    const [test, setTest] = useState([])
    const {user} = useContext(AuthContext)

    return(
        <div>
        <h1>Home Page Here</h1>
       {user && <CardContainer>
            <h1>Welcome back!</h1>
            <h3>How are you today {user.nickname}?</h3>
        </CardContainer> }
        
        </div>
    )
}

// class component

// class Home extends React.Component {


//     render(){
//         return (
//             <div>
//                 <h1>Home Page here</h1>
//             </div>
//         )
//     }
// }
export default Home