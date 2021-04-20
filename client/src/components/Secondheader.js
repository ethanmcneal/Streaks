import { useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Menu} from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import '../style_components/SecondHeader.css';
import SearchBar from "./SearchBar";




const DashHeader = () => {
    const {user} = useContext(AuthContext)
    return(
        <Menu>

<Link to='/dashboard'>
            <Menu.Item>
               {user.nickname} 
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
                    <Button>+ New Streak</Button>
                    </Link>
                </Menu.Item>
            </Menu.Menu> }
        </Menu>
    )
    }
export default DashHeader;