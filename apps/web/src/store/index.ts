import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";

// Retrieve user information from local storage
const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")!)
  : null;

const initialState = {
  user: userInfoFromStorage || {}, // Use userInfoFromStorage if available, otherwise an empty object
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;
