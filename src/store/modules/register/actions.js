import { types } from "./actionsTypes";

export const registerUser = (newUser) => ({
  type: types.postUser,
  newUser,
});
