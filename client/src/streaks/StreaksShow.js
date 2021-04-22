
import {Link, useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import {Card, CardGroup, Segment } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import CommentsStreak from '../comments/CommentsStreak';
import { Tab } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';




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
           <Card className=''>
               <Link to={`streaks/${streak.id}`}>
            <Card.Content header>{streak.name}</Card.Content>
                 </Link>
                 <br/>
            <p className='streaks-cards'>{streak.description}</p>
            <br/>
            <p className='streaks-cards'>Reward: {streak.reward}</p>
            <p className='streaks-cards'>Punishment: {streak.punishment}</p>
            <Card.Content extra>{streak.open ? '' : 'In Progress' }</Card.Content>
            {usersStreakIds.includes(streak.id) == false && streak.open == true ? <Button className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> : ''}
           <br/>
           </Card>
            </>
        )})
    }

    const renderJoinableStreaks = () => {
        return(
            <div>
            <CardGroup>
        {streaks.map((streak) => usersStreakIds.includes(streak.id) == false && streak.open == true ? 
                <Card className="StreaksCards">
                <Link to={`streaks/${streak.id}`}>
            <h3>{streak.name}</h3>
                    </Link>
            <p className='streaks-cards'>{streak.description}</p>

            <p className='streaks-cards'>Reward: {streak.reward}</p>

            <p className='streaks-cards'>Punishment: {streak.punishment}</p>

            <h4>{streak.open ? '' : 'In Progress' }</h4>
            <Button className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> 
            <br/>
            </Card> : '' )}
            </CardGroup>
            <h4>Don't see a streak you like? click the button to Create your own!</h4>
            <Link to='/streaks/form'>
            <Button>+ Add Streak</Button>
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
         <h1>Challenges </h1>
         <Segment.Group className="apple" >
       
             {streaks && <Tab menu={{ secondary: true, pointing: true }} panes={panes} />}
        </Segment.Group>
       
        </>
     )
}

export default Streaks