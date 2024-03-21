import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducers";
import { UserState } from "../types/user";

const getUserFromLocalStorage = (): UserState | null => {
  const user = localStorage.getItem("user");
  if (user === "undefined" || !user) return null;
  let parsedUser = JSON.parse(user);
  parsedUser.loggedIn = true;
  return parsedUser;
};

const initialState = {
  user: getUserFromLocalStorage() || {},
};

const store = configureStore({
  reducer: {
    user: userReducer as Reducer<UserState | undefined | UnknownAction | {}>,
  },
  preloadedState: initialState,
});

export default store;
