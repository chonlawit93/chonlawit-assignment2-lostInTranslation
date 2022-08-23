import { NavLink } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";

const Navbar = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Would you like to logout')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }



    return (
        <nav>
            <ul>
                <li>Logo</li>
                <li>Title</li>
            </ul>

            { user !== null &&
                <>
                    <ul>
                        <li>
                            <NavLink to="/translation">Translation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <button onClick={ handleLogoutClick }>Logout</button>
                        </li>
                    </ul>
                    <ul>
                        <li>{user.username} + avatar</li>
                    </ul>

                </>
            }

        </nav>
    );
}

export default Navbar;