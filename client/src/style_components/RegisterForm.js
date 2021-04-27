import axios from "axios"
import { useState } from "react"
import Button from "./Button"

import CardContainer from "./CardContainer"
import FormattedMessage from "./FormattedMessage"
import Input from "./Input"

const RegisterForm = () =>{
    // const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    var x =''
    //Me and Max were trying to figure this bit out for awhile, and eventually found that if you use the match function on this pattern, it would require both a symbol and a letter to pass the validation

    var pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    const handleSubmit = () =>{
       
       if (x.length <= 7 && x.match(pattern)) {
        setAlert(true)
        console.log(x)
    } else if(x.match(pattern)) {
        console.log('second')
        console.log(x)
        setAlert(true)
    } else {
        console.log('registered')
        console.log(x)
        setAlert(false)
    }
}

    return(
        <CardContainer>
            <h1>Register</h1>
            
                <p>username</p>
                <Input placeholder='username'/>
                <p>password</p>
                {alert && <FormattedMessage type={'alert'}>password must have 8 characters, a symbol, and a capital</FormattedMessage>}
                <Input
                onChange = {(e)=>{x = (e.target.value)}}
                placeholder='password'/>
                <Button type='button' onClick={handleSubmit}>Register</Button>
            
        </CardContainer>
    )

}

export default RegisterForm