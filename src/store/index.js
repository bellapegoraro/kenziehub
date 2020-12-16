import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import searchUser from "./modules/search/reducer";
import getNextPageReducer from "./modules/pageList/reducer";

const reducers = combineReducers({
  users: getUsersReducer,
  search: searchUser,
  page: getNextPageReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
