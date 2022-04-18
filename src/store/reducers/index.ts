import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
import { authReducer } from "./auth/authReducer";
import { eventReducer } from "./event/eventReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  event: eventReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
