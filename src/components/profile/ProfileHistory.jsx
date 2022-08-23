import { translationClearHistory } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { ClearButton } from "../styles/Button.styled";
import { Notes } from "../styles/Container.styled";
import ProfileTranslationList from "./ProfileTranslationList";


const ProfileHistory = ({ translations }) => {
    const { user, setUser } = useUser()

    // I demo la han til noe string for index for å gjøre unikt, men trenger man egentlig det?
    const userTranslations = translations.map((x, index) => <ProfileTranslationList key={ index } translation={ x } />)


    const handleClearClicked = async () => {
        if (!window.confirm('Are you sure?')) {
            return
        }

        const [ clearError ] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

    }

    return (
        <Notes>
            <h3>
                { userTranslations.length === 0 ? 'No translation history:' : 'Your translation history:' }
            </h3>
            <ul>
                { userTranslations }
            </ul>
            <ClearButton onClick={ handleClearClicked }>Clear history</ClearButton>
        </Notes>
    );
}

export default ProfileHistory;