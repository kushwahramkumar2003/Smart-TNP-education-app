interface UserState {
  name: string;
  email: string;
  loggedIn: boolean;
  avatar: string;
  username: string;
  role: string;
  status: string;
  lastLoggedIn: number | null;
}

interface UserProfile {
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

export type { UserState, UserProfile };