import alt from '../images/FlameIcon.png'

const UserAvatar = (props) => {
    const {userImage} = props
    return(
        <div style={{objectFit: 'cover', maxWidth: '55px', maxHeight: '55px', borderRadius: '50%', overflow: 'hidden', position: 'relative'}}>
        <img src={userImage ? userImage : alt} style={{width: 'auto', height: '55px'}} />
        </div>
    )
}

export default UserAvatar