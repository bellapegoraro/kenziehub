import { types } from "./actionsTypes";

const getNextPageReducer = (state = "users?perPage=15&page=1", actions) => {
  switch (actions.type) {
    case types.getPage:
      state = actions.nextPage;
      return state;

    default:
      return state;
  }
};

export default getNextPageReducer;
