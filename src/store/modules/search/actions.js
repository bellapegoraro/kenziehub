import { types } from "./actionsTypes";

export const searchUsers = (user) => ({
  type: types.searchUser,
  user,
});
