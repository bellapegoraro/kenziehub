import { registerUser } from "./actions";
import Axios from "axios";

export const registerUserThunk = (data) => (dispatch) => {
  const url = "https://kenziehub.me/users";
  Axios.post(url, { ...data })
    .then((res) => {
      if (res.status !== "error") {
        dispatch(registerUser(data));
      }
    })
    .catch((err) => console.log(err.response));
};
