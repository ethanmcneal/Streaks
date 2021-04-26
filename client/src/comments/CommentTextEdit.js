
import { Button, Modal } from 'react-bootstrap';
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'



const CommentTextEdit = (props) => {
  const [files, setFiles] = useState([])
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const {defaultInfo, defaultCheer, defaultLaugh, defaultCommentID} = props

  const [editComment, setEditComment] = useState({
    info: defaultInfo, 
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
      alert('error in getComments for Comment Text Edit')
    }
  }

  const handleEditComment = async(e) => {
    e.preventDefault()
    let data = new FormData();
    data.append("info", editComment.info);
    try{
      let res = await axios.put(`/api/comments/${defaultCommentID}`, data)
      debugger
      console.log('handle edit comment here', editComment.media)
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
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Comment Media
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Drag and drop new media</h4>
          <p>
          <form onSubmit={handleEditComment}>
          <input value={editComment.info} label='Comment:' placeholder={editComment.info} name='info' onChange={handleChange}/>
          {console.log('edit comment', editComment)}
          <Button  type='submit'>Edit Comment</Button>
          </form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          
        </Modal.Footer>
      </Modal>
      

    );
}

export default CommentTextEdit
