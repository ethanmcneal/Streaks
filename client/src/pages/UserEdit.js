// import React,{useState,useContext} from 'react'
// import { Form, Button, Col } from "react-bootstrap";

// const UserEdit = ({ hide }) => {
//   const [userState, setUserState] = useState(user);

//   return(
//     <h1>UserEdit.js</h1>
//   )
// }
// export default UserEdit;                                  <---------- JED'S CODE ^ ^ ^ ^ 





//                                         | | | |              
// --  BELOW IS TEST DANI CODE(altered) -- V-V-V-V




import React,{useState,useContext} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";

const UserEdit = (props) => {
  const { user, handleUserEdit } = useContext(AuthContext);
  const [userState, setUserState] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEdit(userState, props.history)
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
          as="textarea"
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
        </Form.Group>

      <br></br>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};
export default UserEdit;