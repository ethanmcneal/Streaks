import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'

const CommentMedia = () => {
  const [comments, setComments] = useState('')
  const {id} = useParams()

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
                //todo make it so that the media is formatted nicely. full height within 150px maybe. 
                src={comment.media}/>
              </Carousel.Item>
           )}  
       </Carousel>
      </> 
  )}

  return (
    <div>
      {renderCommentMedia()}
    </div>
  )
}

export default CommentMedia


