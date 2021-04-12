import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownHeader = () => (
  <Dropdown
    text=' '
    icon='user'
    floating

    display='right'
    className='icon'
  >
    <Dropdown.Menu>

      <Dropdown.Item href="/">Your Streaks</Dropdown.Item>
      <Dropdown.Item href="/login">Login</Dropdown.Item>
      <Dropdown.Item href="/register">Register</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownHeader