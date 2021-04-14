import { Card } from "react-bootstrap"

const Thumbnail = (props) => {
    const {img} = props
    return(
        <Card.Img variant='top' src={`https://via.placeholder.com/100`}/>
    )
}

export default Thumbnail