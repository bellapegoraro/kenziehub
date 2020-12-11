import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    contact: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
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
        <input name="old_password" placeholder="Antiga Senha" ref={register} />
        <input name="password" placeholder="Nova Senha" ref={register} />
        <button>Teste</button>
      </form>
    </div>
  );
};

export default ProfilePage;
