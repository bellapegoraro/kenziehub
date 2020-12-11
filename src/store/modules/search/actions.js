import { types } from "./actionsTypes";

export const searchUser = (user) => ({
  type: types.searchUser,
  user,
});
