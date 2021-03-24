import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import Button from "../style_components/Button"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"

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
        <CardContainer>
            <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input
            label='Email'
            value={email}
             autoFocus
             required
             name='email'
             onChange={(e)=> setEmail(e.target.value)}/>
             <p>Password</p>
             <Input
            label='Password'
            value={password}
             autoFocus
             required
             name='password'
             onChange={(e)=> setPassword(e.target.value)}/>
             
             <Button type='submit'>Login</Button>

            
        </Form>
        </CardContainer>
    )
}

export default Login