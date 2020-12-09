import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserThunk } from "../../store/modules/register/thunk";
import { useDispatch } from "react-redux";
import image from "./imagens/undraw_secure_login_pdn4.svg";
import { Container, Image, Title, Form } from "./style";

const RegisterForm = () => {
  const dispatch = useDispatch();
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
  };

  return (
    <Container>
      <Image alt="register" src={image} />
      <Title>Cadastro</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <input name="email" placeholder="Email" ref={register}></input>
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input name="password" placeholder="Senha" ref={register}></input>
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <input name="name" placeholder="Nome" ref={register}></input>
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        <input name="bio" placeholder="Bio" ref={register}></input>
        <input name="contact" placeholder="contato" ref={register}></input>
        <p style={{ color: "red" }}>{errors.contact?.message}</p>
        <input
          list="course_options"
          name="course_module"
          placeholder="Módulo do curso"
          ref={register}
        ></input>
        <datalist id="course_options">
          <option value="Primeiro Módulo (Frontend básico)" />
          <option value="Segundo Módulo (Frontend avançado)" />
          <option value="Terceiro Módulo (Backend básico)" />
          <option value="Quarto Módulo (Backend avançado)" />
        </datalist>
        <p style={{ color: "red" }}>{errors.courseModule?.message}</p>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
