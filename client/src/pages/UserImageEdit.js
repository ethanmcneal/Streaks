import React, {useState, useContext} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { AuthContext } from "../providers/AuthProvider";


const UserImageEdit = (props) => {
  const [ files, setFiles ] = useState([]) 
  
  const { user, handleUserEditImage } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);

  const handleUpdate = (fileItems) => {
    setFiles(fileItems);
    setUserState({ ...userState, image: fileItems[0].file })
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEditImage(e, userState, props.history)
  };


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
            Update User Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Update User Image</h4>
          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
          {/* <Form.Label>Media</Form.Label> */}
          <Form onSubmit={handleSubmit}>
          <FilePond
                files={files}
                onupdatefiles={handleUpdate}
                allowRemove={true}
                allowMultiple={false}
                allowRevert={true}
                name="image"
                labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Button type="submit"> Submit </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default UserImageEdit