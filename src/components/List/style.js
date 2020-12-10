import styled from "styled-components";

const Container = styled.div`
  width: 85vw;
  color: #001f43;
  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90vw;
  }

  @media (min-width: 1000px) {
    width: 70vw;
  }
`;

const Main = styled.div`
  border-radius: 10px;
  margin: 5% 0;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eff0f3;
  box-shadow: 2px 2px 14px -5px rgba(0, 0, 0, 0.75);
  overflow: auto;

  :hover {
    background-color: #d4d5d9;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    width: 42vw;
  }

  @media (min-width: 1000px) {
    width: 20vw;
    height: 25vh;
    margin: 2% 0;
  }
`;

const Infos = styled.div`
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  width: 40vw;

  @media (min-width: 700px) {
    width: 20vw;
  }
  @media (min-width: 1000px) {
    width: 10vw;
  }
`;

const Name = styled.h3`
  /* width: 40vw; */
`;

const Email = styled.div`
  margin-top: 3%;
  font-size: 0.75em;
  @media (min-width: 700px) {
    font-size: 0.9em;
  }
  @media (min-width: 1000px) {
    font-size: 0.7em;
  }
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

  @media (min-width: 700px) {
    width: 10vw;
    margin-left: 0;
  }

  @media (min-width: 1000px) {
    width: 5vw;
    height: 10vh;
  }
`;

export { Container, Image, Main, Techs, Name, Email, Infos };
