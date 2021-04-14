
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
// import { Card, CardGroup } from 'semantic-ui-react';
import CommentsStreak from '../comments/CommentsStreak';




const Streaks = (props)=>{
    const { user } = useContext(AuthContext)
    const [streaks, setStreaks] = useState(null);
    // const [filteredStreaks, setFilteredStreaks] = useState(null)


    useEffect(() => {
        getData()
        
    },[])


      const getData = async()=>{
        try{
          let res = await axios.get(`/api/distinct_streaks/${user.id}`)
          setStreaks(res.data)
          console.log(res.data)
            
        }catch(err){
            alert(err)
        }
    }

    const addToUserStreaks = async(id) => {
        try {
            let res = await axios.post(`/api/user_streaks/`, {status: 'ongoing', user_id: user.id, streak_id: id})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // let filteredStreaks = []


    // const filterStreak = () => {
    //     console.log(userStreakIds)
    //     userStreakIds.map(id => {
    //     streaks.filter(s => id !== s.id ? filteredStreaks.push(s) : '')
        
        
    //     }
   
    //     )
    //     console.log(filteredStreaks, 'filtered')
    // }
        
    
    

    const renderStreak = () => {
        // filterStreak()
        return streaks.map((streak)=>{
                return (
                <>
              <Card>
                   <Link to={`streaks/${streak.streak_id}`}>
                <h2>{streak.streak_name}</h2>
                     </Link>
                <h3>The challenge = {streak.description}</h3>
                <h4>Success = {streak.reward}</h4>
                <h4>Failure = {streak.punishment}</h4>
                <p>{streak.id}</p>
                <Button onClick={()=>addToUserStreaks(streak.streak_id)}>Start Streak</Button>
               <br/>
               </Card> 
                </> )
            })}
        
                
           
    

    return (
        <>
         <h1>Challenges </h1>
         <Link to='/streaks/form'>
         <Button>Add Streak</Button>
         </Link>
         <CardGroup>
             {streaks && renderStreak()}
        </CardGroup>
         {/* <div fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
               {data && renderStreak()}
        </div> */}
       
        </>
     )
}

export default Streaks