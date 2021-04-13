import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import UserStreaks from "../user_streak/UserStreaks"

const MyDashBoard = () => {

    const {user} = useContext(AuthContext)
    return(
        <div>
            <h1>{user.nickname}'s DashBoard</h1>
        

        <UserStreaks />
        </div>
    )
}

export default MyDashBoard