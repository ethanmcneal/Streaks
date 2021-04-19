import React from 'react'
import axios from "axios"
import { Icon, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'



const UserStreak = (props) => {

const {streakName, streakReward, createdAt, status, userStreakId, streakId} = props

const changeStatus = async(id, s) => {
    try {
        let res = await axios.patch(`/api/user_streaks/${id}`, {status: s === 'ongoing' ? 'paused' : 'ongoing'})
        console.log(res)
        // window.location.reload()
    } catch (error) {
        console.log(error)
    }
        }


    const quitStreak = async(id) => {
        try {
            let res = await axios.patch(`/api/user_streaks/${id}`, {status: 'quit'})
            console.log(res)
            // window.location.reload()
        } catch (error) {
            console.log(error)
        }
}

        const formattedDate = new Date(createdAt).toLocaleDateString()


    return(
            <Segment style={{display: 'flex', justifyContent:'space-between', textAlign:'center'}}>
                <Link to={`/streaks/${streakId}`}>
                <h4>{streakName}</h4>
                </Link>
                <h4># of Participants?</h4>
                <h4>{formattedDate}</h4>
                <h4>{streakReward}</h4>
                <h4> {status} </h4>
               {status !== 'quit' || status !== 'won' ? <div>
                {status !== 'upcoming' && <Icon onClick={()=>changeStatus(userStreakId, status)}name={status === 'ongoing' ? 'pause' : 'play'} /> }
                <Icon name='times' onClick={()=>quitStreak(userStreakId)}/> 
                </div> : ''} 
            </Segment>
    )
}

export default UserStreak