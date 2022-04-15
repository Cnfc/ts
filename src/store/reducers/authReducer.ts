import { AuthState, AuthAction, AuthActionEnums } from "../../types/auth";
import { IUser } from "../../models/IUser";

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: "",
  isLoading: false,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionEnums.SET_AUTH:
      return { ...state, isLoading: false, isAuth: action.payload };
    case AuthActionEnums.SET_USER:
      return { ...state, isLoading: false, user: action.payload };
    case AuthActionEnums.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case AuthActionEnums.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
