import { types } from "./actionsTypes";

export const signIn = (login) => ({
  type: types.postLogin,
  login,
});
