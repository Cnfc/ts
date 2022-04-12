import { Dispatch } from "redux";

import { AuthAction, AuthActionEnums } from "../../types/auth";

export const fetchUsers = () => {
  return (dispatch: Dispatch<AuthAction>) => {
  
        dispatch({
          type: AuthActionEnums.SetAuth,
          payload: 
        });
 
      
};
