import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider"
import Button from "../style_components/Button"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"
import NavBar from '../components/Navbar';

const Register = () => {
    const {handleRegister} = useContext(AuthContext)
    const [email, setEmail] = useState('ethan.mcneal@gmail.com')
    const [nickname, setNickname] = useState('ethan.mcneal')
    const [password, setPassword] = useState('thisisapassword')
    const [passwordConfirmation, setPasswordConfirmation] = useState('thisisapassword')
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({nickname, email, password, passwordConfirmation})
        handleRegister({nickname, email, password, passwordConfirmation, image}, history)
    } 

    let image = 'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
    return(
        <>
        <NavBar />
        <CardContainer>
            <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
            <p>UserName</p>
        <Input
            label='UserName'
            value={nickname}
             autoFocus
             required
             name='nickname'
             onChange={(e)=> setNickname(e.target.value)}/>
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
             <p>Confirm Password</p>
             <Input
            label='Confirm Password'
            value={passwordConfirmation}
             autoFocus
             required
             name='passwordConfirmation'
             onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
             <Button type='submit'>Register</Button>

            
        </Form>
        </CardContainer>
        </>
    )
}

export default Register