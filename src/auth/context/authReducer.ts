import { AuthAction, AuthState } from "../interfaces";
import { types } from "../types/types";


export const authReducer = (state:AuthState, action:AuthAction) => {


  switch (action.type) {

    case types.login:
         return {
          ...state,
          logged: true,
          user: action.payload,
        };

    case types.logout:
          return {
          logged: false,
          };

    default:
      return state;
  }
}
