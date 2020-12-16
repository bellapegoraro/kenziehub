import { types } from "./actionsTypes";

export const getUserList = (usersList) => ({
  type: types.getUserList,
  usersList,
});

export const getUserWorks = (works) => ({
  type: types.getUserWors,
  works,
});

export const getUserTechs = (techs) => ({
  type: types.getUserTechs,
  techs,
});

export const getUserToken = (token) => ({
  type: types.getUserToken,
  token,
});
