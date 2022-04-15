import { Dispatch } from "redux";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "..";
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

  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.SetIsLoading(true));
        const res = await axios.get<IUser[]>("./users.json");
        const mockUser = res.data.find(
          (user) => user.username === username && user.password === password
        );

        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          console.log("works");
          console.log(localStorage, "firts");
          dispatch(AuthActionCreators.setAuth(true));
          // dispatch(AuthActionCreators.setAuth(true));
          console.log(localStorage, "second");
          dispatch(AuthActionCreators.setUser(mockUser));
        } else {
          dispatch(AuthActionCreators.SetError("Not Correct or invalid"));
        }
      } catch (error) {
        dispatch(AuthActionCreators.SetError("Error with Login"));
        dispatch(AuthActionCreators.SetIsLoading(false));
      }
      console.log(localStorage, "last");
    },
  logout: () => async (dispatch: any) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setAuth(false));
  },
};
