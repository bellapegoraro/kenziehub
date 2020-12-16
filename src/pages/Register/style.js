import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    margin-bottom: 3%;
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

const ImageMobile = styled.img`
  margin-top: 3%;
  width: 200px;
  height: 90px;
  opacity: 0.6;

  @media (min-width: 500px) {
    margin-top: 1%;
  }
`;

const HeaderDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-top: 1%;
  width: 100vw;
  @media (max-width: 1000px) {
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
  width: 500px;
  height: 500px;
  margin-left: 10%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Main = styled.div`
  @media (min-width: 1000px) {
    margin-left: 20%;
  }
`;

const Title = styled.h1`
  color: #001f43;
  margin-top: 3%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60vw;
  height: 80vh;
  @media (min-width: 700px) {
    width: 30vw;
  }
  @media (min-width: 1000px) {
    height: 74vh;
    width: 18vw;
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

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }

  @media (min-width: 1000px) {
    width: 250px;
  }
`;

const Label = styled.label`
  font-size: 0.8em;
  @media (min-width: 1000px) {
    font-size: 1em;
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
  margin-left: 20%;
  margin-top: 5%;
  outline: none;
  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  color: #666666;
  text-decoration: none;
  margin-left: 40%;
  margin-top: 2%;

  @media (min-width: 700px) {
    margin-top: 1%;
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

export {
  Container,
  HeaderMobile,
  ImageMobile,
  HeaderDesktop,
  ImageDesktop,
  Logo,
  Main,
  Title,
  Form,
  Bar,
  Input,
  Label,
  Button,
  LinkStyled,
  Errors,
};
