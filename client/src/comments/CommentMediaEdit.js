
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
  const { defaultMedia, defaultCommentID} = props

  const [editComment, setEditComment] = useState({
    user_id: user.id,
    streak_id: id,
    // info: defaultInfo, 
    media: defaultMedia,
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

    data.append("media", editComment.media);
  
    try{
      console.log('editcomment.media', editComment.media)
      let res = await axios.put(`/api/commentmedia/${defaultCommentID}`, data)
     
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
          <form onSubmit={handleEditComment} >
          <FilePond
            files={files}
            onupdatefiles={handleUpdate}
            allowMultiple={false}
            name="media"
            labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Button onClick={props.onHide} type='submit'>Edit Comment</Button>
          </form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      

    );
}

export default CommentMediaEdit
