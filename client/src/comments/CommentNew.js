import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import {Button, Divider, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import { AuthContext } from '../providers/AuthProvider'

const CommentNew = () => {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const [streak_id, setStreak_id] = useState()
  const [user_id, setUser_id] = useState()
  const [comment, setComment] = useState('')
  const [media, setMedia] = useState('')

  const handleNewComment = async(e) => {
    try{
      let res = await axios.post('/api/comments')
      history.push('/comments')
    }catch(err){
      alert('err in handleNewComment')
    }
  }
  
  return (
    <>
    <div>
      <h1>CommentNew.js for creating a new comment</h1>
    </div>
    <div>
      <for
      <input value={comment} label='Comment:' placeholder='Comment' name='comment' onChange={(e)=>setComment(e.target.value)}/>
      <br/>
      <input value={media} label='Other Media:' placeholder='media' name='media' onChange={(e)=>setMedia(e.target.value)}/>
      <Button>Post Comment</Button>
    </div>
    </>
  )
}

export default CommentNew