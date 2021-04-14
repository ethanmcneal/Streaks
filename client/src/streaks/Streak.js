import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, CardGroup, Header } from "semantic-ui-react"
import CommentNew from "../comments/CommentNew"
import CommentsStreak from "../comments/CommentsStreak"
import CardContainer from "../style_components/CardContainer"

const Streak = () => {

    const {id} = useParams()

    const [streak, setStreak] = useState(null)
    const [users, setUsers] = useState(null)

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
            let res = await axios.get(`/api/streaks_users/${id}`)
            console.log(res.data)
            setStreak({name: res.data[0].streak_name, description:res.data[0].description, reward:res.data[0].reward, punishment:res.data[0].punishment })
            setUsers(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderUsers = () => {
        return users.map(user => {
            return(
                <div>
                    <Segment.Group horizontal>
                        <Segment>{user.nickname}</Segment>
                        <Segment>{user.email}</Segment>
                    </Segment.Group>
                </div>
            )
        })
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
            {users && <Segment.Group>{renderUsers()}</Segment.Group>}
            <div>
            <CardGroup>
                <CommentNew />
            </CardGroup>
        <h2>Comments streak show</h2>
         <CommentsStreak />
         </div>
        </div>
    )
}

export default Streak