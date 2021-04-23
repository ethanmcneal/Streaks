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
            <Menu.Item id="boom" style={{fontSize:'1.1em', marginBottom:'2px', marginLeft:'3px', color:'rgb(43, 174, 173)'}}>
                <a href="/dashboard" style={{color:'rgb(43, 174, 173)'}} >{user.nickname}</a> 
            </Menu.Item>
            <span className="Upright Divider"></span>
            <Menu.Item style={{fontSize:'.9em', opacity: '58%'}}>
                {activeStreaks} Active Streaks
            </Menu.Item>
         {user && <Menu.Menu position='right'>
            <Menu.Item>
                <SearchBar/>
            </Menu.Item>
                <Menu.Item>
                    <Link to='/streaks/form'> 
                    <Button style={{backgroundColor:'rgb(245, 155, 13)!important', paddingLeft:'12px'}}>+ &nbsp; New Streak</Button>
                    </Link>
                </Menu.Item>
            </Menu.Menu> }
        </Menu>
    )
}
export default DashHeader;