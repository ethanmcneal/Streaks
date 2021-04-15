import React, { useContext } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const DropdownHeader = () => {
  const {handleLogout} = useContext(AuthContext)
  return(
  <Dropdown
    text=' '
    icon='user'
    floating

    display='right'
    className='icon'
  >
    <Dropdown.Menu>

    <Dropdown.Item href="/">Your Streaks</Dropdown.Item>
    <Dropdown.Item >User Settings</Dropdown.Item>
    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default DropdownHeader