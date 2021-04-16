import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserStreaks from '../user_streak/UserStreaks'

const panes = [
  {
    menuItem: 'Active',
    render: () => <Tab.Pane attached={false}>{UserStreaks}</Tab.Pane>,
  },
  {
    menuItem: 'Completed',
    render: () => <Tab.Pane attached={false}>Content</Tab.Pane>,
  },
]

const TabComponent = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabComponent
