import { Segment } from "semantic-ui-react"

const StreakListHeader = () => (
    <Segment.Group horizontal style={{margin: '-1px'}}>
    <Segment style={{width: '1px', color: '#43b3ae'}}>Streak</Segment>
    <Segment style={{width: '1px', color: '#43b3ae'}}># of Participants</Segment>
    <Segment style={{width: '1px', color: '#43b3ae'}}>Created</Segment>
    <Segment style={{width: '12em', color: '#43b3ae'}}>Wager</Segment>
    <Segment style={{width: '1px', color: '#43b3ae'}}>Status</Segment>
    <Segment style={{width: '1px', color: '#43b3ae'}}>Actions</Segment>
    </Segment.Group>
)
export default StreakListHeader