import React, {useState, useEffect, useReducer, useContext} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Button, Card, Header, Image} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import CommentEdit from './CommentEdit'
import ReactDOM from "react-dom";
import CheerLaughCounter from './CheerLaughCounter'
import { AuthContext } from '../providers/AuthProvider'

const CommentsStreak = () => {
  const [comments, setComments] = useState('')
  const [hideEditFields, setHideEditFields] = useState(false)
  const {id} = useParams()
  const [hideDeleteButt, setHideDeleteButt] = useState(false)
  const {user} = useContext(AuthContext)
  
  useEffect(()=>{
    getComments()
    },[])

  const getComments = async () => {
    try{let res =  await axios.get(`/api/streak/${id}`)
      setComments(res.data)
      console.log(res.data)
      
    } catch(err) {
      console.log(id)
      alert(err)
    }
  }
  // /api/comments/:id
  const deleteComment = async(id) => {
    try{
      let res = await axios.delete(`/api/comments/${id}`)
      window.location.reload()
    }catch(err){
      alert('error in deleteComment')
    }
  }
      
  const renderFullComments = () => {
    return(
       <Card>
         {comments && comments.map( comment => 
           <Card>
             <h1>nickname: {comment.nickname}</h1>
             {/* todo: make delete and edit only visible to curernt user for their comments */}
             {user.id === comment.user_id && <Button onClick={() => deleteComment(comment.comment_id)}>Delete</Button>}
             {user.id === comment.user_id && <Button onClick={()=> {setHideEditFields(!hideEditFields)}}>{hideEditFields ? 'Cancel Edit' : 'Edit'}</Button>}
              {hideEditFields && <CommentEdit defaultInfo={comment.info} defaultMedia={comment.media} defaultCheer={comment.cheer} defaultLaugh={comment.laugh} defaultCommentID={comment.comment_id}/>}
             <img src={comment.image}/>
             <h1>comment: {comment.info}</h1>
             <img src={comment.media}/>
             {/* <h1>cheer: {comment.cheer}</h1>
             <h1>laugh: {comment.laugh}</h1> */}
             <div><CheerLaughCounter defaultCommentID={comment.comment_id} initCheer={comment.cheer} initLaugh={comment.laugh}/></div>
          </Card>     
     )}
     </Card>
    )
   }
  


  return (
    <>
    <div>

     
        
    </div>
    <div>{renderFullComments()}</div>
    
    </>
  )
}


export default CommentsStreak







 {/* <Link to={{pathname:`/CommentEdit/${comment.id}/${comment.info}/${comment.media}/${comment.user_id}/${comment.streak_id}/${comment.cheer}/${comment.laugh}`}}> */}
//  <Button onClick={()=> {setHideEditFields(!hideEditFields)}}>{hideEditFields ? 'Cancel Edit' : 'Edit'}</Button>
 {/* </Link> */}


// render comments for a specific streak on the streak page
// render comments for a specific user on the user page
// do pagination or infinite scroller
// focus on create and read. 

//use usecontext use for creating, editing, and deleting (delete and edit button only shows for the current user)

// 'c.comment, c.media, c.cheer, c.laugh, comment_id, user_name, u.nickname, u.image, u.email, u.wins, u.losses, u.id as user_id, s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub, s.punishment, s.id as streak_id') 


// category: "["Game"]"
// cheer: null
// comment: "Different Stages"
// comment_id: 3
// description: "Chuck Norris's first program was kill -9."
// email: "samara_bartell@wolff-waelchi.info"
// id: null
// image: "https://robohash.org/Solon.png?size=100x100&set=set3&bgset=bg1"
// laugh: null
// losses: 0
// media: null
// nickname: "christene"
// punishment: "Specter"
// reward: "Nord Hero Bow"
// streak_id: 3
// streak_name: "ferries"
// timeline: null
// user_id: 3
// user_name: "Solon"
// wins: 0