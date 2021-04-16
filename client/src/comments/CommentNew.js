import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import {Button, Divider, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import { AuthContext } from '../providers/AuthProvider'

const CommentNew = () => {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const [newComment, setNewComment] = useState({
    user_id: user.id,
    streak_id: id,
    info: "", 
    media: "",
    cheer: "0", 
    laugh: "0"
  })

  const handleNewComment = async(e) => {
    e.preventDefault()
    try{
      let res = await axios.post('/api/comments', newComment)
      history.push(`/streaks/${id}`)
      window.location.reload()
    }catch(err){
      alert('err in handleNewComment')
    }
  }

  const handleChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }
  
  return (
    <>
    <div>

    </div>
    <div>
      <form onSubmit={handleNewComment}>
      <input value={newComment.info} label='Comment:' placeholder='Comment' name='info' onChange={handleChange}/>
      <br/>
      <input value={newComment.media} label='Other Media:' placeholder='media' name='media' onChange={handleChange}/>
      <Button type='submit'>Post Comment</Button>
      </form>
    </div>
    </>
  )
}

export default CommentNew