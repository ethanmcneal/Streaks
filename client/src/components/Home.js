import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Image, Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import logo from '../images/StreaksTransparentLogo.png'
import img from '../images/3.png'



const Home = () =>{
    const {user} = useContext(AuthContext)
    return(
    <>
       {!user &&  <Menu className="landing-menu" style={{margin: '-50px !important'}}>
            <Menu.Item>
            <img src={logo} style={{height: '80px', width: '80px', margin: '4px 0'}}/>
            {/* <button className='button-landing'>Streaks</button> */}
                </Menu.Item>

        <Menu.Menu position='right'>
            <Link to='/about'>
                <Menu.Item style={{color:'rgb(141 129 140)', marginTop: '8px'}}>
                About
                </Menu.Item>
            </Link>
            <Link to='/login'>
                <Menu.Item style={{color:'rgb(141 129 140)', marginTop: '8px'}}>
                Login
                </Menu.Item>
            </Link>
            </Menu.Menu> 
        </Menu>}

        <div className="landing" style={{marginBottom: '160%'}}>
            <br></br>
            <img src={img}/>
            <br></br>
            <p>Use streaks to prove yourself to friends, family, and strangers</p>
            <br></br>
            {!user && 
            <Link to='/register'> 
                                <Button   className='button-orange'>Sign up</Button>
                                </Link>}
            {user && 
            <Link to='/streaks'> 
                                <Button   className='button-orange'>Streaks</Button>
                                </Link>}
        </div>

    </>
    )
}

export default Home