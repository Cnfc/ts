import { Dispatch } from "redux";
import axios from "axios";

import { UserAction, UserActionTypes } from "./users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const res = await axios.get("http://jsonplaceholder.typicode.com/users");
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: res.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error" });
    }
  };
};
