import { useContext } from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"

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
            <Link to='/styled'>
            <Menu.Item >
                Style Components
            </Menu.Item>
            </Link>
        {!user &&    <Menu.Menu position='right'>
                
            <Link to='/register'>
                <Menu.Item>
                Register
                </Menu.Item>
                </Link>
                <Link to='/login'>
                <Menu.Item>
                Login
                </Menu.Item>
                </Link>

            </Menu.Menu> }
          {user && <Menu.Menu position='right'>
                
            
                <Menu.Item onClick={handleLogout}>
                Logout
                </Menu.Item>
               

            </Menu.Menu>}
        </Menu>
    )
}

export default NavBar