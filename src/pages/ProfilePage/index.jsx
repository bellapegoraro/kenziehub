import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
} from "./style";
import Menu from "../../components/Menu";
import { useSelector } from "react-redux";

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
    console.log(data);
    const response = await api.put("/profile", { ...data });
    console.log(response);
  };

  const { token } = useSelector((state) => state);

  useEffect(() => {
    console.log(token);

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
      <Menu />
      <HeaderMobile>
        <Title>Editar perfil</Title>
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
          <ButtonPassword onClick={() => setPassword(!password)}>
            Alterar senha
          </ButtonPassword>
          {password ? (
            <>
              <label htmlFor="old_password">Senha antiga</label>
              <Input
                name="old_password"
                placeholder="Antiga senha"
                ref={register}
              />
              <label htmlFor="password">Nova senha</label>
              <Input
                name="password"
                placeholder="Nova senha"
                ref={register}
              />{" "}
            </>
          ) : null}
        </FormInputs>

        <Button>Salvar</Button>
      </Main>
    </Container>
  );
};

export default ProfilePage;
