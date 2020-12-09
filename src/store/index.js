import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import registerReducer from "./modules/register/reducer";
import userProfileReducer from "./modules/userProfile/reducer";

const reducers = combineReducers({
  user: getUsersReducer,
  register: registerReducer,
  userProfile: userProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
