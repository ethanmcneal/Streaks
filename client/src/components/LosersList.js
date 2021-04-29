import React, {useState, useContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import '../style_components/basicstyle.css'
import { ListGroup } from 'react-bootstrap'
import {Icon} from 'semantic-ui-react'

const LosersList = () => {
  const [losers, setLosers] = useState('')
  const {id} = useParams()
 

  useEffect(()=> {
    getLoserMedia()
  }, [])

  const getLoserMedia = async() =>{
    try{let res =  await axios.get(`/api/streaks_users/${id}`)
      setLosers(res.data)
      
    } catch(err) {
      alert(err)
    }
  }
  
  const notNullMedia = () => {
    if (losers){let filterMedia = losers.filter(loser => loser.media !== null)
      
     return( 
        filterMedia.map( loser => 
          <ListGroup.Item action target="_blank" href={loser.media}> {loser.nickname}: {loser.media}</ListGroup.Item>
        )
      )
    }
  }

  return (
    <>
    <h2  style={{color:"rgb(141 129 140)", marginTop:"10px", textAlign:"center"}} >Losers List</h2>
     <div>
      <ListGroup variant="flush">
        <ListGroup.Item style={{color:"rgb(141 129 140)", marginTop:"10px", textAlign:"center"}}>Click on the links below to see proof of loser punishment! </ListGroup.Item>
       {notNullMedia()}
       </ListGroup>
     </div>
    </> 
  )
}

export default LosersList


