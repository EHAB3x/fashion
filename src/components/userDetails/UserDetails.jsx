import { useAuth } from '../../context/AuthContext';
import './userDetails.css'
import { CiMail, CiUser } from "react-icons/ci";
const UserDetails = () => {
    const {user} = useAuth()
  return (
    <div className="user__details">
        <div className="details__field">
            <CiUser />
            <p>{user.userName}</p>
        </div>
        <div className="details__field">
            <CiMail />
            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserDetails