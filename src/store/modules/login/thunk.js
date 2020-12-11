import axios from "axios";
import { signIn } from "./action";

export const loginThunk = (data, setAuthentication) => (dispach) => {
  axios
    .post(" https://kenziehub.me/sessions", { ...data })

    .then((res) => {
      window.localStorage.setItem("authToken", res.data.token);
      setAuthentication(true);
      dispach(signIn(res.data));
    })
    .catch((err) => console.log(err.response));
};
