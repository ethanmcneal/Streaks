import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, CardGroup, Carousel, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
// import { Button, CardGroup, Header, Segment } from "semantic-ui-react"
import CommentNew from "../comments/CommentNew"
import CommentsStreak from "../comments/CommentsStreak"
import Thumbnail from "../components/Thumbnail"
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
                    <ListGroup horizontal>
                        <ListGroup.Item>{user.nickname}</ListGroup.Item>
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                    </ListGroup>
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
            <div style={{display: 'flex', justifyContent:'space-between'}}>
            {users && <ListGroup>{renderUsers()}</ListGroup>}
           {streak && <Container className="mt-5 mb-5 justify-content-center">
        <Card style={{width:"1000px", marginLeft:'10em'}} >
          {/* <Thumbnail url={streak.name} /> */}
          <Carousel>
  <Carousel.Item>
    <img style={{maxHeight: '400px'}}
      className="d-block w-100"
      src="https://via.placeholder.com/100"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{maxHeight: '400px'}}
      className="d-block w-100"
      src="https://via.placeholder.com/100"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{maxHeight: '400px'}}
      className="d-block w-100"
      src="https://via.placeholder.com/100"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
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
          </Card.Body>
        </Card>
        </Container>}
            
            </div>
            <div>
            <CardGroup>
                <CommentNew />
            </CardGroup>
        <h2>Comments streak show</h2>
         <CommentsStreak />
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