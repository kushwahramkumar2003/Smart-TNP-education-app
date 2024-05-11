import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/reusable/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Goals from "./pages/Goals/Goals.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Login from "./pages/Login/Login.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import LiveSchedule from "./pages/LiveSchedule/LiveSchedule.tsx";
import ClassSchedule from "./pages/ClassSchedule/ClassSchedule.tsx";
import PrivateRoutes from "./components/reusable/PrivateRoutes.tsx";
import NewCourse from "./pages/Dashboard/screens/NewCourse/NewCourse.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Auth> */}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomeLayout />}>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/goals"} element={<Goals />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/schedule"} element={<LiveSchedule />} />
            <Route path={"/class"} element={<ClassSchedule />} />
            <Route path={"/course"} element={<>To implemented course</>} />
            <Route
              path={"/resources"}
              element={<>To implemented resources</>}
            />
            <Route
              path={"/directory"}
              element={<>To implemented directory</>}
            />
            <Route path="/mycourses/new" element={<NewCourse />} />
          </Route>
        </Route>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"*"} element={<>404 Not Found</>} />
      </Routes>
      {/* </Auth> */}
    </ThemeProvider>
  );
}

export default App;
