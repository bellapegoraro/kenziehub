import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 295px;
  height: 28px;
  margin-left: 5%;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-top: 5%;
  box-shadow: 2px 2px 14px -5px rgba(0, 0, 0, 0.75);
  outline: none;

  @media (min-width: 700px) {
    margin-top: 2%;
    margin-left: 0;
  }

  @media (min-width: 1000px) {
    margin-top: 12%;
    margin-left: 0;
  }
`;
const Button = styled.button`
  width: 10px;
  margin-top: 1%;
  background-color: white;
  border: none;
  margin-left: 1%;
  @media (min-width: 700px) {
    margin-top: 2%;
  }
  @media (min-width: 1000px) {
    margin-top: 12%;
  }
`;

export { Input, Button, Container };
