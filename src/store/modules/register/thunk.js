import { registerUser } from "./actions";
import Axios from "axios";

export const registerUSerThunk = (data) => (dispatch) => {
  // Axios.post
  dispatch(registerUser(data));
};
