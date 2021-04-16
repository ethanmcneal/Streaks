import React, { useContext} from 'react'
import { AuthContext } from '../providers/AuthProvider'
import CardContainer from '../style_components/CardContainer'

const Home = () =>{


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

export default Home