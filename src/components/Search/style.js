import styled from "styled-components";

const Container = styled.div`
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 220px;
  height: 28px;
  margin-left: 15%;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin-top: 5%;
  box-shadow: 2px 2px 14px -5px rgba(0, 0, 0, 0.75);
  outline: none;
  @media (max-width: 400px) {
    margin-left: 3%;
  }
  @media (min-width: 700px) {
    margin-top: 2%;
    margin-left: 0;
  }

  @media (min-width: 1000px) {
    width: 330px;
    margin-top: 12%;
    margin-right: 0;
  }
`;
const Button = styled.button`
  width: 10px;
  background-color: white;
  border: none;
  margin-left: 3%;
  outline: none;
  cursor: pointer;
  @media (min-width: 700px) {
    margin-top: 2%;
  }
  @media (min-width: 1000px) {
    margin-top: 8%;
    margin-right: 4%;
  }
`;

export { Input, Button, Container };
