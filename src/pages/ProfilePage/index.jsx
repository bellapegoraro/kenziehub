import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Container,
  Input,
  FormImage,
  FormInputs,
  ImageProfile,
  Button,
  Title,
  InputImg,
  HeaderMobile,
  HeaderDesktop,
  Bar,
  Main,
  ButtonPassword,
  StyledLink,
  StyledLinkWeb,
} from "./style";

const ProfilePage = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  const [password, setPassword] = useState(false);
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras"),
    contact: yup.string(),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      ),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const response = await api.put("/profile", { ...data });
    if (response.status === 200) {
      history.push("/profile");
    }
  };

  useEffect(() => {
    api
      .get("/profile")
      .then((res) => setData(res.data))
      .catch(() => history.push("/devs"));
  }, [data.avatar_url]);

  const handleChange = async (e) => {
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    const response = await api.patch("/users/avatar", data);
    setData(response.data);
  };
  return (
    <Container>
      <HeaderMobile>
        <Title>Editar perfil</Title>
        <StyledLink onClick={() => history.push('/profile')}>Voltar</StyledLink>
      </HeaderMobile>
      <HeaderDesktop>
        <Title>Editar perfil</Title>
        <Bar></Bar>
        
      </HeaderDesktop>
      <Main>
        <ImageProfile src={data.avatar_url} />
        <FormImage>
          <InputImg type="file" id="avatar" onChange={handleChange} />
        </FormImage>
        <FormInputs onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="name">Nome</label>
          <Input name="name" placeholder="Nome" ref={register} />
          <label htmlFor="contact">Contato</label>
          <Input name="contact" placeholder="Contato" ref={register} />
          {password && (
            <>
              <label htmlFor="old_password">Senha antiga</label>
              <Input
                name="old_password"
                placeholder="Antiga senha"
                ref={register}
              />
              <label htmlFor="password">Nova senha</label>
              <Input name="password" placeholder="Nova senha" ref={register} />
            </>
          )}
          <Button type="submit">Salvar</Button>
        </FormInputs>
        <ButtonPassword onClick={() => setPassword(!password)}>
          Alterar senha
        </ButtonPassword>
        <StyledLinkWeb onClick={() => history.push('/profile')}>Voltar</StyledLinkWeb>
      </Main>
      
    </Container>
  );
};

export default ProfilePage;
