
//import { useEffect } from "react";
//import { getUserById } from "../api/user";

import ProfileHistory from "../components/profile/ProfileHistory";
import { ProfileContainer } from "../components/styles/Container.styled";
//import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
//import { storageSave } from "../utils/storage";

const Profile = () => {

    const { user } = useUser()

    // Update the profile page, and also make sure that local state and database is in sync
    // useEffect makes sure it render once
    /*     useEffect(() => {
            const findUser = async () => {
                const [ error, latestUser ] = await getUserById(user.id)
                if (error === null) {
                    storageSave(STORAGE_KEY_USER, latestUser)
                    setUser(latestUser)
                }
            }
            //findUser()
        }, [ setUser, user.id ])
     */

    return (
        <>
            <ProfileContainer>
                <ProfileHistory translations={ user.translations } />
            </ProfileContainer>


        </>
    );
}

export default withAuth(Profile)
