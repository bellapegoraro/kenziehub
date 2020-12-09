import { createStore, combineReducers, applyMiddleware } from "redux";
<<<<<<< HEAD
import getUsersReducer from "./modules/users/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  users: getUsersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
=======
import thunk from "redux-thunk";
import getUsersReducer from "./modules/users/reducer";
import registerReducer from "./modules/register/reducer";

const reducers = combineReducers({
  users: getUsersReducer,
  register: registerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
>>>>>>> master

export default store;
