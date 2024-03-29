import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
    setUserInfo(state, action) {
      state = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
    resetUserInfo(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = {};
    },
  },
});

const { setUserInfo, resetUserInfo } = userSlice.actions;
const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { setUserInfo, resetUserInfo, userReducer, userActions };
