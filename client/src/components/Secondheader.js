import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Menu} from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider"
import '../style_components/SecondHeader.css';
import SearchBar from "./SearchBar";




const DashHeader = () => {
    const [activeStreaks, setActiveStreaks] = useState(0)
    const {user} = useContext(AuthContext)

    useEffect(() => {
        getActiveStreaks()
    },[])

    const getActiveStreaks = async() => {
        try {
            let res = await axios.get(`/api/users_streaks/${user.id}`)
            let filterData = res.data.filter(data => data.status == 'ongoing' || data.status == 'upcoming')
            setActiveStreaks(filterData.length)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Menu>

<Link to='/dashboard'>
            <Menu.Item>
               {user.nickname} 
                </Menu.Item>
                </Link>
            <Menu.Item >
                {activeStreaks} Active Streaks
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