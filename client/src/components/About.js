// import React from 'react'
import {Card, CardGroup, Container, ListGroup, ListGroupItem, Image, Row, Col, Jumbotron, Carousel} from 'react-bootstrap'
import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'
import '../style_components/basicstyle.css'
import NavBar from './Navbar'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider'


const About = () => {
    const {user} = useContext(AuthContext)

    const smallImages = () =>{
        return(
            <>
            <img className="small-img-about" src={EthanPic}
            alt="First slide" />
            <img className="small-img-about" src={JedPic}
            alt="First slide" />
            <img className="small-img-about" src={CalliePic}
            alt="First slide" />
            <img className="small-img-about" src={ErinPic}
            alt="First slide" />
              </>
        )
    }

    let JedPic = "https://media-exp1.licdn.com/dms/image/C5603AQHXuvDTbN81Rg/profile-displayphoto-shrink_400_400/0/1517834646234?e=1623888000&v=beta&t=7BGl0MZ4dWeahjJqWF0HSFG2O1vAcwRs9pyrxlXtCBY"
    let ErinPic = "https://media-exp1.licdn.com/dms/image/C4E03AQHDSXDfx0YIBQ/profile-displayphoto-shrink_400_400/0/1606851714540?e=1623888000&v=beta&t=ql_uVyueFUrdv_Sgn2hA52oRtWPfg_oxDF95O_kqqWs"
    let EthanPic="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
    let CalliePic="https://media-exp1.licdn.com/dms/image/C4D03AQFIhCfoHD0i9g/profile-displayphoto-shrink_400_400/0/1619211262500?e=1624492800&v=beta&t=7TrICl43t8hDaq0ThoyvTboDiuzw1dzomKwhonGRz3Y"

    return (
        <>
        {!user && <NavBar /> }
        <br />
        <Container>
            <h1 className='style-white'>The Team</h1>
        </Container>
            <br />
            <div style={{borderRadius: '20px !important'}}>
        <Container>
        <Carousel  fade background="rgb(245, 245, 245)">
            <Carousel.Item>
            <div className="carousel-item-all">
                <div className="flex-about-img-left">
                    <img
                        src={EthanPic}
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div className='about-small-images'> 
                        {smallImages()}
                    </div>
                    <div>
                        <h1>Ethan McNeal</h1>
                       
                        <div>
                           I have years of customer service since the day I turned 16, working in many different slices from retail, dining, and an inbound call center. Excellent customer service is something I excel at and past employers can vouch for that. I also succeeded very well in a sales environment when working with Extra Space. I am very proud of my strong work ethic and reliability as an employee.
                            </div>
                            <div>
                            <a target="_blank" href='https://www.linkedin.com/in/ethan-mcneal-16265b1a0'><Icon link size="large" color="blue" name="linkedin square" /></a>
                            </div>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className="carousel-item-all">
                <div className="flex-about-img-left">
                    <img
                        src={JedPic}
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div className='about-small-images'> 
                        {smallImages()}
                    </div>
                    <div>
                        <h1>Jedediah Wood</h1>
                       
                        <div>
                        To finance my education, for the past 10 years I have largely worked in construction; an opportunity to apply my hands-on, technical, practical mechanical skills. With a newly earned Political Science B.S. degree with an engineering background, I am now seeking to apply my developed mathematical, analytical, research, writing, teamwork, and leadership skills to an exiting new career in technology!
                            </div>
                            <div>
                           <a target="_blank" href='https://www.linkedin.com/in/jedediah-wood-thebest'><Icon link size="large" color="blue" name="linkedin square" /></a>
                            </div>
                    </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
            <div className="carousel-item-all">
                <div className="flex-about-img-left">
                    <img
                        src={CalliePic}
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div className='about-small-images'> 
                        {smallImages()}
                    </div>
                    <div>
                        <h1>Callice Austin</h1>
                        
                        <div>
                            I have just begun my venture into the tech world. It is something that I am very passionate about, because I am a creative problem-solver.
                             I fell in love with it from my first class in high school, and its been what I've wanted to do since then.
                             <br/>
                             I have worked hard to graduate from the DevPint Labs bootcamp, and am working to continue my never-ending education in programming. 
                             I have excelled in leadership positions in a retail environment and can work well in a team. I can work on my own to meet deadlines without heavy supervision.
                            </div>
                            <div>
                            <a target="_blank" href='https://www.linkedin.com/in/callice-austin'><Icon link size="large" color="blue" name="linkedin square" /></a>
                            </div>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
       

            <Carousel.Item>
            <div className="carousel-item-all">
                <div className="flex-about-img-left">
                    <img
                        src={ErinPic}
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div className='about-small-images'> 
                        {smallImages()}
                    </div>
                    <div>
                        <h1>Erin Zimmerman</h1>
                       
                        <div>
                        I have found a passion in web development and feels I can make a difference while leading a fulfilling work-life balance. Previously a Training Specialist at UHEAA and a Trainer at Cotiviti. Experience training call center agents and record evaluation systems agents. Experience in public speaking, basic data analysis, technical writing, instructional design, leadership, and more.
                            </div>
                            <div>
                            <a target="_blank" href='https://www.linkedin.com/in/erin-zimmerman'><Icon link size="large" color="blue" name="linkedin square" /></a>
                            </div>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
            
            </Carousel> 
            </Container>
            </div>
        </>
    )
}
export default About
