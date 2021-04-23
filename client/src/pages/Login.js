import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import {Button} from "react-bootstrap"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"
import '../style_components/register.css'
import FormattedMessage from "../style_components/FormattedMessage"
import NavBar from '../components/Navbar';

const Login = () => {
    const {handleLogin, loginAlert} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password})
        handleLogin({ email, password}, history)
    } 
    return(
      
          <>
      <NavBar />
        <div className='register'      
        
            <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
            label='Email'
            value={email}
             autoFocus
             required
             name='email'
             onChange={(e)=> setEmail(e.target.value)}/>
             <p>Password</p>
             <input
            label='Password'
            type='password'
            value={password}
             autoFocus
             required
             name='password'
             onChange={(e)=> setPassword(e.target.value)}/>
             <Button style={{backgroundColor: 'rgb(245 155 13)', margin: '2em'}} type='submit'>Login</Button>
             {loginAlert && <FormattedMessage type='alert'>No users match that email and password</FormattedMessage>}      
        </Form>
        </div>
        </>

    )
}

export default Login