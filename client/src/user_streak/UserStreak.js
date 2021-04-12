import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import DashTest from './DashTest'

const App = ({ children }) => (
    <Container style={{ margin: 20 }}>
  
      {children}
    </Container>
  );

const DashSeg = () => (

    <>

<App>
    <DashTest />
  </App>,

  <Segment.Group>
  <Segment.Group horizontal>
    <Segment>Streak</Segment>
    <Segment># of Participants</Segment>
    <Segment>Created</Segment>
    <Segment>Wager</Segment>
    <Segment>Status</Segment>
    <Segment>Actions</Segment>
  </Segment.Group>

    <Segment>Top</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Middle</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
  </>
)

export default DashSeg
