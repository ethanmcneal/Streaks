import { useContext } from "react"
import { Link } from "react-router-dom"
import { Menu, MenuItem } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import HeaderDropdown from './HeaderDropdown'
import img from '../images/StreaksTransparentLogo.png'
import '../style_components/basicstyle.css'

const NavBar = () => {

    const {user} = useContext(AuthContext)
    return(
        <Menu inverted>
            <MenuItem>
            <a href='/'><img src={img} style={{height: '80px', width: '80px', margin: '4px 0'}}/></a>
            </MenuItem>

        {!user &&    <Menu.Menu position='right'>
                
        <Link to='/register'>
            <Menu.Item style={{color:'rgb(141 129 140)', marginTop: '8px'}}>
                Register
            </Menu.Item>
            </Link>
            <Link to='/login'>
            <Menu.Item style={{color:'rgb(141 129 140)', marginTop: '8px'}}>
                Login
            </Menu.Item>
            </Link>
            </Menu.Menu> }
          {user && <Menu.Menu position='right'>

                <Menu.Item>
                     <HeaderDropdown user={user}/>
                </Menu.Item>
               

            </Menu.Menu>}
        </Menu>


    )
}

export default NavBar