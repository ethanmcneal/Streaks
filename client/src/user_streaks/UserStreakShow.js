import { Menu, Segment } from "semantic-ui-react"


const UserStreakShow = (props) => {



    return(
        <div>
            <Segment style={{display: 'flex', justifyContent:'space-between', margin: '0px 300px 0px 300px'}}>
                <div>
                <p>Streak thumbnail ?</p>
                <h2>Streak Name</h2>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p style={{textAlign: 'right'}}> status </p>
                <p style={{textAlign: 'right'}}> icons </p>
                </div>
                
            </Segment>
        </div>
    )
}

export default UserStreakShow