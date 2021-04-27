
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
  const {defaultInfo, editComment2, defaultCommentID} = props

  const [editComment1, setEditComment] = useState({
    info: editComment2.info, 
    comment_id: defaultCommentID
  })

  const handleEditComment = async(e) => {
    e.preventDefault()
    let data = new FormData();
    data.append("info", editComment1.info);
    try{
      let res = await axios.put(`/api/comments/${defaultCommentID}`, data)
      history.push(`/streaks/${id}`)
      window.location.reload()
    }catch(err){
      alert('err in handleEditComment in CommentTextEdit')
    }
  }

  const handleChange = (e) => {
    setEditComment({...editComment1, [e.target.name]: e.target.value})
  }

    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <form onSubmit={handleEditComment}>
          <input value={editComment1.info} placeholder={editComment2.info} label='Comment:'  name='info' onChange={handleChange}/>
            {console.log("editComment2", editComment2)}
            {console.log('default info stuff', defaultInfo)}
          <br />
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
