import { UserState } from "@/store/user/types";
import { useSelector } from "react-redux";

const useIsLoggedIn = () => {
  const user = useSelector((state: UserState) => state.user);
  const isLoggedIn = !!user && (user.name || user.email);
  return isLoggedIn;
};

export default useIsLoggedIn;
