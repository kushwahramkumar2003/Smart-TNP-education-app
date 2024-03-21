import { useSelector } from "react-redux";
import { getUserSelector } from "../../store/slices/userReducers";
import { useNavigate } from "react-router-dom";
import { ReactChild, useEffect } from "react";
import { RootState, UserState } from "../../types/user";

const Auth = ({ children }: { children: ReactChild }) => {
  const navigate = useNavigate();
  const user = useSelector(
    (state: RootState): UserState => getUserSelector(state)
  );

  useEffect(() => {
    console.log("user", user);
    if (!user.loggedIn || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
      navigate("/login");
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default Auth;
