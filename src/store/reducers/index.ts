import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
import { authReducer } from "./auth/authReducer";
import { eventReducer } from "./event/eventReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  //Error with Auth I must rewrite it
  event: eventReducer,
});
