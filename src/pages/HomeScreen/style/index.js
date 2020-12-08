import Styled from 'styled-components';

const Container = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const TopBar = Styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3D86D9;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
    height: 200px;
    border-radius: 20%;
    position: relative;
    top: -40px;
    width: 100vw;
    text-align: center;
    line-height: 0.8;

`
const Content = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    height: 45vh;
    margin: auto;
`

const Label = Styled.label `
    color: #001F43;
    font-size: 0.9rem;
    font-weight: 200;
    margin-bottom: 0;
`

const Button = Styled.button `
    background-color: #001F43;
    color: #fff;
    border: none;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: -10%;
`
const GrayButton = Styled(Button) `
    background-color: #707070;
`
const Footer = Styled.footer `
    position: relative;
    top: 20vh;
    text-align: center;
    color: #001F43;
`

export {
    Container,
    TopBar,
    Label,
    Button,
    Footer,
    Content,
    GrayButton,
}