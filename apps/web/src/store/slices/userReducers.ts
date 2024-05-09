import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState, UserState } from "../../types/user";
import { login } from "../../services/auth";
// import { LoginSchema } from "../../../../admin/src/pages/Login/Login";
import { z } from "zod";

const SESSION_EXPIRATION_TIME = 5 * 60 * 60 * 1000;

const initialState: UserState = {
  name: "",
  email: "",
  loggedIn: false,
  avatar: "",
  username: "",
  role: "",
  status: "idle",
  lastLoggedIn: null,
};

export const loginUser: any = createAsyncThunk(
  "auth/login",
  async (userData:any) => {
    try {
      console.log("userData --> ", userData);
      const response = await login(userData);
      console.log("response --> ", response);
      return response;
    } catch (error) {
      console.error(error);
      //@ts-ignore
      throw new Error(error.response.data.message);
    }
  }
);

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
      state.lastLoggedIn = Date.now();
      localStorage.setItem("user", JSON.stringify(state));
    },
    resetUserInfo(state) {
      state.avatar = "";
      state.email = "";
      state.name = "";
      state.username = "";
      state.loggedIn = false;
      state.lastLoggedIn = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.status = "idle";
        state.avatar = user.avatar;
        state.email = user.email;
        state.name = user.name;
        state.role = user.role;
        state.username = user.username;
        state.loggedIn = true;
        user.loggedIn = true;
        state.lastLoggedIn = Date.now();
        localStorage.setItem("user", JSON.stringify(state));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        //@ts-ignore
        state.error = action.error.message;
      });
  },
});

export const getUserSelector = createSelector(
  (state: RootState) => state.user,
  (user) => user
);

export const getUser = (state: RootState) => state.user;
export const getUserStatus = (state: RootState) => state.user.status;
//@ts-ignore
export const getUserError = (state: RootState) => state.user.error;

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;

export const isSessionExpired = () => {
  const userData = localStorage.getItem("user");
  if (!userData) {
    return false;
  }
  if (userData) {
    const user = JSON.parse(userData);
    const { lastLoggedIn } = user;
    if (lastLoggedIn) {
      const currentTime = Date.now();
      return currentTime - lastLoggedIn > SESSION_EXPIRATION_TIME;
    }
  }
  return true;
};
