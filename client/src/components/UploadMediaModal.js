import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UploadMediaModal = (props) => {
   const {streakPunishment, userStreakId} = props

   const [media, setMedia] = useState(null)

   const handleChange = (e) => {
        setMedia(e.target.value)
   }

   const handleSubmit = async() => {
       try {
           let res = await axios.patch(`api/user_streaks/${userStreakId}`, {media: media})
       } catch (error) {
           console.log(error)
       }
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
            <Form onSubmit={handleSubmit}>
                <Form.Label>Media URL</Form.Label>
                <Form.Control required style={{width: '500px'}} 
                onChange={handleChange}/>
                <Button variant="warning" className='button-orange' type='submit'>Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" className='button-orange' onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default UploadMediaModal