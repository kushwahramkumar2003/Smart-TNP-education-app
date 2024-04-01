import { useSelector } from "react-redux";
import {
  getUserSelector,
  isSessionExpired,
} from "../../store/slices/userReducers";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactChild, useEffect } from "react";
import { RootState, UserState } from "../../types/user";
import { useToast } from "../ui/use-toast";

const Auth = ({ children }: { children: ReactChild }) => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );

  useEffect(() => {
    const sessionExpired = isSessionExpired();

    if (sessionExpired) {
      console.log("Session expired");
      toast({
        title: "Sesstion Expired",
        description: "Your session has expired. Please login again",
        variant: "default",
        className: "text-green-500",
      });
      navigate("/login");
    }
    const isLoginPage =
      location.pathname === "/login" || location.pathname === "/signup";
    const isAuthorizedUser =
      user.loggedIn && (user.role === "TEACHER" || user.role === "ADMIN");

    if (!isLoginPage && !isAuthorizedUser) {
      navigate("/login");
    }
  }, [user, location.pathname]);

  return <>{children}</>;
};

export default Auth;
