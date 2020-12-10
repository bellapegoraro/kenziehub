import styled from "styled-components";
import FontAwesome from "react-fontawesome";

export const MenuContainerOpen = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid black;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
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

  &::first-child {
    color: white;
  }
`;
