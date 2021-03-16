import { useState } from "react"
import Button from "./Button"

import CardContainer from "./CardContainer"
import Input from "./Input"

const RegisterForm = () =>{
    const [password, setPassword] = useState(null)
    const [alert, setAlert] = useState(false)

    var format = /!@#%&/

    

    const handleSubmit = () =>{
       
       if (password.length <= 8) {
        setAlert(true)
        console.log(password)
    } else {
        console.log('registered')
        console.log(password)
    }
}

    return(
        <CardContainer>
            <h1>Register</h1>
            
                <p>username</p>
                <Input placeholder='username'/>
                <p>password</p>
                {alert && <p>password must have 8 characters</p>}
                <Input
                onChange = {(e)=>{setPassword(e.target.value)}, (e) => console.log(password)}
                placeholder='password'/>
                <Button type='button' onClick={handleSubmit}>Register</Button>
            
        </CardContainer>
    )

}

export default RegisterForm