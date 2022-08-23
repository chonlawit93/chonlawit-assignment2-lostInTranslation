import styled from 'styled-components'

export const InputField = styled.fieldset`
    margin: 30px;
    height: 7rem;
    width: 80%;
    border-radius: 10px;
    border-bottom-color: #845EC2;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    filter: drop-shadow(0px 5px 5px rgba(0.25, 0.25, 0.25, 0.25));
   
    
`
export const InputBox = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    border: 3px solid;
    border-color: grey;
    border-radius: 100px;
    justify-content: space-between;
   
    
    
`

export const Input = styled.input`
    border: none;
    border-left-style: ridge;
    width: 70%;
    height: 60%;
    ::placeholder{
        font-size: x-large;
        font-family: Sanchez;
    }
    
    
    

    &.focus{
        outline: none;
    }

    
`

export const InputButton = styled.button`
    background-color:  #845EC2;
    border-radius: 100px;
    height: 90%;
    width: 60px;
    margin: 5px;
    border:none;
   
    
`

export const InputForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
   
   
`


