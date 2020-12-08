import { registerUser } from "./actions";
import Axios from "axios";

export const registerUSerThunk = (data) => (dispatch) => {
  // Axios.post
  //   const api = Axios.create({
  //     baseURL: "https://kenziehub.me",
  //   });
  //   api
  Axios.post("/users", { ...data })
    .then((res) => {
      if (res.status !== "error") {
        dispatch(registerUser(data));
      }
    })
    .catch((err) => console.log(err));
};
