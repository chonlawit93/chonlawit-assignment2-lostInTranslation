
const Translations = ({ letter }) => {
    
    

    return (
        <>
            { letter !== " " ? <img src={ `/img/${letter}.png` } alt={ letter } width="55" /> : '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' }
        </>
    );
}



export default Translations;