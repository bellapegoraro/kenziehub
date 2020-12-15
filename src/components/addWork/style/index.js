import Styled from 'styled-components';

export const Container = Styled.div `
    box-shadow: 3px 3px 5px #3838;
    width: 40vw;
    height: 280px;
    padding: 2%;
    position: absolute;
    top: 100px;
    background-color: #fff;
    z-index: 1;
    margin: auto;
    @media(max-width: 1000px){
        height: 320px;
        width: 80vw;
    }
`

export const Form = Styled.form `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Button = Styled.button `
    background-color: #001F43;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    margin: 2% auto;
    &:hover{
        background-color: #023b7d;
    }
`
export const Input = Styled.input `
    border-radius: 0;
    border: 1px solid #E5E5E5 ;
`
export const TextArea = Styled.textarea `
    border: 1px solid #E5E5E5 ;
    resize: none;
`
export const Label = Styled.label ` 
    color: #939598 ;
`
export const Error = Styled.span `
    color: red;
    font-size: 0.8rem;
`
export const Close = Styled.div `
    display: flex;
    justify-content: flex-end;
`
