import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import { Input, InputField, InputForm, InputButton, InputBox, InputErrorMessage } from '../styles/Input.styled'
import { BsKeyboard, BsArrowRight } from 'react-icons/bs'



const userNameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //states
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    // Side Effects, to make sure it doesnt navigate before it has rendered
    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [ user, navigate ]); //Empty deps - only run once

    //event Handlers
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [ error, userResponse ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }

        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }



    //Render Functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short, minimum 3 characters</span>
        }
    })()

    const style = { marginLeft: "10px" }
    return (
        <>
            <InputForm onSubmit={ handleSubmit(onSubmit) }>
                <InputField>
                    <InputBox>
                        <BsKeyboard style={ style } size={ 40 } />
                        <Input
                            type='text'
                            placeholder='What is your name?'
                            { ...register('username', userNameConfig) }
                        />
                        <InputButton type='submit' disabled={ loading }>
                            <BsArrowRight size={ 40 } color={ "white" } />
                        </InputButton>

                    </InputBox>

                </InputField>


                { loading && <p>Logging in...</p> }
                { apiError && <p>{ apiError }</p> }
            </InputForm>
            <InputErrorMessage>
                { errorMessage }
            </InputErrorMessage>


        </>
    );
}

export default LoginForm;