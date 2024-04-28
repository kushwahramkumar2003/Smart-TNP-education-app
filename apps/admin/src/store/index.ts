import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducers";
import { UserState } from "../types/user";
import profileReducer from "./slices/profileReducers";
import { UserProfile } from "../types/user"; // Import the UserProfile type

const getUserFromLocalStorage = (): UserState | null => {
  const user = localStorage.getItem("user");
  if (user === "undefined" || !user) return null;
  let parsedUser = JSON.parse(user);
  parsedUser.loggedIn = true;
  return parsedUser;
};

const getUserProfileFromLocalStorage = (): UserProfile | null => {
  const profile = localStorage.getItem("profile");
  if (profile === "undefined" || !profile) return null;
  let parsedUser = JSON.parse(profile);
  return parsedUser;
};

const initialState = {
  user: getUserFromLocalStorage() || {},
  profile: getUserProfileFromLocalStorage() || {},
};


const store = configureStore({
  reducer: {
    user: userReducer as Reducer<UserState | undefined | UnknownAction | {}>,
    profile: profileReducer as Reducer<
      UserProfile | undefined | UnknownAction | {}
    >,
  },
  preloadedState: initialState,
});

export default store;
