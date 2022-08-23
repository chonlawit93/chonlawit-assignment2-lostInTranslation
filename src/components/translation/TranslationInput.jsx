import { useForm } from "react-hook-form"



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


    const onSubmit = ( {inputText} ) => {
        // If string meets the requirement send data to parent

        childClicked(inputText)
    }


    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input
                        type='text'
                        placeholder="hello world"
                        { ...register('inputText', inputConfig) }
                    />
                    <button type='submit'>Translate</button>
                </fieldset>
                { errorMessage }
            </form>
        </>
    );
}

export default TranslationInput;



