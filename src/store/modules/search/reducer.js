import { types } from "./actionsTypes";

const searchUserReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.searchUser:
      state = actions.users;
      return state;
    default:
      return state;
  }
};

export default searchUserReducer;
