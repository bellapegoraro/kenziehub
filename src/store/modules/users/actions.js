import { types } from "./actionsTypes";

export const getUsers = (usersList) => ({
  type: types.getUser,
  usersList,
});
