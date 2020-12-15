import { types } from "./actionsTypes";

const stateObject = {
  listOfUsers: [],
  token: "",
  userWorks: [],
  userTechs: [],
};

const getUsersReducer = (state = stateObject, actions) => {
  switch (actions.type) {
    case types.getUserList:
      state.listOfUsers = [...state.listOfUsers, ...actions.usersList];
      return state;

    case types.UserToken:
      state.token = actions.token;
      return state;

    case types.UserWorks:
      state.userWorks = [...state.userWorks, ...actions.works];
      return state;

    case types.UserTechs:
      state.userTechs = [...state.userTechs, actions.techs];
      return state;

    case types.deleteUserToken:
      state.token = actions.token;
      return state;

    default:
      return state;
  }
};

export default getUsersReducer;
