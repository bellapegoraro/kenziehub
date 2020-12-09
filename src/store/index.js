import { createStore, combineReducers, applyMiddleware } from "redux";
import getUsersReducer from "./modules/users/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  users: getUsersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
