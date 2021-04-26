const UserAvatar = (props) => {
    const {userImage} = props
    return(
        <div style={{objectFit: 'cover', maxWidth: '64px', maxHeight: '64px', borderRadius: '50%', overflow: 'hidden', position: 'relative'}}>
        <img src={userImage} style={{maxWidth: 'auto', maxHeight: '64px'}} />
        </div>
    )
}

export default UserAvatar