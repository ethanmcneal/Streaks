import moment from 'moment'
import { useEffect, useState } from 'react'

const Timer = (props) => {
    const {created_at} = props

    const [timeElapsed, setTimeElapsed] = useState(null)

    useEffect(()=> {
        const interval = setInterval(()=> {
            getTimeElapsed()
        },1000);
        return() => {
            clearInterval(interval);
        }; 
        
    },[]);

// const {created_at} = props
    

    const getTimeElapsed = () => {
        let createdAt = new Date(created_at) 
        let today = new Date()
        let difference = today.getTime() - createdAt.getTime()
        let days = Math.floor(difference / 8.64e7)
        let hours = Math.floor(difference % 8.64e7 / 3.6e6)
        let minutes = Math.floor(difference % 3.6e6 / 6e4)
        let seconds = Math.floor(difference % 6e4 / 1e3)
        // console.log(timeElapsed)
        setTimeElapsed({days: days, hours: hours, minutes: minutes, seconds: seconds})
    }

    return(
        <div>
        <div style={{textAlign: 'center', padding:'10em'}}>
         {timeElapsed && <h3>{timeElapsed.days} days, {timeElapsed.hours} hours, {timeElapsed.minutes} minutes, and {timeElapsed.seconds} seconds</h3> }
        </div>
        <div style={{backgroundColor:'darkblue', padding:'1.5em'}}>
        </div>
        </div>
        
    )
}

export default Timer