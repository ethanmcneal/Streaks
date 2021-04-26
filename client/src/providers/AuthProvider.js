import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) =>{ 
    const [user, setUser] = useState(null)
    const [emailAlert, setEmailAlert] = useState(false)
    const [loginAlert, setLoginAlert] = useState(false)
    const {defaultNickname, defaultEmail, defaultImage} = props

    const [editUser, setEditUser] = useState({
        // id: user.id,
        nickname: defaultNickname, 
        email: defaultEmail, 
        image: defaultImage,
      })

    const handleRegister = async(user, history) => {
        try {
            let res = await axios.post('/api/auth', user)
            setUser(res.data.data)
            // console.log(user)
            history.push('/')
            
        } catch (error) {
            
            console.log(error)
            setEmailAlert(true)
            alert('email invalid or already in use')
        }
    }

    

    const handleLogin = async(user, history) => {
        try {
            let res = await axios.post('api/auth/sign_in', user)
            setUser(res.data.data)
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
            setLoginAlert(true)
        }
    }

    const handleLogout = async() => {
        try {
            await axios.delete('/api/auth/sign_out')
            setUser(null)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleUserEdit = async(e, user, history) => {
        e.preventDefault()
        let data = new FormData();
        data.append("nickname", user.nickname);
        data.append("email", user.email);
        data.append("image", user.image);
        try{
            let res = await axios.put(`/api/user/${user.id}`, data)
            setUser(res.data);
            history.push('/')
        }catch(err) {
          console.log("Error in handleUserEdit in Auth");
        }
    }

    return(
        <AuthContext.Provider value={{
            user: user,
            emailAlert: emailAlert,
            loginAlert: loginAlert,
            setUser: setUser,
            handleRegister: handleRegister,
            handleLogin: handleLogin,
            handleLogout: handleLogout,
            handleUserEdit: handleUserEdit}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider