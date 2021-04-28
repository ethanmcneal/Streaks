import React,{useState,useContext} from 'react'
import { Form, Button, Col, Alert } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import UserImageEdit from './UserImageEdit';
import '../style_components/UserEdit.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UserEdit = (props) => {
  const [ files, setFiles ] = useState([]) 
  const { user, handleUserEdit } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);
  const [modalShow, setModalShow] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false)
  
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
    if(e.target.name == 'email'){setInfoAlert(true)}
      
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5em'}}>
    <Form onSubmit={handleSubmit} className='userEdit'>
        <Form.Group as={Col} style={{ width: "25em" }}>
          <Form.Label style={{display: 'flex', justifyContent: 'center', color:'white'}}>
            <h3>Username</h3>
          </Form.Label>
          <Form.Control
            name="nickname"
            type="text"
            value={userState.nickname}
            onChange={handleChange}
          />
        </Form.Group>

      <Form.Group as={Col} style={{ width: "25em" }}>
        <Form.Label style={{display: 'flex', justifyContent: 'center', color:'white'}}>
          <h3>Email</h3>
          </Form.Label>
        <Form.Control
          name="email"
          value={userState.email}
          onChange={handleChange}
        />
        {infoAlert && <Alert variant='warning'>Warning: Changing Email will log you out and require you to log back in.</Alert>}
      </Form.Group>
      
      <div style={{display: 'flex', justifyContent:'center', width:'25em', marginTop: '12px'}}>
        
      <Button type="submit" variant="warning" className="button-orange"> Submit </Button>
      <>
        <Button style={{textAlign:'center', marginLeft:'12px'}} variant="warning" className="button-orange" onClick={() => setModalShow(true)} >
          Update User Image
        </Button>
        <UserImageEdit
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
      </div>
    </Form>
    </div>
  );
};
export default UserEdit;