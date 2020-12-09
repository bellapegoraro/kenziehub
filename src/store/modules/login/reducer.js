import { types } from "./actionsTypes";

const signIn = (state = "", action) => {
  switch (action.type) {
    case types.postLogin:
      return (state = action.login);
    default:
      return state;
  }
};

export default signIn;
