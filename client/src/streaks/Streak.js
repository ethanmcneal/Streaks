import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Header } from "semantic-ui-react"
import CardContainer from "../style_components/CardContainer"

const Streak = () => {

    const {id} = useParams()

    const [streak, setStreak] = useState(null)

    useEffect(()=> {
        getStreak()
    },[])

    const deleteStreak = async() => {
        try {
            await axios.delete(`/api/streaks/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const getStreak = async() => {
        try {
            let res = await axios.get(`/api/streaks/${id}`)
            setStreak(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <Link to='/streaks'>
            <Button>Back to streaks</Button>
            </Link>
            <h1>Streak show</h1>
           {streak && <CardContainer>
                <h1>{streak.name}</h1>
                <h3>The challenge = {streak.description}</h3>
            <h4>Success = {streak.reward}</h4>
            <h4>Failure = {streak.punishment}</h4>
                <Button onClick={deleteStreak}>Delete</Button>
            </CardContainer>}
        </div>
    )
}

export default Streak