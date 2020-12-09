import { types } from "./actionsTypes";
import { getUsers } from "./actions";
import axios from "axios";
import api from "../../../services/api";
export const getUsersThunk = () => (dispatch, getState) => {
  api
    .get("users")
    .then((res) => dispatch(getUsers(res.data)))
    .catch((err) => console.log(err));
};
