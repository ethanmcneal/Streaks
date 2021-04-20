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

    return (
        <>
        {!user && <NavBar /> }
        <br />
        <Container>
            <h1>The Team</h1>
        </Container>
            <br />
       
        <Container>
        <Carousel  background="rgb(245, 245, 245)">
            <Carousel.Item>
            <div className="carousel-item-all">
                <div className="flex-about-img-left">
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div className='about-small-images'> 
                        <img className="small-img-about" src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
                        alt="First slide" />
                        <img className="small-img-about" src="https://media-exp1.licdn.com/dms/image/C4E03AQEYq0ReSJkSkA/profile-displayphoto-shrink_400_400/0/1617303110374?e=1623888000&v=beta&t=-owEyIt-SkbirOPM2lPk2KazKZoLc_UFVUmxAE1UlKk"
                        alt="First slide" />
                        <img className="small-img-about" src="https://media-exp1.licdn.com/dms/image/C5603AQHXuvDTbN81Rg/profile-displayphoto-shrink_400_400/0/1517834646234?e=1623888000&v=beta&t=7BGl0MZ4dWeahjJqWF0HSFG2O1vAcwRs9pyrxlXtCBY"
                        alt="First slide" />
                        <img className="small-img-about" src="https://media-exp1.licdn.com/dms/image/C4E03AQHDSXDfx0YIBQ/profile-displayphoto-shrink_400_400/0/1606851714540?e=1623888000&v=beta&t=ql_uVyueFUrdv_Sgn2hA52oRtWPfg_oxDF95O_kqqWs"
                        alt="First slide" />
                    </div>
                    <div>
                        <h1>Ethan McNeal</h1>
                        <div>parts on website worked on here</div>
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
                        src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div> small images here x4 </div>
                    <div>
                        <h1>Ethan McNeal</h1>
                        <div>parts on website worked on here</div>
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
                        src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div> small images here x4 </div>
                    <div>
                        <h1>Ethan McNeal</h1>
                        <div>parts on website worked on here</div>
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
                        src="https://media-exp1.licdn.com/dms/image/C5603AQENjsik-7K77g/profile-displayphoto-shrink_400_400/0/1580252884885?e=1623888000&v=beta&t=9i06HPc8dARzVy_La7XK6tAedRannG3TUi6deDv3a5A"
                        alt="First slide"
                    />
                </div>
                <div className="about-right-content">
                    <div> small images here x4 </div>
                    <div>
                        <h1>Ethan McNeal</h1>
                        <div>parts on website worked on here</div>
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
            
            </Carousel> 
            </Container>
        </>
    )
}
export default About

// <Carousel.Item>
//             <div className="carousel-item-all">
//             <div className="flex-about-img-left">
//                 <img
//                     src="https://media-exp1.licdn.com/dms/image/C5603AQHXuvDTbN81Rg/profile-displayphoto-shrink_400_400/0/1517834646234?e=1623888000&v=beta&t=7BGl0MZ4dWeahjJqWF0HSFG2O1vAcwRs9pyrxlXtCBY"
//                     alt="Second slide"
//                 />
//                 </div>

//                 <div className="flex-about-small-pics">
//                     small images here x4
//                 </div>

//                 <div className="flex-about-information">
//                 <h2>Jedediah Wood</h2>
//                 <p>To finance my education, for the past 10 years I have largely worked in construction; an opportunity to apply my hands-on, technical, practical mechanical skills. With a newly earned Political Science B.S. degree with an engineering background, I am now seeking to apply my developed mathematical, analytical, research, writing, teamwork, and leadership skills to an exiting new career in technology! </p>
//                 <a target="_blank" href='https://www.linkedin.com/in/jedediah-wood-thebest'><Icon link size="large" color="blue" name="linkedin square" /></a>
//                 </div>
//                 </div>
//             </Carousel.Item>

//             <Carousel.Item>
//             <div className="carousel-item-all">
//             <div className="flex-about-img-left">
//                 <img
//                     src="https://media-exp1.licdn.com/dms/image/C4E03AQEYq0ReSJkSkA/profile-displayphoto-shrink_400_400/0/1617303110374?e=1623888000&v=beta&t=-owEyIt-SkbirOPM2lPk2KazKZoLc_UFVUmxAE1UlKk"
//                     alt="Third slide"
//                 />
//                 </div>
//                 <div className="flex-about-small-pics">
//                     small images here x4
//                 </div>
//                 <div className="flex-about-information">
//                 <h2>Callice Austin</h2>
//                 <p>I have always been a hardworking and fun person to be around. I love being able to take pride in the work that I do. I am a problem solver, no matter how small I'll try to figure it out.</p>
//                 <a target="_blank" href='https://www.linkedin.com/in/callice-austin'><Icon link size="large" color="blue" name="linkedin square" /></a>
//                 </div>
//                 </div>
//             </Carousel.Item>
           
//             <Carousel.Item>
//                 <div className="carousel-item-all">
//             <div className="flex-about-img-left">
//                     <img
//                         src="https://media-exp1.licdn.com/dms/image/C4E03AQHDSXDfx0YIBQ/profile-displayphoto-shrink_400_400/0/1606851714540?e=1623888000&v=beta&t=ql_uVyueFUrdv_Sgn2hA52oRtWPfg_oxDF95O_kqqWs"
//                         alt="Third slide"
//                     />
//                 </div>
//                 <div className="flex-about-small-pics">
//                     small images here x4
//                 </div>
//                 <div className="flex-about-information">
//                 <h2>Erin Zimmerman</h2>
//                 <p>Erin has found a passion in web development and feels she can make a difference while leading a fulfilling work-life balance. Previously a Training Specialist at UHEAA and a Trainer at Cotiviti. Experience training call center agents and record evaluation systems agents. Experience in public speaking, basic data analysis, technical writing, instructional design, leadership, and more.</p>
//                 <a target="_blank" href='https://www.linkedin.com/in/erin-zimmerman'><Icon link size="large" color="blue" name="linkedin square" /></a>
//                 </div>
//                 </div>
//             </Carousel.Item>