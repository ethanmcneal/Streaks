import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) =>{ 
    

    const [user, setUser] = useState(null)

    const handleRegister = async(user, history) => {
        try {
            let res = await axios.post('/api/auth', user)
            setUser(res.data.data)
            console.log(user)
            history.push('/')
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = async(user, history) => {
        try {
            let res = await axios.post('api/auth/sign_in', user)
            setUser(res.data.data)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async() => {
        try {
            await axios.delete('api/auth/sign_out')
            setUser(null)
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <AuthContext.Provider value={{
            user: user,
            setUser: setUser,
            handleRegister: handleRegister,
            handleLogin: handleLogin,
            handleLogout: handleLogout}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider