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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CommentEdit = (props) => {
  const [files, setFiles] = useState([])
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
    let data = new FormData();
    data.append("user_id", editComment.user_id);
    data.append("streak_id", editComment.streak_id);
    data.append("info", editComment.info);
    data.append("media", editComment.media);
    data.append("cheer", editComment.cheer);
    data.append("laugh", editComment.laugh); 
    try{
      // todo fix the axios garbage
      // console.log('def comm id', defaultCommentID)
      // console.log('editcommenttttt', data)

      let res = await axios.put(`/api/comments/${defaultCommentID}`, data)
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
    <>
    <div>
      <form onSubmit={handleEditComment}>
      <input value={editComment.info} label='Comment:' placeholder={editComment.info} name='info' onChange={handleChange}/>
      
      <br/>
      <FilePond
            files={files}
            onupdatefiles={handleUpdate}
            allowMultiple={false}
            name="media"
            labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
      {/* <input value={editComment.media} label='Other Media:' placeholder='media' name='media' onChange={handleChange}/> */}
      <Button type='submit'>Edit Comment</Button>
      </form>
    </div>
    </> 
  )
}

export default CommentEdit