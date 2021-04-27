import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Menu, Segment, SegmentGroup, Tab } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import UserStreak from './UserStreak'
import '../style_components/basicstyle.css'
import { render } from 'react-dom'
import StreakListHeader from '../components/StreakListHeader'
import '../style_components/dashboard.css'





const UserStreaks = () => {


  const {user} = useContext(AuthContext)
  const [userStreaks, setUserStreaks] = useState(null)

  useEffect(()=> {
    getData()
  },[])

  const getData = async() => {
    try {
      console.log(user.id)
      let res = await axios.get(`/api/users_streaks/${user.id}`)
      setUserStreaks(res.data)
      // console.log(userStreaks)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const panes = [
    {
      menuItem: <Menu.Item style={{fontSize: '2em'}}>Active</Menu.Item>,
      render: () => <Tab.Pane attached={false}>{renderUserStreak()}</Tab.Pane>,
    },
    {
      menuItem: <Menu.Item style={{fontSize: '2em'}}>Completed</Menu.Item>,
      render: () => <Tab.Pane attached={false}>{renderFinishedStreaks()}</Tab.Pane>,
    },
  ]

  const renderUserStreak = () => {
    return(
      <div>
      <StreakListHeader />
    <Segment.Group style={{margin: 0}}>
        {userStreaks.map(userStreak => userStreak.status !== 'quit' && userStreak.status !== 'won' ? <UserStreak streakName={userStreak.streak_name} 
                                                      streakReward={userStreak.reward}
                                                      streakPunishment={userStreak.punishment}
                                                      createdAt={userStreak.created_at}
                                                      status={userStreak.status}
                                                      userStreakId={userStreak.id}
                                                      streakId={userStreak.streak_id}
                                                      media={userStreak.media}/> : '')}
    </Segment.Group>
    </div>
    )
    
  } 

  const renderFinishedStreaks = () => {
    return(
      <div >
      <StreakListHeader />
    <Segment.Group >
        {userStreaks.map(userStreak => userStreak.status == 'quit' || userStreak.status == 'won' ? <UserStreak streakName={userStreak.streak_name} 
                                                      streakReward={userStreak.reward}
                                                      streakPunishment={userStreak.punishment}
                                                      createdAt={userStreak.created_at}
                                                      status={userStreak.status}
                                                      userStreakId={userStreak.id}
                                                      streakId={userStreak.streak_id}
                                                      media={userStreak.media}/> : '')}
    </Segment.Group>
    </div>
    )
    
  } 

  return(
    <>
  <Segment.Group className="apple" >
  
  
  
    {userStreaks && 
    <div>
    <Tab style={{padding: '10px 0 0 0'}} menu={{ secondary: true, pointing: true }} panes={panes}  /> 
    </div>}
    {/* <Segment.Group> */}
    {/* {userStreaks && <div className="orange">{renderUserStreak()} </div>} */}
    {/* </Segment.Group> */}
  </Segment.Group>
  
  </>)
}

export default UserStreaks
