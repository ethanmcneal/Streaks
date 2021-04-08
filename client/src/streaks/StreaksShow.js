
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';



const Streaks = (props)=>{
    const { id } = useParams()
    const [streaks, setStreaks] = useState(null);
    // const { data, loading, error} = useAxiosOnMount(`/api/streaks`)

    useEffect(() => {
        getStreaks()
    },[])


      const getStreaks = async()=>{
        try{
          let res = await axios.get(`/api/streaks`)
          setStreaks(res.data)

          console.log(res.data)
        }catch(err){
            alert(err)
        }
    }

    const renderStreak = () => {
        return streaks.map((streak) => {
        return(
            <>
           <div>
            <h2>{streak.name}</h2>
            <h3>The challenge = {streak.description}</h3>
            <h4>Success = {streak.reward}</h4>
            <h4>Failure = {streak.punishment}</h4>
           <br/>
           </div>
            </>
        )}
   
        )
   
    }

    return (
        <>
         <h1>Challenges </h1>
         <div>
             {streaks && renderStreak()}
         </div>
         {/* <div fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
               {data && renderStreak()}
        </div> */}
          </>
     )
}

export default Streaks