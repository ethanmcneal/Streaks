import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {Button, Card, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'

const CommentsUser = () => {
  const [comments, setComments] = useState('')
  const {id} = useParams()
  
  useEffect(()=>{
    getComments()
    },[])

  const getComments = async () => {
    try{let res =  await axios.get(`/api/comment/${id}`)
      setComments(res.data)
      console.log(res.data)
      
    } catch(err) {
      console.log(id)
      alert(err)
    }
  }



  return (
    <>
    <div>
      <h1>Comments.js : this will show all of the comments for a specific streak</h1>
      <Card>
        {comments && comments.map( comment => 
          <Card>
            <h1>{comment.streak_name}</h1>
            <h1>{comment.comment}</h1>
            <h1>media: {comment.media}</h1>
            <h1>cheer: {comment.cheer}</h1>
            <h1>laugh: {comment.laugh}</h1>
          </Card>     
        )}
      </Card>
    </div>
    </>
  )
}


export default CommentsUser


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