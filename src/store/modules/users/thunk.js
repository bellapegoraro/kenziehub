import { getUsers } from "./actions";
import api from "../../../services/api";

export const getUsersThunk = () => (dispatch, getState) => {
  const { page } = getState();

  api
    .get(page)
    .then((res) => dispatch(getUsers(res.data)))
    .catch((err) => console.log(err));
};
