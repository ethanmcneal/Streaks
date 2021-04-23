import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import {Button} from "react-bootstrap"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"
import '../style_components/register.css'

const Login = () => {
    const {handleLogin} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password})
        handleLogin({ email, password}, history)
    } 
    return(
        <div className='register'>
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
            value={password}
             autoFocus
             required
             name='password'
             onChange={(e)=> setPassword(e.target.value)}/>
             
             <Button style={{backgroundColor: 'rgb(245 155 13)', margin: '2em'}} type='submit'>Login</Button>

            
        </Form>
        </div>
    )
}

export default Login