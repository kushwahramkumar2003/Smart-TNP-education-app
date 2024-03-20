interface UserState {
  name: string;
  email: string;
  loggedIn: boolean;
  avatar: string;
  username: string;
  role: string;
}

export interface RootState {
  user: UserState;
}

export type { UserState };
