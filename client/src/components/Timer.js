import axios from 'axios'
import { useEffect, useState } from 'react'

const Timer = (props) => {
    const {timeline, users} = props

    const [timeElapsed, setTimeElapsed] = useState(null)
    const [upcoming, setUpcoming] = useState(false)
    let difference = 0

    useEffect(()=> {
        const interval = setInterval(()=> {
            getTimeElapsed()
        },1000);
        return() => {
            clearInterval(interval);
        }; 
        
    },[]);
    
    const checkUpcoming = () => {
        try {
            users.forEach(user => user.status == 'upcoming' && upcoming == false ? 
            axios.patch(`/api/user_streaks/${user.id}`, {status: 'ongoing'}) : '')
        } catch (error) {
            console.log(error)
        }
    }

    const getTimeElapsed = () => {
        let createdAt = new Date(timeline) 
        let today = new Date()
        if((today.getTime() - createdAt.getTime()) > 0){
            difference = today.getTime() - createdAt.getTime()
        }else{
            difference = createdAt.getTime() - today.getTime()
            setUpcoming(true)
        }
        
        let days = Math.floor(difference / 8.64e7)
        let hours = Math.floor(difference % 8.64e7 / 3.6e6)
        let minutes = Math.floor(difference % 3.6e6 / 6e4)
        let seconds = Math.floor(difference % 6e4 / 1e3)
        // console.log(timeElapsed)
        setTimeElapsed({days: days, hours: hours, minutes: minutes, seconds: seconds})
    }
    if(timeElapsed){
        checkUpcoming()
    }

    return(
        <div>
        <div className='timerbox'>
            {upcoming ? <h2>Streak starts in:</h2> : <h2>Streak has been going for:</h2>}
         {timeElapsed && <h3>{timeElapsed.days} days, {timeElapsed.hours} hours, {timeElapsed.minutes} minutes, and {timeElapsed.seconds} seconds</h3> }
        </div>
        <div className="spacer">
            <br/><br/>
        </div>
        </div>
        
    )
}

export default Timer