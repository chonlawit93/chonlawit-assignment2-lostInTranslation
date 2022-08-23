
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";
import { Nav, NavTitleLogo, NavLink, NavMenu, NavBtnLogout, NavProfile, NavImage, NavTitle, } from "../styles/Navbar.styled"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Would you like to logout')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }



    return (

        <Nav>
            { user !== null ?
                <>
                    <NavTitleLogo>
                        <NavImage src="/img/Logo.png" alt="nav logo" />
                        <NavTitle>Lost in Traslation</NavTitle>
                    </NavTitleLogo>
                    <NavMenu>
                        <NavLink to="/translation" >Translation</NavLink>
                        <NavLink to="/profile" >Profile</NavLink>
                        <NavBtnLogout onClick={ handleLogoutClick }>Logout</NavBtnLogout>
                    </NavMenu>

                    <NavProfile>
                        <p>{ user.username }</p>
                        <CgProfile size={ 30 }></CgProfile>
                    </NavProfile>
                </> 
                
                :
                <NavTitle>Lost in Traslation</NavTitle>
            }
        </Nav>
    );
}

export default Navbar;