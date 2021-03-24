import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) =>{ 

    const [user, setUser] = useState(null)

    const handleRegister = async(user) => {
        try {
            let res = await axios.post('/api/auth', user)
            setUser(res.data.data)
            console.log(user)
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <AuthContext.Provider value={{
            user: user,
            x:'dababy',
            handleRegister: handleRegister,}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider