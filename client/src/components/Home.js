import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () =>{

    const [test, setTest] = useState([])

    useEffect(()=>{
        getTest()
    },[])
    const getTest = async() => {
        try { 
        let res = await axios.get('/api/api_test')
        setTest(res.data.hello)
        console.log(res.data.hello)
            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
        <h1>Home Page Here {`${test}`}</h1>
        
        </div>
    )
}

// class component

// class Home extends React.Component {


//     render(){
//         return (
//             <div>
//                 <h1>Home Page here</h1>
//             </div>
//         )
//     }
// }
export default Home