import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Image, Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import logo from '../images/3.png'



const Home = () =>{
    const {user} = useContext(AuthContext)
    return(
    <>

       {!user &&  <Menu className="landing-menu">
            <Menu.Item>
            {/* <img src={img} className="small-logo"/>Streaks */}
            <button className='button-landing'>Streaks</button>
                </Menu.Item>

        <Menu.Menu position='right'>
            <Link to='/about'>
                <Menu.Item>
                About
                </Menu.Item>
            </Link>
            <Link to='/login'>
                <Menu.Item>
                Login
                </Menu.Item>
            </Link>

                <Menu.Item>
                </Menu.Item>
                <Menu.Item>
                </Menu.Item>
            </Menu.Menu> 
        </Menu>}

<div className="landing">

   {/* <img src={img} className="circular-logo"/> */}
   <br></br>
<img src={logo}/>
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