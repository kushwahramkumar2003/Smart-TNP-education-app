import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "@repo/store";

const SESSION_EXPIRATION_TIME = 5 * 60 * 60 * 1000;
const PrivateRoutes = () => {
  const location = useLocation();
  const user = useRecoilValue(userAtom);
  console.log("default user ", user);
  const sessionExpired = isSessionExpired();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";
  const isAuthorizedUser =
    user && user.loggedIn && (user.role === "TEACHER" || user.role === "ADMIN");

  if (sessionExpired) {
    console.log("Session expired");
    return <Navigate to="/login" />;
  }

  if (!isLoginPage && !isAuthorizedUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

const isSessionExpired = () => {
  const userData = localStorage.getItem("user");
  if (!userData) {
    return false;
  }
  if (userData) {
    const user = JSON.parse(userData);
    const { lastLoggedIn } = user;
    if (lastLoggedIn) {
      const currentTime = Date.now();
      return currentTime - lastLoggedIn > SESSION_EXPIRATION_TIME;
    }
  }
  return true;
};

export default PrivateRoutes;
