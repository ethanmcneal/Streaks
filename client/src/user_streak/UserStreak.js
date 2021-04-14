
import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import axios from "axios"
import { Icon, Menu, Segment } from "semantic-ui-react"
import Streak from "../streaks/Streak"



const UserStreak = (props) => {
// todo: please fix :)
// olive
const DashSeg = () => (
    

    <>
  <Segment.Group>
  <Segment.Group horizontal>
    <Segment>Streak</Segment>
    <Segment># of Participants</Segment>
    <Segment>Created</Segment>
    <Segment>Wager</Segment>
    <Segment>Status</Segment>
    <Segment>Actions</Segment>
  </Segment.Group>
//=======end
const {streakName, streakReward, createdAt, status, userStreakId} = props

const changeStatus = async(id, s) => {
    try {
        let res = await axios.patch(`/api/user_streaks/${id}`, {status: s == 'ongoing' ? 'paused' : 'ongoing'})
        console.log(res)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
        }
// master end

    const quitStreak = async(id) => {
        try {
            let res = await axios.patch(`/api/user_streaks/${id}`, {status: 'quit'})
            console.log(res)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
}

// olive
export default DashSeg
//end
    return(
            <Segment style={{display: 'flex', justifyContent:'space-between', textAlign:'center'}}>
                <h4>{streakName}</h4>
                <h4># of Participants?</h4>
                <h4>{createdAt}</h4>
                <h4>{streakReward}</h4>
                <h4> {status} </h4>
                <div>
                <Icon onClick={()=>changeStatus(userStreakId, status)}name={status == 'ongoing' ? 'pause' : 'play'} />
                <Icon name='times' onClick={()=>quitStreak(userStreakId)}/>
                </div>  
            </Segment>
    )
}

export default UserStreak
// master end
