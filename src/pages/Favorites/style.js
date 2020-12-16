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
`;

const Title = styled.h1`
  color: #3d86d9;
`;

export { Container, HeaderMobile, Title };
