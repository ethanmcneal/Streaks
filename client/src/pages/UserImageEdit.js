import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';                       //<----- try (x) filepond prob JW 
import { Button, Form, Modal } from 'react-bootstrap';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { AuthContext } from "../providers/AuthProvider";
import '../style_components/UserImageEdit.css'


const UserImageEdit = (props) => {
  const [ files, setFiles ] = useState([]) 
  const history = useHistory()
  const { user, handleUserEditImage } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    // fileItems ? setUserState({ ...userState, image: fileItems[0].file }) : setUserState({ ...userState });
    setUserState({ ...userState, image: fileItems[0].file })
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEditImage(e, userState, props.history)
  };

  const refreshPage = () => {
    window.location.reload(false);
  }


    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
            Update User Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowRemove={false}
                allowMultiple={false}
                allowRevert={true}
                iconRemove={true}
                name="image"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Button type="submit" variant="warning" className="button-orange" style={{float:'right'}}> Submit </Button>
          <Button variant="warning" className="button-orange" onClick={refreshPage}>Abort</Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Link>
          <Button onClick={refreshPage}>Cancel</Button>
          </Link>
        </Modal.Footer> */}
      </Modal>
    );
}

export default UserImageEdit

//  ( in close button on modal) onClick={props.onHide}