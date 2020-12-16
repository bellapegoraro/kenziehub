import {
  getUserList,
  getUserToken,
  getUserTechs,
  getUserWorks,
  getFavorites,
} from "./actions";
import api from "../../../services/api";

export const getUsersThunk = () => (dispatch, getState) => {
  const { page } = getState();
  api
    .get(page)
    .then((res) => {
      dispatch(getUserList(res.data));
    })
    .catch((err) => console.log(err));
};

export const getUserTokenReducer = (data) => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    dispatch(getUserToken(token));
  }
};
