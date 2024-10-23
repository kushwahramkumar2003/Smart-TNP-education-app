import { atom } from "recoil";

export interface UserState {
  name: string;
  email: string;
  loggedIn: boolean;
  avatar: string;
  username: string;
  role: string;
  status: string;
  lastLoggedIn: number | null;
}

export interface UserProfile {
  id?: string;
  bio?: string;
  location?: string;
  interests?: string[];
  skills?: string[];
  avatar?: string;
  comeToMeFor: {
    id: string;
    title: string;
    description: string;
  }[];
  needHelpFor: {
    id: string;
    title: string;
    description: string;
  }[];
  status: string;
}

export interface RootState {
  user: UserState;
  profile: UserProfile;
}

const getUserFromLocalStorage = (): UserState | null => {
  const user = localStorage.getItem("user");
  console.log("user from local storage", user);
  if (user === "undefined" || !user) return null;
  let parsedUser = JSON.parse(user);
  parsedUser.loggedIn = true;
  return parsedUser;
};
const getUserProfileFromLocalStorage = (): UserProfile => {
  const profile = localStorage.getItem("profile");
  if (profile === "undefined" || !profile)
    return {
      id: "",
      bio: "",
      location: "",
      interests: [],
      skills: [],
      avatar: "",
      comeToMeFor: [],
      needHelpFor: [],
      status: "",
    };
  return JSON.parse(profile);
};

export const userAtom = atom<null | UserState>({
  key: "userAtom",
  default: getUserFromLocalStorage(),
});
export const userProfileAtom = atom<UserProfile>({
  key: "userProfileAtom",
  default: getUserProfileFromLocalStorage(),
});
