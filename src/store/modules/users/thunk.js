import {
  getUserList,
  getUserToken,
  getUserTechs,
  getUserWorks,
} from "./actions";
import api from "../../../services/api";

export const getUsersThunk = () => (dispatch, getState) => {
  const { page } = getState();
  api
    .get(page)
    .then((res) => {
      dispatch(getUserList(res.data));
      dispatch(getUserTokenReducer(res.data.token));
      dispatch(getUserTechsReducer(res.data.token));
      dispatch(getUserWorksReducer(res.data.token));
    })
    .catch((err) => console.log(err));
};

export const getUserTokenReducer = (token) => async (dispatch, getState) => {
  dispatch(getUserToken(token));
};

export const getUserTechsReducer = (token) => async (dispatch, getState) => {
  const response = await api
    .get("/profile", { header: `Bearer ${token}` })
    .catch((err) => console.log(err));

  dispatch(getUserTechs(response.data.techs));
};

export const getUserWorksReducer = (token) => async (dispatch, getState) => {
  const response = await api
    .get("/profile", { header: `Bearer ${token}` })
    .catch((err) => console.log(err));
  dispatch(getUserWorks(response.data.works));
};
