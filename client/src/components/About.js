// import React from 'react'
import {Card, CardGroup, Container, ListGroup, ListGroupItem, Image, Row, Col, Jumbotron} from 'react-bootstrap'
import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'


const About = () => {
    return (
        <>
        <Container>
        <Card className="bg-dark text-white">
                <Card.Img  style={{ height:"120px"}} src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Card image" />
            <Card.ImgOverlay>
                    <Card.Title>About Streaks</Card.Title>
                    <Card.Text>
                    The Streaks application was built as a final project in the DevPoint Labs full-time web development bootcamp. This 11 week class gives students skills in React.js, Ruby on Rails, common development resources and more. After many hours working incredibly hard and putting their knowledge to the test, the developers of this site are proud to present you with this application. 
                    </Card.Text>
                    </Card.ImgOverlay>
            </Card>
            </Container>

            <br />

            <Container>
          <Item.Group >
                <Item>
                <Item.Image size='tiny' src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A" />

                <Item.Content>
                    <Item.Header>Ethan McNeal</Item.Header>
                    <Item.Description>I have years of customer service since the day I turned 16, working in many different slices from retail, dining, and an inbound call center. Excellent customer service is something I excel at and past employers can vouch for that. I also succeeded very well in a sales environment when working with Extra Space. I am very proud of my strong work ethic and reliability as an employee. 
                    </Item.Description>
                    <a target="_blank" href='https://www.linkedin.com/in/ethan-mcneal-16265b1a0'><Icon link size="large" color="blue" name="linkedin square" /></a>
                </Item.Content>
                </Item>
                
                <Item>
                <Item.Image size='tiny' src="https://media-exp1.licdn.com/dms/image/C5603AQHXuvDTbN81Rg/profile-displayphoto-shrink_400_400/0/1517834646234?e=1623888000&v=beta&t=7BGl0MZ4dWeahjJqWF0HSFG2O1vAcwRs9pyrxlXtCBY" />

                <Item.Content>
                    <Item.Header>Jedediah Wood</Item.Header>
                    <Item.Description>To finance my education, for the past 10 years I have largely worked in construction; an opportunity to apply my hands-on, technical, practical mechanical skills. With a newly earned Political Science B.S. degree with an engineering background, I am now seeking to apply my developed mathematical, analytical, research, writing, teamwork, and leadership skills to an exiting new career in technology! 
                    </Item.Description>
                    <a target="_blank" href='https://www.linkedin.com/in/jedediah-wood-thebest'><Icon link size="large" color="blue" name="linkedin square" /></a>
                </Item.Content>
                </Item>

                <Item>
                <Item.Image size='tiny' src="https://media-exp1.licdn.com/dms/image/C4E03AQEYq0ReSJkSkA/profile-displayphoto-shrink_400_400/0/1617303110374?e=1623888000&v=beta&t=-owEyIt-SkbirOPM2lPk2KazKZoLc_UFVUmxAE1UlKk" />

                <Item.Content>
                    <Item.Header>Callice Austin</Item.Header>
                    <Item.Description>I have always been a hardworking and fun person to be around. I love being able to take pride in the work that I do. I am a problem solver, no matter how small I'll try to figure it out.</Item.Description>
                    <a target="_blank" href='https://www.linkedin.com/in/callice-austin'><Icon link size="large" color="blue" name="linkedin square" /></a>
                 
                </Item.Content>
                </Item>
                <Item>
                <Item.Image size='tiny' src="https://media-exp1.licdn.com/dms/image/C4E03AQHDSXDfx0YIBQ/profile-displayphoto-shrink_400_400/0/1606851714540?e=1623888000&v=beta&t=ql_uVyueFUrdv_Sgn2hA52oRtWPfg_oxDF95O_kqqWs" />

                <Item.Content>
                    <Item.Header>Erin Zimmerman</Item.Header>
                    <Item.Description>Erin has found a passion in web development and feels she can make a difference while leading a fulfilling work-life balance. Previously a Training Specialist at UHEAA and a Trainer at Cotiviti. Experience training call center agents and record evaluation systems agents. Experience in public speaking, basic data analysis, technical writing, instructional design, leadership, and more.
                    </Item.Description>
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

// https://unsplash.com/photos/Xaanw0s0pMk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink