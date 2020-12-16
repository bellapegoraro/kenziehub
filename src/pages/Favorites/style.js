import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 700px) {
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
  }
`;

const HeaderMobile = styled.div`
  width: 85vw;
  margin: 0;
  text-align: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const HeaderDesktop = styled.div`
  display: flex;
  width: 85vw;
  margin: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Bar = styled.div`
  margin-top: 2%;
  margin-left: 2%;
  background-color: #001f43;
  height: 10px;
  width: 82vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: #3d86d9;
`;

const List = styled.div`
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export { Container, HeaderMobile, HeaderDesktop, Bar, Title, List };
