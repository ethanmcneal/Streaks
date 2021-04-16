import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import UserStreak from './UserStreak'
import '../style_components/basicstyle.css'
import TabComponent from '../components/TabComponent'




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

  const renderUserStreak = () => {
    return userStreaks.map(userStreak => <UserStreak streakName={userStreak.streak_name} 
                                                      streakReward={userStreak.reward}
                                                      createdAt={userStreak.created_at}
                                                      status={userStreak.status}
                                                      userStreakId={userStreak.id}/>)
  } 

  return(
    <>
  <Segment.Group className="apple" >
    <TabComponent></TabComponent>
  <Segment.Group horizontal >
    <Segment>Streak</Segment>
    <Segment># of Participants</Segment>
    <Segment>Created</Segment>
    <Segment>Wager</Segment>
    <Segment>Status</Segment>
    <Segment>Actions</Segment>
    </Segment.Group>
    {/* <Segment.Group> */}
    {userStreaks && <div className="orange">{renderUserStreak()} </div>}
    {/* </Segment.Group> */}
  </Segment.Group>
  
  </>)
}

export default UserStreaks
