
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Tab } from 'semantic-ui-react';
import trophy from '../images/trophyIcon.png'
import skull from '../images/risk-skull.png' 
import './grids.css'




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
        // console.log([...new Set(res2.data.map(us => us.streak_id))])
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
            <div className='streak-card'>
            <div className='streak-card-upper'>
                <Link className='link' to={`streaks/${streak.id}`}>
                    <h3 style={{margin: '1em 0 0 1em'}}>{streak.name}</h3>
                 </Link>
                    <br/>
                <p style={{color: 'rgb(141 129 140)', textAlign: 'left', margin: '0 0 1em 1em'}}>{streak.description}</p>
                
                <div style={{display: 'flex', margin: '1em'}}>
                <img src={trophy} style={{width: '25px', height: '25px'}}/>
               
            <p>{streak.reward}</p>
            </div>
            <div style={{display: 'flex', margin: '1em'}}>
                <img src={skull} style={{width: '25px', height: '25px'}}/>
                
            <p>{streak.punishment}</p>
                </div>
                </div>
                <div className='streak-card-footer'>
                {streak.open ? '' : <p style={{margin: '3em'}}>In Progress</p>}
                {usersStreakIds.includes(streak.id) == false && streak.open == true ? <Button style={{margin: '2em 3em', width: '200px'}} variant='light' className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> : ''}
                </div>
            
            </div>
            </>
        )})
    }

    const renderJoinableStreaks = () => {
        return(
            <>
        {streaks.map((streak) => usersStreakIds.includes(streak.id) == false && streak.open == true ? 
                <div className='streak-card'>
                <div className='streak-card-upper'>
                     <Link className='link' to={`streaks/${streak.id}`}>
                        <h3 style={{margin: '1em 0 0 1em'}}>{streak.name}</h3>
                     </Link>
                        <br/>
                    <p style={{color: 'rgb(141 129 140)', textAlign: 'left', margin: '0 0 1em 1em'}}>{streak.description}</p>
                    
                    <div style={{display: 'flex', margin: '1em'}}>
                    <img src={trophy} style={{width: '25px', height: '25px'}}/>
                   
                <p>{streak.reward}</p>
                </div>
                <div style={{display: 'flex', margin: '1em'}}>
                        <img src={skull} style={{width: '25px', height: '25px'}}/>
                    
                        <p>{streak.punishment}</p>
                </div>
                </div>
                    <div className='streak-card-footer'>
                    {streak.open ? '' : <p style={{margin: '3em'}}>In Progress</p>}
                    {usersStreakIds.includes(streak.id) == false && streak.open == true ? <Button style={{margin: '2em 3em', width: '200px'}}  variant='light' className="button-orange" onClick={()=>addToUserStreaks(streak.id)}>Start Streak</Button> : ''}
                    </div> 
                </div>: '')}
            
            </>
        )}

    const panes = [
        {
          menuItem: <Menu.Item style={{color: 'white', marginLeft: '5em'}}>All Streaks</Menu.Item>,
          render: () => <Tab.Pane style={{backgroundColor: 'rgb(25 53 81)', border: '0'}} attached={false}>
                <div className='streak-container'>
                  {renderStreak()}
                  </div>
                  
            </Tab.Pane>,
        },
        {
          menuItem: <Menu.Item style={{color: 'white', }}>Joinable Streaks</Menu.Item>,
          render: () => <Tab.Pane style={{backgroundColor: 'rgb(25 53 81)', border: '0'}} attached={false}>
                <div className='streak-container'>
                    {renderJoinableStreaks()}
                </div>
              </Tab.Pane>,
        },
      ]

      let color = 'yellow'

    return (
        <div>
         <h1 className='new-streak-title' style={{margin: '3em 0 0 3em'}}>Challenges</h1>
         
       
             {streaks && <Tab  menu={{ color, secondary: true, pointing: true }} panes={panes} />}
       
       
        
            <div>
                <h4 style={{color: 'white'}}>Don't see a streak you like? click the button to Create your own!</h4>
                <Link to='/streaks/form'>
                <Button variant='light' className='button-orange'>+ Add Streak</Button>
                </Link>
            </div>
    </div>
     )
}

export default Streaks

// style={{width: "100px", height:"250px" }}