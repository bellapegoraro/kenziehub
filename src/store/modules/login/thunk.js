import axios from "axios";
import { signIn } from "./action";

export const loginThunk = (data, setAuthentication) => (dispach) => {
  axios
    .post(" https://kenziehub.me/sessions", { ...data })

    .then((res) => {
<<<<<<< HEAD
      if (res.status !== "error") {
        window.localStorage.setItem("authToken", res.data.token);
        dispach(signIn(res.data));
      }
=======
      window.localStorage.setItem("authToken", res.data.token);
      setAuthentication(true);
      dispach(signIn(res.data));
>>>>>>> develop
    })
    .catch((err) => console.log(err.response));
};
