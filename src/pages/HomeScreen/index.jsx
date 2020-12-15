import { useHistory } from "react-router-dom";
import {
  Container,
  TopBarMobile,
  Label,
  Button,
  Footer,
  Content,
  GrayButton,
  Title,
  TopBarDesktop,
  Bar,
  Image,
  ContentDesktop,
} from "./style";
import ImgDecoration from "./images/undraw_Freelancer_re_irh4.png";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <TopBarMobile>
        <Title>KenzieHub</Title>
      </TopBarMobile>
      <TopBarDesktop>
        <Title>KenzieHub</Title>
        <Bar />
      </TopBarDesktop>
      <ContentDesktop>
        <Image alt="imageHomeScreen" src={ImgDecoration} />
        <Content>
          <Label>Já tenho conta</Label>
          <Button onClick={() => history.push("/login")}>Login</Button>
          <Label>Não tenho conta</Label>
          <Button onClick={() => history.push("/register")}>Cadastre-se</Button>
          <Label>Entrar sem fazer login</Label>
          <GrayButton onClick={() => history.push("/devs")}>Devs</GrayButton>
        </Content>
      </ContentDesktop>
      <Footer>Todos os direitos reservados</Footer>
    </Container>
  );
};

export default Home;
