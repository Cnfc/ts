import { IUser } from "../models/user";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
}

export enum AuthActionEnums {
  SetAuth = "SetAuth",
}

interface SetAuthAction {
  type: AuthActionEnums.SetAuth;
  payload: boolean;
}

export type AuthAction = SetAuthAction;
//   | FetchUserSuccesssAction
//   | FetchUsersErrorsAction;
