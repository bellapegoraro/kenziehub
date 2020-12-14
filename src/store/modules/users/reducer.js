import { types } from "./actionsTypes";

const getUsersReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.getUser:
      state = [...state, ...actions.usersList];
      return state;

    default:
      return state;
  }
};

export default getUsersReducer;
