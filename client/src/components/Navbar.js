import { useContext } from "react"
import { Link } from "react-router-dom"
import { Menu, MenuItem } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import HeaderDropdown from './HeaderDropdown'
import img from './FakeLogo.png'
import '../style_components/NavBar.css'

const NavBar = () => {

    const {user} = useContext(AuthContext)
    return(
        <Menu inverted>
            <MenuItem>
            <img src={img}/>
            </MenuItem>

        {!user &&    <Menu.Menu position='right'>
                
        <Link to='/register'>
            <Menu.Item >
                Register
            </Menu.Item>
            </Link>
            <Link to='/login'>
            <Menu.Item >
                Login
            </Menu.Item>
            </Link>
            </Menu.Menu> }
          {user && <Menu.Menu position='right'>

                <Menu.Item>
                     <HeaderDropdown />
                </Menu.Item>
               

            </Menu.Menu>}
        </Menu>


    )
}

export default NavBar