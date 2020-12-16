import Styled from 'styled-components';

export const Container = Styled.div `
    box-shadow: 3px 3px 5px #3838;
    width: 30vw;
    height: 80px;
    padding: 2%;
    position: absolute;
    top: 10px;
    background-color: #fff;
    z-index: 1;
    margin: auto;
    text-align: center;
    @media(max-width: 1000px){
        height: 320px;
        width: 80vw;
    }
`
