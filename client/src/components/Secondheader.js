import { useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Menu, Search } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import { QueryContext } from "../providers/QueryProvider";
import '../style_components/SecondHeader.css';
import SearchBar from "./SearchBar";




const DashHeader = () => {

    const {user, handleLogout} = useContext(AuthContext)
    return(
        <Menu>

<Link to='/dashboard'>
            <Menu.Item>
                User
                {/* {user.nickname}  glitchy on callies comp?*/}
                </Menu.Item>
                </Link>
            <Menu.Item >
                # of active streaks
            </Menu.Item>
        {user &&    <Menu.Menu position='right'>

            <Menu.Item>
                <SearchBar/>
            </Menu.Item>
                
                <Menu.Item>
                    <Link to='/streaks/form'> 
                    <Button>+ Add a Streak</Button>
                    </Link>
                     
                </Menu.Item>
                


            </Menu.Menu> }
        </Menu>


    )
}

export default DashHeader;