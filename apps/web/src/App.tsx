import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/reusable/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
// import DashboardLayout from './components/reusable/layout/DashboardLayout.tsx'
import Goals from "./pages/Goals/Goals.tsx";
import Resources from "./pages/Resources/Resources.tsx";
import Auth from "./components/reusable/Auth.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
// import SignupForm from "./pages/Login/LoginPage.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import NewCourse from "../../admin/src/pages/Dashboard/screens/NewCourse/NewCourse.tsx"
import Course from "./pages/Course/Course.tsx";
import ResourceDetails from "./components/core/Resource/ResourceDetails.tsx";
import Login from "./pages/Login/LoginPage.tsx";
// import SignUp from "./pages/SignUp.tsx";
// import DashboardItems from "./pages/Dashboard/DashBoardItems.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Auth>
      <Routes>
        <Route path={"/"} element={<HomeLayout />}>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/goals"} element={<Goals />} />
          
          {/* <Route path={"/dashboard-bottom-menu"} element={<DashboardLayout></DashboardLayout>} ></Route> */}
          <Route path={"/schedule"} element={<>To implemented schedule</>} />
          <Route path={"/class"} element={<>To implemented class</>} />
          <Route path={"/course"} element={<Course/>} />
          <Route path={"/resources"} element={<Resources/>} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/directory"} element={<>To implemented directory</>} />
          <Route path={"/mycourses/new"} element={<NewCourse />} />
          <Route path={"/resource/details"} element={<ResourceDetails />} />
        </Route>
        <Route path={"/signup"} element={<SignUp/>} />
          <Route path={"/login"} element={<Login />} />
      </Routes>
        </Auth>
    </ThemeProvider>
  );
}

export default App;

