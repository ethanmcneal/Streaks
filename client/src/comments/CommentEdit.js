import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import {Button, Divider, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import { AuthContext } from '../providers/AuthProvider'

const CommentEdit = (props) => {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const {defaultInfo, defaultMedia, defaultCheer, defaultLaugh, defaultCommentID} = props
  

  const [editComment, setEditComment] = useState({
    user_id: user.id,
    streak_id: id,
    info: defaultInfo, 
    media: defaultMedia,
    cheer: defaultCheer, 
    laugh: defaultLaugh,
    comment_id: defaultCommentID
  })

  useEffect(()=>{
    getComments()
  },[])

  const getComments = async() => {
    try {
      let res =  await axios.get(`/api/comments/${defaultCommentID}`)
      setEditComment(res.data)
    }catch (err){
      alert('error in getComments')
    }
  }


  const handleEditComment = async(e) => {
    e.preventDefault()
    try{
      // todo fix the axios garbage
      console.log('def comm id', defaultCommentID)
      console.log('editcommenttttt', editComment)
      let res = await axios.put(`/api/comments/${defaultCommentID}`, editComment)
      history.push(`/streaks/${id}`)
      window.location.reload()
    }catch(err){
      alert('err in handleEditComment')
    }
  }

  const handleChange = (e) => {
    setEditComment({...editComment, [e.target.name]: e.target.value})
  }
  
  return (
    <>
    <div>
      <form onSubmit={handleEditComment}>
      <input value={editComment.info} label='Comment:' placeholder={editComment.info} name='info' onChange={handleChange}/>
      {console.log('edit comment', editComment)}
      <br/>
      <input value={editComment.media} label='Other Media:' placeholder='media' name='media' onChange={handleChange}/>
      <Button type='submit'>Edit Comment</Button>
      </form>
    </div>
    </>
  )
}

export default CommentEdit


 // const [info, setInfo] = useState(defaultInfo)
  // const [cheer, setCheer] = useState(defaultCheer)
  // const [laugh, setLaugh] = useState(defaultLaugh)
  // const [media, setMedia] = useState(defaultMedia)
  // const [userId, setUserId] = useState(user.id)
  // const [streakId, setStreakId] = useState(id)
  
  // const [editComment, setEditComment] = useState({
  //   user_id: user.id,
  //   streak_id: id,
  //   info: editComment.info, 
  //   media: editComment.media,
  //   cheer: "0", 
  //   laugh: "0"
  // })
