import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/reusable/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Goals from "./pages/Goals/Goals.tsx";
import Resources from "./pages/Resources/Resources.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Course from "./pages/Course/Course.tsx";
import ResourceDetails from "./components/core/Resource/ResourceDetails.tsx";
import Login from "./pages/Login/LoginPage.tsx";
import LiveShcedule from "@/pages/LiveShcedule/LiveSchedule.tsx";
import DropDown from "./components/ui/dropDown.tsx";
import ClassSchedule from "./pages/ClassSchedules/classSchedule.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Auth> */}
      <Routes>
        <Route path={"/"} element={<HomeLayout />}>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/goals"} element={<Goals />} />
          <Route path={"/schedule"} element={<LiveShcedule />} />
          <Route path={"/class"} element={<ClassSchedule />} />
          <Route path={"/dropdown"} element={<DropDown />} />
          <Route path={"/class"} element={<>To implemented class</>} />
          <Route path={"/course"} element={<Course />} />
          <Route path={"/classschedule"} element={<>To be implemented</>} />
          <Route path={"/resources"} element={<Resources />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/directory"} element={<>To implemented directory</>} />
          <Route path={"/resource/details"} element={<ResourceDetails />} />
        </Route>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      {/* </Auth> */}
    </ThemeProvider>
  );
}

export default App;

