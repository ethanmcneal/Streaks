import React, { useContext } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import UserAvatar from './UserAvatar'
import '../style_components/HeaderDropDown.css'

const DropdownHeader = (props) => {
  const {user} = props
  const {handleLogout} = useContext(AuthContext)
  return(
    <>
    <UserAvatar userImage={user.image} />
  <Dropdown
    text=' '
    floating
    display='right'
    className='icon'
    style={{color:'yellow !important'}}
  >
    <Dropdown.Menu >
      <Dropdown.Item href="/">Home</Dropdown.Item>
      <Dropdown.Item href="/about">About</Dropdown.Item>
      <Dropdown.Item href="/streaks">Streaks</Dropdown.Item>
      {/* <Dropdown.Item href="/users">Users</Dropdown.Item> <---- NICE TO HAVE, CODE DUDES*/} 
      <Dropdown.Item href="/userEdit">Settings</Dropdown.Item>
      <Dropdown.Item href="/" onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </>
  )
}
export default DropdownHeader