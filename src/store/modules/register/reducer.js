import { types } from "./actionsTypes";

const registerReducer = (state = "", action) => {
  switch (action.type) {
    case types.postUser:
      return (state = action.newUser);
    default:
      return state;
  }
};

export default registerReducer;
