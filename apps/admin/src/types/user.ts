interface UserState {
  user: {
    name: string;
    email: string;
    loggedIn: boolean;
    avatar: string;
    username: string;
  };
}

export interface RootState {
  user: UserState;
}

export type { UserState };
