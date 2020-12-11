import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginThunk } from "../../store/modules/login/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
const Login = () => {
  const [authentication, setAuthentication] = useState(false);
  const token = localStorage.getItem("authToken");
  const history = useHistory();
  const dispatch = useDispatch();
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
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <input placeholder="email" name="email" ref={register}></input>
        {errors.email?.message}
      </div>
      <p></p>
      <div>
        <input placeholder="Senha" name="password" ref={register}></input>
        {errors.password?.message}
        <p></p>
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default Login;
