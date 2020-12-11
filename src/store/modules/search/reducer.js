import { types } from "./actionsTypes";

const searchUserReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.searchUser:
      state = actions.user;
      return state;
    default:
      return state;
  }
};

export default searchUserReducer;
