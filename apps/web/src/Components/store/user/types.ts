interface UserState {
  user: {
    name: string;
    email: string;
    loggedIn: boolean;
    avatar: string;
    username: string;
  };
}

export type { UserState };
