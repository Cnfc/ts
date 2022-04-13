import { IUser } from "../models/user";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionEnums {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
  type: AuthActionEnums.SET_AUTH;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionEnums.SET_USER;
  payload: IUser;
}
export interface SetErrorAction {
  type: AuthActionEnums.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: AuthActionEnums.SET_IS_LOADING;
  payload: boolean;
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetErrorAction
  | SetIsLoadingAction;
