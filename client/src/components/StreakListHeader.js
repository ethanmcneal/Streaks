import { Segment } from "semantic-ui-react"

const StreakListHeader = () => (
    <Segment.Group horizontal >
    <Segment style={{width: '1px'}}>Streak</Segment>
    <Segment style={{width: '1px'}}># of Participants</Segment>
    <Segment style={{width: '1px'}}>Created</Segment>
    <Segment style={{width: '12em'}}>Wager</Segment>
    <Segment style={{width: '1px'}}>Status</Segment>
    <Segment style={{width: '1px'}}>Actions</Segment>
    </Segment.Group>
)
export default StreakListHeader