
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

  const handleEditComment = async(e) => {
    e.preventDefault()
    let data = new FormData();
    data.append("info", editComment.info);
    try{
      let res = await axios.put(`/api/comments/${defaultCommentID}`, data)
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
            Edit Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <form onSubmit={handleEditComment}>
          <input value={editComment.info} label='Comment:' placeholder={defaultInfo} name='info' onChange={handleChange}/>
          <br />
          <Button variant='warning' className="button-orange" type='submit'>Edit Comment</Button>
          </form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' className="button-orange" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>   
    );
}

export default CommentTextEdit
