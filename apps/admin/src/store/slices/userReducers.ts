import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState, UserState } from "../../types/user";

const initialState: UserState = {
  name: "",
  email: "",
  loggedIn: false,
  avatar: "",
  username: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.loggedIn = true;
      state.avatar = action.payload.avatar;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.username = action.payload.username;

      console.log("payload", action.payload);
      console.log("setUserInfo", state);
    },

    resetUserInfo(state) {
      state.avatar = "";
      state.email = "";
      state.name = "";
      state.username = "";
      state.loggedIn = false;
    },
  },
});

export const getUserSelector = createSelector(
  (state: RootState) => state.user,
  (user) => user
);

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
