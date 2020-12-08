import { REGISTER_USER } from "./actionsTypes";

export const registerUser = (newUser) => ({
  type: REGISTER_USER,
  newUser,
});
