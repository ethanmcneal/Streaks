import useAxiosGet from "../hooks/useAxiosGet"
import CardContainer from "./CardContainer"

const AxiosCallCard = () => {

    const {data} = useAxiosGet('/api/api_test_2')

    const renderData = () => {
        return data.map( d => <pre>{JSON.stringify(d, null, 1)}</pre>)
     }
    return(
        <CardContainer>
            <p>test data is an array of two objects</p>
            {renderData()}
        </CardContainer>
    )
}

export default AxiosCallCard