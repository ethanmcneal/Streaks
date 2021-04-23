import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Image, Menu } from 'semantic-ui-react'
import img from './FakeLogo.png'


const Home = () =>{

    return(
<>

        <Menu className="landing-menu">
            <Menu.Item>
            {/* <img src={img} className="small-logo"/>Streaks */}
            <button className='button-landing'>Streaks</button>
                </Menu.Item>

        <Menu.Menu position='right'>
            <Link to='/about'>
                <Menu.Item>
                Creators
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
        </Menu>

<div className="landing">

   {/* <img src={img} className="circular-logo"/> */}
   <br></br>
<h1>Streaks</h1>
<br></br>


<p>Use streaks to prove yourself to friends, family, and strangers</p>
<br></br>
<Link to='/register'> 
                    <Button   className='button-orange'>Sign up</Button>
                    </Link>
</div>
</>
    )
}

export default Home