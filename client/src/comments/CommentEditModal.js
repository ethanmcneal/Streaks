
import { Button, Modal } from 'react-bootstrap';
import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CommentMediaEdit = (props) => {
  const [files, setFiles] = useState([])
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const {defaultInfo, defaultMedia, defaultCheer, defaultLaugh, defaultCommentID} = props

  const [editComment, setEditComment] = useState({
    user_id: user.id,
    streak_id: id,
    // info: defaultInfo, 
    media: defaultMedia,
    // cheer: defaultCheer, 
    // laugh: defaultLaugh,
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
    let data = new FormData();
    data.append("user_id", editComment.user_id);
    data.append("streak_id", editComment.streak_id);
    data.append("info", editComment.info);
    data.append("media", editComment.media);
    data.append("cheer", editComment.cheer);
    data.append("laugh", editComment.laugh); 
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

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    // appending 'file' with image info to pass can retieve in params
    setEditComment({ ...editComment, media: fileItems[0].file });
  };
  

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
          </form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button  type='submit'>Edit Comment</Button>
        </Modal.Footer>
      </Modal>
      

    );
}

export default CommentMediaEdit
