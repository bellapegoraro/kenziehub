import Search from "../Search";
import {
  Container,
  Logo,
  HeaderMobile,
  HeaderDesktop,
  Bar,
  Message,
  Title,
  Group,
} from "./style";

const Header = () => {
  return (
    <Container>
      <HeaderMobile>
        <Logo>KenzieHub</Logo>
        <Search />
      </HeaderMobile>
      <HeaderDesktop>
        <Group>
          <Logo>KenzieHub</Logo>
          <Bar />
        </Group>
        <Message>Os melhores devs estão aqui. Faça parte você também!</Message>
        <Group>
          <Title>Devs</Title>
          <Search />
        </Group>
      </HeaderDesktop>
    </Container>
  );
};

export default Header;
