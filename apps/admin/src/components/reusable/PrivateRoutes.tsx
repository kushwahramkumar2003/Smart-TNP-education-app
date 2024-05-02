import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserSelector, isSessionExpired } from "../../store/slices/userReducers";
import { RootState, UserState } from "../../types/user";

const PrivateRoutes = () => {
  const location = useLocation();
  const user = useSelector((state: RootState): UserState => getUserSelector(state));

  const sessionExpired = isSessionExpired();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup";
  const isAuthorizedUser = user.loggedIn && (user.role === "TEACHER" || user.role === "ADMIN");

  if (sessionExpired) {
    console.log("Session expired");
    return <Navigate to="/login" />;
  }

  if (!isLoginPage && !isAuthorizedUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
