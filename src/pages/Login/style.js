import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100vh;
  width: 100vw;
  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`;
const HeaderMobile = styled.div`
  background-color: #0060ce;
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const HeaderDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 100vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ImageMobile = styled.img`
  margin-top: 3%;
  width: 200px;
  height: 90px;
  opacity: 0.6;

  @media (min-width: 500px) {
    margin-top: 1%;
  }
`;

const Main = styled.div`
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    margin-left: 20%;
  }

  div {
    margin: 0px 50px;
  }
`;

const Title = styled.h1`
  color: #001f43;
  width: 100%;
  height: 5vh;
  text-align: center;
  /* margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 4%; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 700px) {
    width: 100vw;
  }
  @media (min-width: 1000px) {
    height: 74vh;
    width: 100%;
  }
`;

const Input = styled.input`
  height: 30px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 240px;
  font-size: 0.7em;
  outline: none;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }

  @media (min-width: 1000px) {
    width: 250px;
  }
`;

const Errors = styled.div`
  text-align: center;
  font-size: 0.5em;
  color: red;

  @media (min-width: 1000px) {
    font-size: 0.54em;
  }
`;

const Button = styled.button`
  background-color: #001f43;
  color: #fff;
  border: none;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  font-weight: 100;
  margin-top: 5%;
  margin-bottom: 10%;
`;
const Label = styled.label`
  display: none;
  font-size: 0.8em;
  @media (min-width: 1000px) {
    font-size: 1em;
    display: none;
  }
`;
const Logo = styled.h1`
  color: #3d86d9;
`;

const Bar = styled.div`
  margin-top: 1.5%;
  background-color: #001f43;
  height: 10px;
  width: 82vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ImageDesktop = styled.img`
  width: 70vw;
  height: 70vh;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  margin-top: 5vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 1000px) {
    width: 30vw;
  }
`;

const LinkStyled = styled(Link)`
  color: #666666;
  text-decoration: none;
  margin-top: 60%;
  margin-left: 10%;

  @media (min-width: 700px) {
    margin-top: 1%;
  }
`;

export {
  Container,
  HeaderMobile,
  HeaderDesktop,
  ImageMobile,
  Logo,
  Bar,
  ImageDesktop,
  Main,
  Title,
  Form,
  Input,
  Errors,
  Button,
  Label,
  FormContainer,
  LinkStyled,
};
