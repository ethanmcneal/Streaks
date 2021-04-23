
import React,{useState,useContext} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UserEdit = (props) => {
  const [ files, setFiles ] = useState([]) 
  const { user, handleUserEdit } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(userState.email)){
      handleUserEdit(e, userState, props.history)
    } else {
      alert('You entered an invalid email address. Format test@test.com')
    }
  };

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    // appending 'file' with image info to pass can retieve in params    <--- FROM CommentEdit.js - ( CHANGE ) --
    setUserState({ ...userState, image: fileItems[0].file });
  };

  const handleChange = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };


  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} style={{ width: "20em" }}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="nickname"
            type="text"
            minLength="4"
            value={userState.nickname} 
            onChange={handleChange}
          />
        </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          as="textarea"
          // type='email'
          minLength="8"
          value={userState.email}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group as={Col}>
          <Form.Label>Media</Form.Label>
          {/* <Form.Control
            name="image"
            type="text"
            value={userState.image}
            onChange={handleChange}
          /> */}
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowMultiple={false}
                name="image"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Form.Group>

      <br></br>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};
export default UserEdit;