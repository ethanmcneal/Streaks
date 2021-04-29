import React, { useState } from 'react'
import axios from "axios"
import { Icon, Popup, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import UploadMediaModal from '../components/UploadMediaModal'
import '../style_components/dashboard.css'
import { PADDING } from '../style_components/styles'




const UserStreak = (props) => {

const {streakName, streakReward, createdAt, status, userStreakId, streakId, streakPunishment, media} = props

const [modalShow, setModalShow] = useState(false)
const [participants, setParticipants] = useState(0)

const deleteStreak = async(id) => {
    try {
        await axios.delete(`/api/user_streaks/${id}`)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
        }

    const renderParticipants = (id) => {
        getParticipants(id)
        return(participants)
    }    

    const getParticipants = async(id) => {
        try {
            let res = await axios.get(`/api/streaks_users/${id}`)
            setParticipants(res.data.length)  
        } catch (error) {
            console.log(error)
        }
             
    } 


    const quitStreak = async(id) => {
        try {
            let res = await axios.patch(`/api/user_streaks/${id}`, {status: 'quit'})
            
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
}

        const formattedDate = new Date(createdAt).toLocaleDateString("en-US")


    return(
            <Segment style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'white !important'}}>
                <div className='streak-segment'>
                <Link to={`/streaks/${streakId}`}>
                <h3>{streakName}</h3>
                </Link>
                </div>
                <div className='streak-segment'>
                <h4>{renderParticipants(streakId)}</h4>
                </div>
                <div className='streak-segment'>
                <h4>{formattedDate}</h4>
                </div>
                <div className='streak-segment-wager'>
                <h4>{streakReward}</h4>
                </div>
                <div className='streak-segment'>
                    <div className={status == 'ongoing' ? 'running-background' : status== 'won' ? 'won-background' : 'upcoming-background'}>
                <p> {status == 'ongoing' ? 'RUNNING' : status.toUpperCase()} </p>
                    </div>
                    
                </div>
                <div className='streak-segment'>
               {status !== 'quit' && status !== 'won' ? <div>
                {/* {status !== 'upcoming' && <Icon onClick={()=>changeStatus(userStreakId, status)}name={status === 'ongoing' ? 'pause' : 'play'} /> } */}
               { status == 'ongoing' ? <Popup content='QUIT (you lose)' trigger={<Icon name='times' onClick={()=>quitStreak(userStreakId)}/>} /> : <Popup content='Delete' trigger={<Icon name='trash' onClick={()=>deleteStreak(userStreakId)} />} />  }
                </div> : ''} 
                {status == 'quit' && media == null ? <Button onClick={() => setModalShow(true)}>Upload Media</Button> : '' }
                <UploadMediaModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                streakPunishment={streakPunishment}
                userStreakId={userStreakId}/>
                </div>
            </Segment>
    )
}

export default UserStreak