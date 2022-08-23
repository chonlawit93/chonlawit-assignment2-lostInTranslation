import { useState } from "react";
import { translationAdd } from "../api/translation";
import { OutPutContainer, TranslationContainer } from "../components/styles/Container.styled";
import TranslationInput from "../components/translation/TranslationInput";
import TranslationOuput from "../components/translation/TranslationOuput";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";



const Translation = () => {

    const { user, setUser } = useUser()
    const [ inputText, setInputText ] = useState(null)


    //Add input text to API
    const handleTranslationClicked = async (textValue) => {
        const translation = textValue.trim()
        // data to API
        if (!translation) {
            alert('No input')
            return
        }

        const [ error, updatedUser ] = await translationAdd(user, translation)
        if (error !== null) {
            return
        }

        //Keep UI and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //Update state

        setUser(updatedUser)
        console.log('Error:', error)
        console.log('updatedUser:', updatedUser);

        // setState and send to output

        setInputText(translation)


    }

    //Dont know how to pass the converted Strings to sibling component input => output
    //TODO: get regex to work
    //TODO: Pass data from input to output component
    return (
        <>
            <TranslationContainer>
                <TranslationInput childClicked={ handleTranslationClicked } />
            

            </TranslationContainer>
            <OutPutContainer>
                <TranslationOuput inputText={ inputText } />
            </OutPutContainer>
        </>
    );
}

export default withAuth(Translation)
