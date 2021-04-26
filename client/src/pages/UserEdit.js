import React,{useState,useContext} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import UserImageEdit from './UserImageEdit';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UserEdit = (props) => {
  const [ files, setFiles ] = useState([]) 
  const { user, handleUserEdit } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);
  const [modalShow, setModalShow] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEdit(e, userState, props.history)
  };

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    // fileItems === 'true' ? setUserState({ ...userState, image: fileItems[0].file }) : setUserState({ ...userState }); <-- allows remove staged image, but breaks almost everything else
    setUserState({ ...userState, image: fileItems[0].file })
    
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
            value={userState.nickname}
            onChange={handleChange}
          />
        </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          value={userState.email}
          onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group as={Col}>
          <Form.Label>Media</Form.Label>
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowRemove={true}
                allowMultiple={false}
                allowRevert={true}
                name="image"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </Form.Group>

      <br></br>
      <Button type="submit"> Submit </Button>
      
      
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Update User Image
        </Button>
        <UserImageEdit
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

    </Form>
  );
};
export default UserEdit;

{/* <Form.Label>Media</Form.Label>
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowRemove={true}
                allowMultiple={false}
                allowRevert={true}
                name="image"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          /> */}