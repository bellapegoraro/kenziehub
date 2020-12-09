import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  margin-top: 3%;
  width: 200px;
  height: 100px;
`;

const Title = styled.h1`
  color: #001f43;
  margin-top: 3%;
`;

const Form = styled.form`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50vh;
`;

export { Container, Image, Title, Form };
