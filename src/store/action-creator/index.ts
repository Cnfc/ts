import { AuthActionCreators } from "./auth";
import { fetchUsers } from "./user";

export const allActionCreators = {
  ...AuthActionCreators,
  fetchUsers,
};
