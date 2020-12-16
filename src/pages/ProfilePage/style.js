import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  label {
    font-size: 0.8em;
  }
`;

const Title = styled.h1`
  color: #3d86d9;
  text-align: center;
  margin-top: 5%;

  @media (min-width: 1000px) {
    margin-top: 1%;
    margin-left: 5%;
  }
`;

const Input = styled.input`
  height: 30px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 240px;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;
`;

const FormImage = styled.form`
  color: #fff;
  height: 35px;
  width: 100%;

  @media (min-width: 1000px) {
    height: 6vh;
  }
`;

const InputImg = styled.input`
  color: #001f43;
  width: 100%;
  font-size: 10px;
  color: transparent;

  ::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }

  &:before {
    height: 25px;
    content: "Escolha um arquivo";
    background-color: #001f43;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 130px;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 9px;
    outline: none;
    white-space: nowrap;
    border-radius: 40px;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 10px;
    outline: none;
    text-align: center;
    margin: 0 auto;
    /* 
    @media (min-width: 700px) {
    
     
    }

    @media (min-width: 1000px) {
     ;
    }

    @media (min-width: 1430px) {
    } */
  }
`;

const ImageProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (min-width: 700px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1000px) {
    width: 13vw;
    height: 25vh;
  }

  @media (min-width: 1430px) {
    width: 13vw;
  }
`;

const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;

  @media (min-width: 1000px) {
    height: 35vh;
  }
`;
const Button = styled.button`
  background-color: #001f43;
  color: #fff;
  border: none;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  font-weight: 400;
  outline: none;
  cursor: pointer;
  margin-left: 20%;
  margin-top: 2%;
`;

const ButtonPassword = styled.button`
  background-color: #001f43;
  color: #fff;
  border: none;
  height: 20px;
  margin: 2% auto;
  width: 110px;
  font-size: 0.7em;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
`;

const HeaderMobile = styled.div`
  width: 100vw;
  text-align: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const HeaderDesktop = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Bar = styled.div`
  background-color: #001f43;
  height: 10px;
  width: 75vw;
  margin-top: 2.5%;
  margin-left: 1%;
`;

const Main = styled.div`
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #eff0f3;
  box-shadow: 2px 2px 14px -5px rgba(0, 0, 0, 0.75);
  width: 85vw;
  margin: 5% auto;

  @media (min-width: 700px) {
    width: 50vw;
    margin: 2% auto;
    height: 500px;
  }

  @media (min-width: 1000px) {
    width: 500px;
    align-items: center;
    margin: 0 auto;
    height: 85vh;
  }
`;

const StyledLink = styled(Link)`
  text-align: center;
`;
const StyledLinkWeb = styled(Link)`
  @media (max-width: 1000px) {
    display: none;
  }
`;
export {
  Container,
  Input,
  FormImage,
  FormInputs,
  ImageProfile,
  Button,
  Title,
  InputImg,
  HeaderMobile,
  HeaderDesktop,
  Bar,
  Main,
  ButtonPassword,
  StyledLink,
  StyledLinkWeb,
};
