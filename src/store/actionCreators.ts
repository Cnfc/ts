import { AuthActionCreators } from "./reducers/auth/authActionCreator";
import { EventActionCreators } from "./reducers/event/eventActionCreator";
import { fetchUsers } from "./reducers/users/user";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
  fetchUsers,
};
