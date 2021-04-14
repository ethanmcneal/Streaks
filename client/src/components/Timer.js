import moment from 'moment'

const Timer = (props) => {

// const {created_at} = props
    const created_at = '2021-04-11T18:11:50.905Z'

    const getTimeElapsed = () => {
        let f1 = created_at.split('-')
        let f2 = f1[2].split('T')
        let createdAt = moment([f1[0], (f1[1]-1), f2[0]]) 
        console.log(createdAt.from(moment()))
        return(
            <h1>{createdAt.from(moment(), true)}</h1>
            // <h1>{createdAt.toNow()}</h1>
        )
    }

    return(
        <div>
        <div style={{textAlign: 'center', padding:'10em'}}>
        {getTimeElapsed()}
        

        </div>
        <div style={{backgroundColor:'darkblue', padding:'1.5em'}}>
        </div>
        </div>
        
    )
}

export default Timer