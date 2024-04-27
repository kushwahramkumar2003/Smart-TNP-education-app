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

export interface RootState {
  user: UserState;
}

export type { UserState };
