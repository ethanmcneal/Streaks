import axios from "axios"
import { useDebugValue, useEffect, useLayoutEffect, useState } from "react"

const useAxiosGet = (url) => {
   const [data, setData]= useState([])
   useEffect(() => {
       getData()
   },[])

   const getData = async() =>{
       try {
           let res = await axios.get(url)
           setData(res.data)
       } catch (error) {
           console.log(error)
           
       }
   }
   return{data: data}
}

export default useAxiosGet