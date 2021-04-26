import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import '../style_components/register.css'
import {Button} from 'react-bootstrap'
import FormattedMessage from "../style_components/FormattedMessage"
import NavBar from '../components/Navbar';
import icon from '../images/FlameIcon.png'


const Register = () => {
    const {handleRegister, emailAlert} = useContext(AuthContext)
    const [confirmationAlert, setConfirmationAlert] = useState(false)
    const [alert, setAlert] = useState(false)
    const [email, setEmail] = useState(null)
    const [nickname, setNickname] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({nickname, email, password, passwordConfirmation})
        let pattern = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
       if (!pattern.test(password)){
        setAlert(true)
       }else if(password !== passwordConfirmation){
        setAlert(false)
        setConfirmationAlert(true)
        }else{
        handleRegister({nickname, email, password, passwordConfirmation, image:icon}, history)
        }
    } 

    // let image = 'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
    return(

       <>
      <NavBar />
        <div className='register'>   
            <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
            <p>UserName</p>
        <input
            label='UserName'
            value={nickname}
             autoFocus
             required
             name='nickname'
             onChange={(e)=> setNickname(e.target.value)}/>
            <p>Email</p>
            {emailAlert && <FormattedMessage type='alert'>Email Invalid or already in use*</FormattedMessage> }
            <input
            label='Email'
            value={email}
             autoFocus
             required
             name='email'
             onChange={(e)=> setEmail(e.target.value)}/>
             <p>Password (minimum of 7 characters)</p>
             <input
            label='Password'
            type='password'
            value={password}
             autoFocus
             required
             name='password'
             onChange={(e)=> setPassword(e.target.value)}/>
             <p>Confirm Password</p>
             <input
            label='Confirm Password'
            value={passwordConfirmation}
            type='password'
             autoFocus
             required
             name='passwordConfirmation'
             onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
             {alert && <FormattedMessage type='alert'>Password must be more than 7 characters and contain at least one symbol, one capital, and one number*</FormattedMessage> }
             {confirmationAlert && <FormattedMessage type='alert'>Passwords do not match*</FormattedMessage> }
             <Button type='submit' style={{backgroundColor: 'rgb(245 155 13)', margin: '2em'}}>Register</Button>            
        </Form>
        </div>
        </>
    )
}

export default Register