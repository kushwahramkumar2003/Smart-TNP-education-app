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
// user.ts

// Define UserProfile type
export type UserProfile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add other fields as needed
};


export interface RootState {
  user: UserState;
}

export type { UserState };
