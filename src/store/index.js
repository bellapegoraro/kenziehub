import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import registerReducer from "./modules/register/reducer";

const reducers = combineReducers({
  users: getUsersReducer,
  register: registerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
