import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserThunk } from "../../store/modules/register/thunk";
import { useDispatch } from "react-redux";
import image from "./imagens/undraw_secure_login_pdn4.svg";
import { useHistory } from "react-router-dom";
import {
  Container,
  HeaderMobile,
  ImageMobile,
  HeaderDesktop,
  ImageDesktop,
  Main,
  Title,
  Bar,
  Logo,
  Form,
  Input,
  Label,
  Button,
  LinkStyled,
  Errors,
} from "./style";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    bio: yup.string(),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    dispatch(registerUserThunk(data));
    setTimeout(() => {
      history.push("/login");
    }, 1500);
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
      <Main>
        <Title>Cadastro</Title>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="Email" ref={register}></Input>
          <Errors>{errors.email?.message}</Errors>
          <Label htmlFor="name">Senha</Label>
          <Input name="password" placeholder="Senha" ref={register}></Input>
          <Errors>{errors.password?.message}</Errors>
          <Label htmlFor="nome">Nome</Label>
          <Input name="name" placeholder="Nome" ref={register}></Input>
          <Errors>{errors.name?.message}</Errors>
          <Label htmlFor="bio">Bio</Label>
          <Input name="bio" placeholder="Bio" ref={register}></Input>
          <Label htmlFor="contact">Contato</Label>
          <Input name="contact" placeholder="Contato" ref={register}></Input>
          <Errors>{errors.contact?.message}</Errors>
          <Label htmlFor="course_module">Módulo do curso</Label>
          <Input
            list="course_options"
            name="course_module"
            placeholder="Módulo do curso"
            ref={register}
          ></Input>
          <datalist id="course_options">
            <option value="Primeiro Módulo (Frontend básico)" />
            <option value="Segundo Módulo (Frontend avançado)" />
            <option value="Terceiro Módulo (Backend básico)" />
            <option value="Quarto Módulo (Backend avançado)" />
          </datalist>
          <Errors>{errors.course_module?.message}</Errors>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <LinkStyled to="/login">Login</LinkStyled>
      </Main>
    </Container>
  );
};

export default RegisterForm;
