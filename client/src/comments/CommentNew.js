import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory } from 'react-router-dom'
import {Button, Divider, Header} from 'semantic-ui-react'
import CardContainer from '../style_components/CardContainer'
import { AuthContext } from '../providers/AuthProvider'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { PADDING } from '../style_components/styles'
import { Form } from 'react-bootstrap'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const CommentNew = () => {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {id} = useParams()
  const [files, setFiles] = useState([]);
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
    let data = new FormData();
    data.append("user_id", newComment.user_id);
    data.append("streak_id", newComment.streak_id);
    data.append("info", newComment.info);
    data.append("media", newComment.media);
    data.append("cheer", newComment.cheer);
    data.append("laugh", newComment.laugh);
    try{
      let res = await axios.post('/api/comments', data)
      history.push(`/streaks/${id}`)
      window.location.reload()
    }catch(err){
      alert('err in handleNewComment')
    }
  }

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    // appending 'file' with image info to pass can retieve in params
    setNewComment({ ...newComment, media: fileItems[0].file });
  };

  const handleChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <div className='newComment'>
        <h2>New Comment:</h2>
        <form onSubmit={handleNewComment}>
          <Form.Control value={newComment.info} label='Comment:' placeholder='Enter Your Comment Here' name='info' onChange={handleChange}/>
          <h4>Attach Media:</h4>
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowMultiple={false}
                name="media"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Button type='submit'>Post Comment</Button>
        </form>
      </div>
    </>
  )
}

export default CommentNew