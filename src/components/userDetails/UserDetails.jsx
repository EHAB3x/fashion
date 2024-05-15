import { useAuth } from '../../context/AuthContext';
import { useState } from 'react'; // Import useState hook
import './userDetails.css';
import { CiMail, CiUser, CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const { user, logout } = useAuth();
    const [loggingOut, setLoggingOut] = useState(false); // State for logging out

    const handleLogout = async () => {
        setLoggingOut(true); // Set loggingOut state to true
        await logout(); // Await logout action
        setLoggingOut(false); // Set loggingOut state to false after logout
    };

    // Conditional rendering based on user authentication status
    if (!user) {
        return null; // Return null or a different component if user is not authenticated
    }

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
            <div className="details__field" onClick={handleLogout}>
                <CiLogin />
                <p>{loggingOut ? 'Logging out...' : 'Log Out'}</p>
            </div>
            <div className="details__field">
                <Link to="/dashboard">Dashboard</Link>
            </div>

        </div>
    );
};

export default UserDetails;
