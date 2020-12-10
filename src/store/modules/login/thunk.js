import axios from "axios";
import { signIn } from "./action";

export const loginThunk = (data) => (dispach) => {
  axios
    .post(" https://kenziehub.me/sessions", { ...data })

    .then((res) => {
      if (res.status !== "error") {
        window.localStorage.setItem("authToken", res.data.token);
        dispach(signIn(res.data));
      }
    })
    .catch((err) => console.log(err.response));
};
