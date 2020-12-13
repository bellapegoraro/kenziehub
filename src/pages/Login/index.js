import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import image from "./imagens/undraw_authentication_fsn5.svg";
import {
  Title,
  HeaderDesktop,
  HeaderMobile,
  ImageMobile,
  ImageDesktop,
  Logo,
  Bar,
  Container,
  Main,
  Label,
  Input,
  Errors,
  Button,
} from "./style";

const Login = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const response = await api.post("/sessions", { ...data });
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("authToken", response.data.token);
      history.push("/devs");
      return;
    }
    console.log(response.status);
  };

  return (
    <Container>
      <HeaderMobile>
        <ImageMobile alt="register" src={image} />
      </HeaderMobile>
      <HeaderDesktop>
        <Logo>KenzieHub</Logo>
        <Bar />
      </HeaderDesktop>
      <ImageDesktop alt="register" src={image} />
      <Title>Login</Title>
      <form onSubmit={handleSubmit(handleForm)}>
        <Main>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="Email" ref={register}></Input>
            <Errors>{errors.email?.message}</Errors>
          </div>
          <br />
          <div>
            <Label htmlFor="name">Senha</Label>
            <Input name="password" placeholder="Senha" ref={register}></Input>
            <Errors>{errors.password?.message}</Errors>
            <p></p>
          </div>
          <div>
            <Button type="submit">Entrar</Button>
          </div>
        </Main>
      </form>
    </Container>
  );
};

export default Login;
