import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState, UserProfile } from "../../types/user";
import { z } from "zod";
import { TeacherProfileSchema } from "../../components/core/Profile/EditProfile";
import { updateProfile } from "../../services/profile";

const initialState: UserProfile = {
  id: "",
  bio: "",
  location: "",
  interests: [],
  skills: [],
  avatar: "",
  comeToMeFor: [],
  needHelpFor: [],
  status: "idle",
};

export const UpdateProfile: any = createAsyncThunk(
  "profile/update",
  async (userData: z.infer<typeof TeacherProfileSchema>) => {
    try {
      console.log("userData --> ", userData);
      const response = await updateProfile(userData);
      console.log("response --> ", response);
      return response;
    } catch (error) {
      console.error(error);
      //@ts-ignore
      throw new Error(error.response.data.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile(state, action) {
      console.info("action.payload --> ", action.payload);
      state.status = "idle";
      state.avatar = action.payload.avatar;
      state.id = action.payload.id;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.interests = action.payload.interests;
      state.skills = action.payload.skills;
      state.comeToMeFor = action.payload.comeToMeFor;
      state.needHelpFor = action.payload.needHelpFor;
      localStorage.setItem("profile", JSON.stringify(state));
    },
    resetUserProfile(state) {
      state.avatar = "";
      state.id = "";
      state.bio = "";
      state.location = "";
      state.interests = [];
      state.skills = [];
      state.comeToMeFor = [];
      state.needHelpFor = [];
      localStorage.removeItem("profile");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateProfile.pending, (state) => {
        console.info("state --> ", state);
        state.status = "loading";
      })
      .addCase(UpdateProfile.fulfilled, (state, action) => {
        console.info("action.payload --> ", action.payload);
        state.status = "idle";
        // state.avatar = action.payload.avatar;
        state.id = action.payload.profile.id;
        state.bio = action.payload.profile.bio;
        state.location = action.payload.profile.location;
        state.interests = action.payload.profile.interests;
        state.skills = action.payload.profile.skills;
        state.comeToMeFor = action.payload.profile.comeToMeFor;
        state.needHelpFor = action.payload.profile.needHelpFor;
        localStorage.setItem("profile", JSON.stringify(state));
      })
      .addCase(UpdateProfile.rejected, (state, action) => {
        state.status = "error";
        //@ts-ignore
        state.error = action.error.message;
      });
  },
});

export const getUserProfileSelector = createSelector(
  (state: RootState) => state.profile,
  (profile) => profile
);

export const getUserProfile = (state: RootState) => state.profile;
export const getUserProfileStatus = (state: RootState) => state.profile.status;
//@ts-ignore
export const getUserProfileError = (state: RootState) => state.profile.error;

export const { setUserProfile, resetUserProfile } = profileSlice.actions;
export default profileSlice.reducer;