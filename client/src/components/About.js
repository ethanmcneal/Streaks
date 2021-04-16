// import React from 'react'
import {Card, CardGroup, Container, ListGroup, ListGroupItem, Image, Row, Col, Jumbotron} from 'react-bootstrap'
import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'


const About = () => {
    return (
        <>
       <Card className="bg-dark text-white">
            <Card.Img  style={{ height:"150px"}} src="https://images.unsplash.com/photo-1616188053027-54f1f4a30668?ixlib=rb-1.2.1" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>About Streaks</Card.Title>
                <Card.Text>
                dunno, probably information about the app, maybe how to use it?
                </Card.Text>
               
            </Card.ImgOverlay>
            </Card>
            <br />
            <Container>
          <Item.Group >
                <Item>
                <Item.Image size='small' src="https://images.unsplash.com/photo-1616188053027-54f1f4a30668?ixlib=rb-1.2.1" />

                <Item.Content>
                    <Item.Header>Ethan McNeal</Item.Header>
                    <Item.Description>about us here!</Item.Description>
                    <Icon size="large" color="blue" name="linkedin square" />
                </Item.Content>
                </Item>
                
                <Item>
                <Item.Image size='small' src="https://images.unsplash.com/photo-1616188053027-54f1f4a30668?ixlib=rb-1.2.1" />

                <Item.Content>
                    <Item.Header>Jedediah Wood</Item.Header>
                    <Item.Description>about us here!</Item.Description>
                    <Icon size="large" color="blue" name="linkedin square" />
                </Item.Content>
                </Item>

                <Item>
                <Item.Image size='small' src="https://images.unsplash.com/photo-1616188053027-54f1f4a30668?ixlib=rb-1.2.1" />

                <Item.Content>
                    <Item.Header>Callice Austin</Item.Header>
                    <Item.Description>about us here!</Item.Description>
                    <Icon size="large" color="blue" name="linkedin square" />
                 
                </Item.Content>
                </Item>
                <Item>
                <Item.Image size='small' src="https://images.unsplash.com/photo-1616188053027-54f1f4a30668?ixlib=rb-1.2.1" />

                <Item.Content>
                    <Item.Header>Erin Zimmerman</Item.Header>
                    <Item.Description>about us here!</Item.Description>
                    <a target="_blank" href='https://www.linkedin.com/in/erin-zimmerman'><Icon link size="large" color="blue" name="linkedin square" /></a>
                </Item.Content>
                </Item>
            </Item.Group>
            
            </Container>
            <br />
        </>
    )
}
export default About