import { ThemeProvider } from "./components/reusable/theme-provider.tsx";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/reusable/layout/HomeLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
// import DashboardLayout from './components/reusable/layout/DashboardLayout.tsx'
import Goals from "./pages/Goals/Goals.tsx";
import Resources from "./pages/Resources/Resources.tsx";
import Auth from "./components/reusable/Auth.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/LoginPage.tsx";
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
          <Route path={"/course"} element={<>To implemented course</>} />
          <Route path={"/resources"} element={<Resources/>} />
          <Route path={"/directory"} element={<>To implemented directory</>} />
        </Route>
        <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
      </Routes>
        </Auth>
    </ThemeProvider>
  );
}

export default App;

