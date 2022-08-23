import { useForm } from "react-hook-form"
import { Input, InputField, InputForm, InputButton, InputBox, InputErrorMessage } from "../styles/Input.styled"
import { BsKeyboard, BsArrowRight } from 'react-icons/bs'


const inputConfig = {
    required: true,
    maxLength: 40,
}



const TranslationInput = ({ childClicked }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const errorMessage = (() => {
        if (!errors.inputText) {
            return null
        }

        if (errors.inputText.type === 'required') {
            return <span>Give me something to translate</span>
        }

        if (errors.inputText.type === 'maxLength') {
            return <span>Maksimum 40 letters</span>
        }


        /*
        // Error message if not matching regex. Only letters and spaces aloud 
        
        if (!inputText.value.match("/^[a-zA-Z\s]*$/")) {
            return <span>I can only translate letters</span>
        }
          */
    })()


    const onSubmit = ({ inputText }) => {
        // If string meets the requirement send data to parent

        childClicked(inputText)
    }


    const style = { marginLeft: "10px" }
    return (
        <>
            <InputForm onSubmit={ handleSubmit(onSubmit) }>
                <InputBox style={{ width: "50rem" ,  backgroundColor: "white" }}>
                    <BsKeyboard style={ style } size={ 40 } />
                    <Input
                        type='text'
                        placeholder="Hello world"
                        { ...register('inputText', inputConfig) }
                    />
                    <InputButton type='submit'>
                        <BsArrowRight size={ 40 } color={ "white" } />
                    </InputButton>
                </InputBox>
                
            </InputForm>
            <InputErrorMessage>{ errorMessage }</InputErrorMessage>
        </>
    );
}

export default TranslationInput;



