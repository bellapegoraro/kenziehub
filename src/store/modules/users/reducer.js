import { types } from "./actionsTypes";

const stateObject = {
  listOfUsers: [],
  token: "",
  userWorks: [],
  userTechs: [],
  favorites: [],
};

const getUsersReducer = (state = stateObject, actions) => {
  switch (actions.type) {
    case types.getUserList:
      state.listOfUsers = [...state.listOfUsers, ...actions.usersList];
      return state;

    case types.getUserToken:
      state.token = actions.token;
      return state;

    case types.getUserWorks:
      state.userWorks = [...state.userWorks, ...actions.works];
      return state;

    case types.getUserTechs:
      state.userTechs = [...state.userTechs, actions.techs];
      return state;

    default:
      return state;
  }
};

export default getUsersReducer;
