import React, {useState, useContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Carousel, Image} from 'react-bootstrap'
import '../style_components/basicstyle.css'

const CommentMedia = () => {
  const [comments, setComments] = useState('')
  const {id} = useParams()
 

  useEffect(()=> {
    getCommentMedia()
  }, [])

  const getCommentMedia = async() =>{
    try{let res =  await axios.get(`/api/streak/${id}`)
      setComments(res.data.comments)
    } catch(err) {
      alert(err)
    }
  }
  
  const notNullMedia = () => {
    if (comments){let filterMedia = comments.filter(comment => comment.media !== "")
      console.log("filtermedia", filterMedia)
     return( filterMedia.map( comment => 
        <Carousel.Item>
            <Image
            className="comments-media-carousel"
            src={comment.media}/>
          </Carousel.Item>
       ))
    }
  }

  return (
    <>
    <h2>All Comment Media</h2>
     <Carousel>
       {notNullMedia()}
     </Carousel>
    </> 
  )
}

export default CommentMedia


