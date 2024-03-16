import { userActions } from "../reducers/userReducers.js";
import { Dispatch } from "redux";
export const logout = () => (dispatch: Dispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("user");
};
