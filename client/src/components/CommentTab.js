import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserStreaks from '../user_streak/UserStreaks'
import CommentNew from "../comments/CommentNew"
import CommentsStreak from "../comments/CommentsStreak"
import CommentMedia from './CommentMedia'

const panes = [
  {
    menuItem: 'Attachments',
    render: () => <Tab.Pane attached={false}>1 winners and losers media on top, comment media on bottom<CommentMedia /></Tab.Pane>,
  },
  {
    menuItem: 'Comments',
    render: () => <Tab.Pane attached={false}><CommentsStreak /><CommentNew /></Tab.Pane>,
  },
]

const CommentTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default CommentTab
