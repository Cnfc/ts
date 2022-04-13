import { Dispatch } from "redux";
import { IUser } from "../../models/user";
// import { AppDispatch } from "../../index";

import {
  SetUserAction,
  SetErrorAction,
  AuthActionEnums,
  SetAuthAction,
  SetIsLoadingAction,
} from "../../types/auth";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnums.SET_USER,
    payload: user,
  }),
  setAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnums.SET_AUTH,
    payload: auth,
  }),
  SetIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnums.SET_IS_LOADING,
    payload,
  }),
  SetError: (error: string): SetErrorAction => ({
    type: AuthActionEnums.SET_ERROR,
    payload: error,
  }),

  login: (username: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(AuthActionCreators.SetIsLoading(true));
      const mochUsers = await axios.get("./users.json");
      console.log(mochUsers);
    } catch (error) {
      dispatch(AuthActionCreators.SetError("Error with Login"));
    }
  },
  logout: () => async (dispatch: any) => {
    try {
    } catch (e) {}
  },
};
