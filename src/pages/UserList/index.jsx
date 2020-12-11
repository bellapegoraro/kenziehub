import List from "../../components/List";
import { Container } from "./style";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

const Users = () => {
  return (
    <Container>
      <Menu />
      <Header />
      <List />
    </Container>
  );
};

export default Users;
