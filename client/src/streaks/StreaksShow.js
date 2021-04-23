
import {Link, useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { CardGroup, Segment } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import CommentsStreak from '../comments/CommentsStreak';
import { Tab } from 'semantic-ui-react';
import { Button, Card, CardDeck } from 'react-bootstrap';




const Streaks = (props)=>{
    const { user } = useContext(AuthContext)
    const [streaks, setStreaks] = useState(null);
    const [usersStreakIds, setUsersStreakIds] = useState(null)

    const history = useHistory()


    useEffect(() => {
        getStreaks()
    },[])


    const getStreaks = async()=>{
    try{
        let res = await axios.get(`/api/streaks`)
        let res2 = await axios.get(`/api/users_streaks/${user.id}`)
        setUsersStreakIds([...new Set(res2.data.map(us => us.streak_id))])
        console.log([...new Set(res2.data.map(us => us.streak_id))])
        setStreaks(res.data)

        console.log(res.data)
    }catch(err){
        alert(err)
    }}

    const addToUserStreaks = async(id) => {
        try {
            let res = await axios.post(`/api/user_streaks/`, {status: 'upcoming', user_id: user.id, streak_id: id})
            console.log(res)
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }


    const renderStreak = () => {
        
        return streaks.map((streak) => {
        return(
            <>
            <CardDeck>
            <Card >
                <Card.Body>
                <Link to={`streaks/${streak.id}`}>
                    <Card.Title>{streak.name}</Card.Title>
                 </Link>
                    <br/>
                <Card.Text style={{maxWidth:"200px"}} >{streak.description}</Card.Text>
                
                <Card.Text >Reward: {streak.reward} 
                 <br/>
                    Punishment: {streak.punishment}
                </Card.Text>
                <Card.Footer>{streak.open ? '' : 'In Progress' }
                {usersStreakIds.includes(streak.id) == false && streak.open == true ? <Button  variant='light' className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> : ''}</Card.Footer>
                </Card.Body>
            </Card>
           </CardDeck>
            </>
        )})
    }

    const renderJoinableStreaks = () => {
        return(
            <div>
            <CardDeck>
        {streaks.map((streak) => usersStreakIds.includes(streak.id) == false && streak.open == true ? 
                <Card >
                     <Card.Body>
                <Link to={`streaks/${streak.id}`}>
            <Card.Title>{streak.name}</Card.Title>
                    </Link>
            <Card.Text>{streak.description}</Card.Text>

            <Card.Text>Reward: {streak.reward}</Card.Text>

            <Card.Text>Punishment: {streak.punishment}</Card.Text>

            <Card.Footer>{streak.open ? '' : 'In Progress' }</Card.Footer>
            <Button variant='light' className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> 
            
            </Card.Body>
            </Card> : '' )}
            </CardDeck>
            <h4>Don't see a streak you like? click the button to Create your own!</h4>
            <Link to='/streaks/form'>
            <Button variant='light' className='button-orange'>+ Add Streak</Button>
            </Link>
            </div>
        )}

    const panes = [
        {
          menuItem: 'All Streaks',
          render: () => <Tab.Pane attached={false}>
              <CardGroup>
                  {renderStreak()}
                </CardGroup>
            </Tab.Pane>,
        },
        {
          menuItem: 'Joinable Streaks',
          render: () => <Tab.Pane attached={false}>
                
                    {renderJoinableStreaks()}
                
              </Tab.Pane>,
        },
      ]

    return (
        <>
         <h1 className='new-streak-title'>Streaks</h1>
         <Segment.Group className="apple" >
       
             {streaks && <Tab menu={{ secondary: true, pointing: true }} panes={panes} />}
        </Segment.Group>
       
        </>
     )
}

export default Streaks

// style={{width: "100px", height:"250px" }}