import Styled from "styled-components";

export const Container = Styled.div`
    box-shadow: 3px 3px 5px #3838;
    width: 250px;
    height: 350px;
    padding: 2%;
    position: absolute;
    background-color: #fff;
    z-index: 1;
    top: 400px;
    right: 45px;
    margin: auto;
    @media(min-width: 500px){
        height: 320px;
        width: 400px;
        right: 150px;
        top: 500px;
    }
`;

export const Form = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Button = Styled.button`
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
`;
export const Input = Styled.input`
    border-radius: 0;
    border: 1px solid #E5E5E5 ;
`;
export const TextArea = Styled.textarea`
    border: 1px solid #E5E5E5 ;
    resize: none;
`;
export const Label = Styled.label` 
    color: #939598 ;
`;
export const Error = Styled.span`
    color: red;
    font-size: 0.8rem;
`;
export const Close = Styled.div`
    display: flex;
    justify-content: flex-end;
`;
