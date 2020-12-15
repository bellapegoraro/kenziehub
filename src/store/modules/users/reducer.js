import { types } from "./actionsTypes";

const stateObject = {
  listOfUsers: [],
  token: "",
  userWorks: [],
  userTechs: [],
};

const getUsersReducer = (state = stateObject, actions) => {
  console.log(`reducer`, actions);
  switch (actions.type) {
    case types.getUserList:
      const { userList } = actions;
      return { ...state, listOfUsers: [...userList] };

    case types.UserToken:
      const { token } = actions;
      return { ...state, token };

    case types.UserWorks:
      const { works } = actions;
      return { ...state, userWorks: [...works] };

    case types.UserTechs:
      const { techs } = actions;
      return { ...state, userTechs: [...techs] };

    case types.deleteUserToken:
      const deltoken = actions.token;
      return { ...state, token: deltoken };

    default:
      return state;
  }
};

export default getUsersReducer;
