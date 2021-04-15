import { useContext } from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import HeaderDropdown from './HeaderDropdown'

const NavBar = () => {

    const {user, handleLogout} = useContext(AuthContext)
    return(
        <Menu inverted>
            <Link to='/'>
            <Menu.Item >
                Home
            </Menu.Item>
            </Link>
            <Link to='/about'>
            <Menu.Item >
                About
            </Menu.Item>
            </Link>
            <Link to='/streaks'>
            <Menu.Item >
                Streaks
            </Menu.Item>
            </Link>
        {/* {user &&    <Menu.Menu position='right'>
                
                


            </Menu.Menu> } */}
          {user && <Menu.Menu position='right'>

            <Link to='/dashboard'>
            <Menu.Item>
                {user.nickname}
                </Menu.Item>
                </Link>
                
            
                <Menu.Item onClick={handleLogout}>
                Logout
                </Menu.Item>
                <Menu.Item>
                     <HeaderDropdown />
                </Menu.Item>
               

            </Menu.Menu>}
        </Menu>


    )
}

export default NavBar