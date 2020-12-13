import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  color: #3d86d9;
  text-align: center;
  margin-top: 5%;

  @media (min-width: 1000px) {
    margin-top: 3%;
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
  height: 4vh;
`;

const InputImg = styled.input`
  ::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }

  &:before {
    margin-left: 26%;
    content: "Escolha um arquivo";
    display: inline-block;
    background-color: #001f43;
    color: #fff;
    border: none;
    border-radius: 20px;
    border-radius: 3px;
    padding: 9px;
    outline: none;
    white-space: nowrap;
    border-radius: 40px;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 0.9em;
  }
`;

const ImageDecoration = styled.img`
  width: 40vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ImageProfile = styled.img`
  width: 40vw;
  height: 25vh;
  border-radius: 50%;
  @media (min-width: 700px) {
    width: 30vw;
    height: 30vh;
  }
`;

const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: space-evenly;
`;
const Button = styled.button`
  background-color: #001f43;
  color: #fff;
  border: none;
  height: 30px;
  width: 150px;
  border-radius: 10px;
  font-weight: 100;
  outline: none;
  cursor: pointer;
`;

const HeaderMobile = styled.div`
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
  margin-top: 4.5%;
  margin-left: 1%;
`;

const Main = styled.div`
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1000px) {
    width: 30vw;
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
  ImageDecoration,
  Bar,
  Main,
};
