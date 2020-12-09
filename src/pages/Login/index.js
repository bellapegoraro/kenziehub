import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(4, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (data) => {
    axios.post(" https://kenziehub.me", { ...data }).then((res) => {
      window.localStorage.setItem("authToken", res.data.auth_token);
      props.setAuthentication(true);
      history.push("/bemvindo");
    });
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
