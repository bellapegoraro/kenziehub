import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const MenuContainerOpen = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0e1f43;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 10px;

  @media (min-width: 1024px) {
    height: 100vh;
    width: 200px;
  }
`;

export const LinkContainer = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 0px 10px;

  span {
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

export const MenuContainerClose = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  background-color: #0e1f43;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media (min-width: 1024px) {
    border-radius: 0%;
    height: 100vh;
  }
`;
