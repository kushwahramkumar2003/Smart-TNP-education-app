import { Dispatch } from "redux";
import { resetUserInfo } from "../slices/userReducers";
export const logout = () => (dispatch: Dispatch) => {
  dispatch(resetUserInfo());
  localStorage.removeItem("user");
};
