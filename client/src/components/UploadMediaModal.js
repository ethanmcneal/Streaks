import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UploadMediaModal = (props) => {
   const {streakPunishment} = props

   const [media, setMedia] = useState(null)

   const handleChange = (e) => {
        setMedia(e.target.value)
   }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Upload Media
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Upload Proof that you completed your punishment from losing this streak:</h4>
            <p>
              losers have to submit proof of: {streakPunishment}
            </p>
            <p>
                add a link to a YouTube, TikTok, or Imgur link below
            </p>
            <Form onSubmit={han}>
                <Form.Label>Media URL</Form.Label>
                <Form.Control required style={{width: '500px'}} 
                onChange={handleChange}/>
                
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default UploadMediaModal