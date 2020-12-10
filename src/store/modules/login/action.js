import { types } from "./actionType";

export const signIn = (login) => ({
  type: types.postLogin,
  login,
});
