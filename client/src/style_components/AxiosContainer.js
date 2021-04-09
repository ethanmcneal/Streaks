
import ErrorMessage from "./ErrorMessage"
import Loader from "./Loader"

{/* <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Users'}> */}
const AxiosContainer = (props) => {
    const { fullError, loading, error, loaderMessage, children } = props
    if(loading) return <Loader content={loaderMessage} />
    if(error) return <ErrorMessage error={error} fullError={fullError} />
    return (
     <>
       {children}
      </>
    )
}

export default AxiosContainer