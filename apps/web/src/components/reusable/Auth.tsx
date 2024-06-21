import { useSelector } from "react-redux";
import {
  getUserSelector,
  // isSessionExpired,
} from "../../store/slices/userReducers";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactChild, useEffect } from "react";
import { RootState, UserState } from "../../types/user";
// import { useToast } from "../ui/use-toast";

const Auth = ({ children }: { children: ReactChild }) => {
  // const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );
 
  
  useEffect(() => {
    const isLoginPage =
      location.pathname === "/login" || location.pathname === "/signup";

    if (!isLoginPage) {
      navigate("/login");
    }
  }, [user, location.pathname]);

  return <>{children}</>;
};

export default Auth;
