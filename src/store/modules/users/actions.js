import { types } from "./actionsTypes";

export const getUserList = (usersList) => ({
  type: types.getUserList,
  usersList,
});

export const getUserWorks = (works) => ({
  type: types.UserWorks,
  works,
});

export const getUserTechs = (techs) => ({
  type: types.UserTechs,
  techs,
});

export const getUserToken = (token) => ({
  type: types.UserToken,
  token,
});

export const deleteUserToken = (token) => ({
  type: types.deleteUserToken,
  token,
});
