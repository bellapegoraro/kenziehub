import { REGISTER_USER } from "./actionsTypes";

const registerReducer = (state = "", action) => {
  switch (actions.type) {
    case REGISTER_USER:
      console.log(action.newUser);
      return action.newUser;
    default:
      return state;
  }
};

export default registerReducer;
