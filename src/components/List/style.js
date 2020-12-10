import styled from "styled-components";

const Container = styled.div`
  background-color: #eff0f3;
  width: 85vw;
  color: #001f43;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Infos = styled.div`
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  width: 40vw;
`;

const Name = styled.h3`
  /* width: 40vw; */
`;

const Email = styled.div`
  /* width: 20vw; */
`;

const Techs = styled.div`
  text-align: center;
  margin-top: 3%;
  width: 100vw;
`;

const Image = styled.img`
  margin-left: 2%;
  height: 80px;
  width: 18vw;
  border-radius: 50%;
  background-color: white;
`;

export { Container, Image, Main, Techs, Name, Email, Infos };
