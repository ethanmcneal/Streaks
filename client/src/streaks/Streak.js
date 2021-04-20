import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Card, CardGroup, Carousel, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom"
// import { Button, CardGroup, Header, Segment } from "semantic-ui-react"
import CommentNew from "../comments/CommentNew"
import CommentsStreak from "../comments/CommentsStreak"
import Thumbnail from "../components/Thumbnail"
import Timer from "../components/Timer"
import { AuthContext } from "../providers/AuthProvider"
import CardContainer from "../style_components/CardContainer"
import '../style_components/basicstyle.css'
import CommentTab from "../components/CommentTab"

const Streak = () => {

    const {id} = useParams()
    const history = useHistory()
    const [winner, setWinner] = useState(null)
    const [streak, setStreak] = useState(null)
    const [users, setUsers] = useState(null)
    const {user} = useContext(AuthContext)

    useEffect(()=> {
        getStreak();
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
            setStreak({name: res.data[0].streak_name, description:res.data[0].description, reward:res.data[0].reward, punishment:res.data[0].punishment, timeline:res.data[0].timeline})
            setUsers(res.data)
            winnerCheck(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            
        }
    }
    const setChampion = async(champion) => {
        try {
            setWinner(champion) 
            let res = await axios.patch(`/api/user_streaks/${champion.id}`, {status: 'won'})
            console.log(res.data)
            // window.location.reload()
          } catch(error) {
              console.log(error)
            }
    }

    let ongoingUsers = []

    const winnerCheck = (participants) => {
      participants.map(user => user.status == 'ongoing' || user.status == 'won' ?
      ongoingUsers.push({name: user.nickname, id:user.user_id}) : '')
        if(ongoingUsers.length == 1){
            setChampion(ongoingUsers[0])
        }
    }

    const renderUsers = () => {
        return users.map(user => {
            return(
                <div>
                    <ListGroup horizontal>
                    <ListGroup.Item>{user.avatar}</ListGroup.Item>
                        <ListGroup.Item>{user.nickname}</ListGroup.Item>
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <ListGroup.Item>{user.status}</ListGroup.Item>

                    </ListGroup>
                </div>
            )
        })
    }
    return(
        <div>
            <Button onClick={history.goBack}>Back</Button>
            <div>
              <Card className="peopleList">
            <h3>Participants</h3>
            {users && <ListGroup>{renderUsers()}</ListGroup>}
            </Card>
           {streak && <Container className="mt-5 mb-5 justify-content-center">
             
        <Card className="timer" >
          {/* <Thumbnail url={streak.name} /> */}
         {winner ? <div><div style={{textAlign: 'center', padding:'10em'}}>
                    <h2>{winner.name} is the winner!</h2>
                    </div>
                     <div className="spacer">
                          <br/><br/>
                        </div> </div>: <Timer timeline={streak.timeline}/>}
          
          <Card.Body>
            <Card.Title><h4>{streak.name}</h4></Card.Title>
            <Card.Text>
              {streak.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{streak.reward}</ListGroupItem>
            <ListGroupItem>{streak.punishment}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <CommentTab></CommentTab>
          </Card.Body>
        </Card>
        </Container>}
            
            </div>
            
        </div>

// <CardContainer>
// <h1>{streak.name}</h1>
// <h3>The challenge = {streak.description}</h3>
// <h4>Success = {streak.reward}</h4>
// <h4>Failure = {streak.punishment}</h4>
// <Button onClick={deleteStreak}>Delete</Button>
// </CardContainer>
    )
}

export default Streak