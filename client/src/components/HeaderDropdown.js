import React, { useContext } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
const DropdownHeader = () => {
  const {handleLogout} = useContext(AuthContext)
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
<<<<<<< HEAD
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
=======
      <Dropdown.Item href="/users">Users</Dropdown.Item>
      <Dropdown.Item href="/" onClick={handleLogout}>Logout</Dropdown.Item>
>>>>>>> d34e0493e3534db1ce6062920018ed651f2250a5
    </Dropdown.Menu>
  </Dropdown>
  )
}
export default DropdownHeader