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
import '../style_components/basicstyle.css'
import CommentTab from "../components/CommentTab"
import StreakEditForm from "./StreakEditForm"
import UserAvatar from "../components/UserAvatar"
import { Segment } from "semantic-ui-react"


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
            history.push('/streaks')
        } catch (error) {
            console.log(error)
        }
    }


    const getStreak = async() => {
        try {
            let res = await axios.get(`/api/streaks_users/${id}`)
            console.log('getstreak', res.data)
            setStreak({name: res.data[0].streak_name, description:res.data[0].description, reward:res.data[0].reward, punishment:res.data[0].punishment, timeline:res.data[0].timeline, owner:res.data[0].owner, open:res.data[0].public, streak_id:res.data[0].streak_id})
            console.log(res.data)
            setUsers(res.data)
            winnerCheck(res.data)
            console.log('user id', user.id)
            console.log('streak.owner1', streak.owner)
        } catch (error) {
            console.log(error)
        } finally {
            
        }
    }

    const closeStreak = async() => {
        try {
            let res = axios.patch(`/api/streaks/${streak.streak_id}`, {open: false})
        } catch (error) {
            console.log(error)
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
      ongoingUsers.push({name: user.nickname, id:user.id}) : '')
        if(ongoingUsers.length == 1){
            setChampion(ongoingUsers[0])
        }
    }

    const renderUsers = () => {
        return users.map(user => {
            return(
                <div>
                    <ListGroup horizontal>
                    <ListGroup.Item>
                        <UserAvatar userImage={user.image}/>
                        </ListGroup.Item>
                        <ListGroup.Item>{user.nickname}</ListGroup.Item>
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <ListGroup.Item>{user.status}</ListGroup.Item>

                    </ListGroup>
                </div>
            )
           
        })
        
    }
    return(
        <>
        <Segment>
            
         
        <div>
            <Button className='button-orange' onClick={history.goBack}>Back</Button>
           
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
                          <br/>
                          <br/>
                    </div> 
                    </div>: <Timer timeline={streak.timeline} users={users} closeStreak={closeStreak} open={streak.open}/>}
          
          <Card.Body>
            <Card.Title><h4>{streak.name}</h4></Card.Title>
            <p>{console.log('streak.owner2', streak.owner)}</p>
            <p>{console.log('streaknalone', streak)}</p>
            <Card.Text>
              {streak.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>{streak.open == true ? 'joinable' : 'private'}</ListGroupItem>
            <ListGroupItem>{streak.reward}</ListGroupItem>
            <ListGroupItem>{streak.punishment}</ListGroupItem>
            {user.id === streak.owner && <Button className='button-orange' onClick={deleteStreak}>Delete Streak</Button>}
            {user.id === streak.owner && <Link  to={`/streaks/edit/${id}`}><Button>Edit Streak</Button></Link>}
            {user.id === streak.owner && <Button className='button-orange' onClick={closeStreak}>Close Streak</Button> }
          </ListGroup>
          <Card.Body >
            <CommentTab ></CommentTab>
          </Card.Body>
        </Card>
        </Container>}
            
            </div>
            
        </div>
        </Segment>
</>
    )
}

export default Streak

// <CardContainer>
// <h1>{streak.name}</h1>
// <h3>The challenge = {streak.description}</h3>
// <h4>Success = {streak.reward}</h4>
// <h4>Failure = {streak.punishment}</h4>
// <Button onClick={deleteStreak}>Delete</Button>
// </CardContainer>