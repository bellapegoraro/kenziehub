import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginThunk } from "../../store/modules/login/thunk";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const handleForm = (data) => {
    dispatch(loginThunk(data, history));
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
