import Styled from "styled-components";

const Container = Styled.div`
    height: 100vh;
    width: 100vw;
`;

const TopBarMobile = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3D86D9;
    height: 200px;
    border-radius: 20%;
    position: relative;
    top: -30px;
    width: 100vw;
    text-align: center;
    line-height: 0.8;

    @media (min-width: 1000px){
        display: none;
    }
`;
const Title = Styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 900;

    @media (min-width: 1000px){
        color: #3d86d9;
        font-size: 2em;
    }
`;

const Content = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80vw;
    height: 60vh;
    margin: auto;

    @media (min-width: 700px){
        height: 70vh;
    }

    @media (min-width: 1000px){
        height: 50vh;
        width: 30vw;
    }
`;

const Label = Styled.label`
    color: #001F43;
    font-size: 0.9rem;
    font-weight: 200;
    margin-bottom: 0;

    @media (min-width: 1000px){
        margin-bottom: 5%;
    }
`;

const Button = Styled.button`
    background-color: #001F43;
    color: #fff;
    border: none;
    height: 40px;
    width: 150px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: -10%;
`;

const GrayButton = Styled(Button)`
    background-color: #707070;
`;

const Footer = Styled.footer`
    position: relative;
    text-align: center;
    color: #001F43;

    @media (min-width: 700px){
        top: 10vh;
    }
`;

const TopBarDesktop = Styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1000px){
        display: none;
    }
`;

const Bar = Styled.div`
    margin-top: -0.5%;
    margin-left: 1%;
    background-color: #001f43;
    height: 10px;
    width: 78vw;
`;

const Image = Styled.img`
    width: 50vw;
    margin-left: 5%;

    @media(max-width: 1000px){
        display: none;
    }
`;

const ContentDesktop = Styled.div`
    @media(min-width: 1000px){
        display: flex;
        height: 70vh;
        margin-top: 2%;
    }
`;

export {
  Container,
  TopBarMobile,
  Label,
  Button,
  Footer,
  Content,
  GrayButton,
  Title,
  TopBarDesktop,
  Bar,
  Image,
  ContentDesktop,
};
