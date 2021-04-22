const UserAvatar = (props) => {
    const {userImage} = props
    return(
        <img src={userImage} style={{maxWidth: '64px', maxHeight: '64px', borderRadius: '50%'}}/>
    )
}

export default UserAvatar