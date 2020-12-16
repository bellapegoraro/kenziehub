import { Container } from "./style";

const Alert = ({ added }) => {
  return (
    <Container>
      {added === true ? "Usuário foi removido" : "Adicionado aos favoritos"}
    </Container>
  );
};

export default Alert;
