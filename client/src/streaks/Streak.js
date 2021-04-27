import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Card, CardGroup, Carousel, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom"
import Timer from "../components/Timer"
import { AuthContext } from "../providers/AuthProvider"
import '../style_components/basicstyle.css'
import CommentTab from "../components/CommentTab"
import UserAvatar from "../components/UserAvatar"
import trophy from '../images/trophyIcon.png'
import skull from '../images/risk-skull.png'


const Streak = () => {

    const {id} = useParams()
    const history = useHistory()
    const [winner, setWinner] = useState(null)
    const [creator, setCreator] = useState(null)
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
            getCreator(res.data[0].owner)
            // console.log(res.data[0].owner, 'owner')
            // console.log('streak.owner1', streak.owner)
        } catch (error) {
            console.log(error)
        } finally {
            
        }
    }

    const closeStreak = async(b) => {
        try {
            let res = axios.patch(`/api/streaks/${streak.streak_id}`, {open: b})
            console.log('in gere', b)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const setChampion = async(champion) => {
        try {
            setWinner(champion) 
            let res = await axios.patch(`/api/user_streaks/${champion.id}`, {status: 'won'})
            // console.log(res.data)
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

    const getCreator = async(id) => {
        try {
            let res = await axios.get(`/api/user/${id}`)
            console.log(res.data)
            setCreator(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderCreator = () => {
        return(
            <div>
            <div style={{display: 'flex'}}>
                <UserAvatar userImage={creator.image}/>
                <div>
                <h3 style={{marginLeft: '1em'}}>{streak.name}</h3>
                <p style={{color: 'black', textAlign: 'left',marginLeft: '1.5em'}}>{streak.description}</p>
                <div style={{display: 'flex'}}>
            <ListGroupItem style={{color: 'rgb(141 129 140)'}}>Created by:</ListGroupItem>  
            <ListGroupItem style={{color: 'rgb(43 174 173)'}}>{creator.nickname}</ListGroupItem>
            </div>
            </div>
            </div>
            <div>
            <div style={{display: 'flex'}}>
                <img src={trophy} style={{width: '25px', height: '25px', marginLeft: '5em'}}/>
                <ListGroupItem>Reward:</ListGroupItem>
            <ListGroupItem>{streak.reward}</ListGroupItem>
            </div>
            <div style={{display: 'flex'}}>
                <img src={skull} style={{width: '25px', height: '25px', marginLeft: '5em'}}/>
                <ListGroupItem>Punishment:</ListGroupItem>
            <ListGroupItem>{streak.punishment}</ListGroupItem>
            </div>
            </div>
            
            </div>
        )
    }

    const renderUsers = () => {
        return users.map(user => {
            return(
            <div style={{width: '18em'}}>
                <div style={{display: 'flex', margin: '1em'}} >
                        <UserAvatar userImage={user.image}/>
                        <div>
                        <ListGroup.Item>{user.nickname}</ListGroup.Item>
                        <p style={{color: 'black', textAlign: 'left', marginLeft: '1.2em'}}>{user.status}</p>  
                        </div>
                </div>           
            </div>
            )
           
        })
        
    }
    return(
        <>
            {/* <Button className='button-orange' onClick={history.goBack}>Back</Button> */}
           
            <div>
              <Card className="peopleList" style={{marginLeft: '10em'}}>
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
            {/* <Card.Title><h4>{streak.name}</h4></Card.Title> */}
             {creator && <div> {renderCreator()}</div>}
          </Card.Body>
          <ListGroup className="list-group-flush">
          {/* <ListGroupItem>{streak.open == true ? 'joinable' : 'private'}</ListGroupItem> */}
          </ListGroup>
            <div style={{display: 'flex', justifyContent: 'center'}}>
          
            {user.id === streak.owner && <Button className='button-orange' onClick={deleteStreak}>Delete Streak</Button>}
            {user.id === streak.owner && <Link  to={`/streaks/edit/${id}`}><Button>Edit Streak</Button></Link>}
            {user.id === streak.owner && streak.open == false ? <Button className='button-orange' onClick={()=>closeStreak(true)}>Make Streak Public</Button> : 
            user.id === streak.owner ? <Button className='button-orange' onClick={()=>closeStreak(false)}>Make Streak Private</Button> : '' }
            </div>
          
          <Card.Body >
            <CommentTab ></CommentTab>
          </Card.Body>
        </Card>
        </Container>}
            
            </div>
            
        
        
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