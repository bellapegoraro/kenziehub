import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import registerReducer from "./modules/register/reducer";
import SingIn from "./modules/login/reducer";

const reducers = combineReducers({
  login: SingIn,
  user: getUsersReducer,
  register: registerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
