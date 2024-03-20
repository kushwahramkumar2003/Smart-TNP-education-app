import { createSlice, createSelector } from "@reduxjs/toolkit";
import { UserState } from "../../types/user";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    // @ts-ignore
    setUserInfo(state, action) {
      state = action.payload;
    },
    // @ts-ignore
    resetUserInfo(state) {
      state = {};
    },
  },
});

export const getUserSelector = createSelector(
  (state): UserState => state.user,
  (state): UserState => state
);

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
