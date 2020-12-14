import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import registerReducer from "./modules/register/reducer";
import SingIn from "./modules/login/reducer";
import searchUser from "./modules/search/reducer";
import getNextPageReducer from "./modules/pageList/reducer";

const reducers = combineReducers({
  login: SingIn,
  users: getUsersReducer,
  register: registerReducer,
  search: searchUser,
  page: getNextPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
