import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from '../providers/AuthProvider'

const FetchUser = (props) => {

    const [loaded, setLoaded] = useState(false)
    
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        authCheck()
    })

    const authCheck = async() => {
        if( user || !localStorage.getItem('access-token')){
            setLoaded(true)
            return
        }

        try {
            const res= await axios.get('/api/auth/validate_token')
            setUser(res.data.data)
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoaded(true)
        }
    }
    return loaded ? props.children : null
}

export default FetchUser