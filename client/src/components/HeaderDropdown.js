import React, { useContext } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
const DropdownHeader = () => {
  const {user, handleLogout} = useContext(AuthContext)
  return(<Dropdown
    text=' '
    icon='user'
    floating
    display='right'
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Item href="/">Home</Dropdown.Item>
      <Dropdown.Item href="/about">About</Dropdown.Item>
      <Dropdown.Item href="/streaks">Streaks</Dropdown.Item>
      {/* make logout work and delete logout from navbar */}
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
export default DropdownHeader