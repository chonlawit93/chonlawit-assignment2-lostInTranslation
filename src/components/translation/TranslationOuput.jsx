import Translations from "./Translations";




const TranslationOuput = ({ inputText }) => {


    if (inputText !== null) {
        const lowerCased = inputText.toLowerCase()
        const letters = [ ...lowerCased ]

        const renderTranslation = letters.map((letter, index) => <Translations key={ index } letter={ letter } />)
      

        return (
            <>
                <div>
                    { renderTranslation}
                </div>
            </>
        );
    }










}

export default TranslationOuput;