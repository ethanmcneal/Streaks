import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import {Carousel} from 'react-bootstrap'

const CommentMedia = () => {
  const [comments, setComments] = useState('')
  const {id} = useParams()
  const {user} = useContext(AuthContext)

  useEffect(()=> {
    getCommentMedia()
  }, [])

  const getCommentMedia = async() =>{
    try{let res =  await axios.get(`/api/streak/${id}`)
      setComments(res.data)
    } catch(err) {
      alert(err)
    }
  }
  
  const renderCommentMedia = () => {
    return (
      <>
       <Carousel>
         {comments && comments.map( comment => 
             <Carousel.Item>
            <img 
             className="d-block w-100"
             src={comment.media}/>
              </Carousel.Item>
         )}  
         </Carousel>
          
        
          </>   
    )
  }

  return (
    <div>
      {renderCommentMedia()}
    </div>
  )
}

export default CommentMedia


