import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2%;
`;
const Logo = styled.h1`
  color: #3d86d9;
  margin-left: 20%;
  font-size: 2.5em;
  @media (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
  }
  @media (min-width: 1000px) {
    margin-left: 0;
  }
`;

const HeaderMobile = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;

const HeaderDesktop = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Bar = styled.div`
  background-color: #001f43;
  height: 10px;
  width: 53vw;
  margin-left: 1%;
  margin-top: 3%;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.8em;
  margin-top: 5%;
  border-radius: 10px;
  height: 20vh;
  background-color: #3d86d9;
`;

const Title = styled.h2`
  margin-top: 3%;
  font-size: 1.8em;
  color: #707070;
`;

export {
  Container,
  Logo,
  HeaderMobile,
  HeaderDesktop,
  Bar,
  Message,
  Title,
  Group,
};
