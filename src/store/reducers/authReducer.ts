import { AuthState, AuthAction, AuthActionEnums } from "../../types/auth";
import {IUser} from '../../models/user';

const initialState: AuthState = {
  isAuth: false,
  user:IUser;
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionEnums.SetAuth:
      return { ...state, isAuth: action.payload };
    // case UserActionTypes.FETCH_USERS_SUCCESS:
    //   return { users: action.payload, loading: false, error: null };
    // case UserActionTypes.FETCH_USERS_ERROR:
    //   return { users: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
