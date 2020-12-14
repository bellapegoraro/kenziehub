import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
    <div>
      <img src={data.avatar_url} />
      <form>
        <input type="file" id="avatar" onChange={handleChange} />
      </form>
      <form onSubmit={handleSubmit(handleForm)}>
        <input name="name" placeholder="Nome" ref={register} />
        <input name="contact" placeholder="Contato" ref={register} />
        {password && (
          <>
            <input
              name="old_password"
              placeholder="Antiga senha"
              ref={register}
            />
            <input name="password" placeholder="Nova senha" ref={register} />{" "}
          </>
        )}
        <button>Teste</button>
      </form>
      <p onClick={() => setPassword(!password)}>Alterar senha</p>
    </div>
  );
};

export default ProfilePage;
