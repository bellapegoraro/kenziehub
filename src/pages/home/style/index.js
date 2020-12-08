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
    height: 200px;
    border-radius: 20%;
    position: relative;
    top: -40px;
    width: 100vw;
    text-align: center;
`
const Content = Styled.div `
    display: flex;
    flex-direction: column;
    align-content: space-between;
    width: 80vw;
    text-align: left;
    margin: 10% auto;
`

const Label = Styled.label `
    color: #001F43;
    font-size: 1rem;
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
`
const Footer = Styled.footer `
    position: relative;
    top: 34vh;
    text-align: center;

`

export {
    Container,
    TopBar,
    Label,
    Button,
    Footer,
    Content,
}